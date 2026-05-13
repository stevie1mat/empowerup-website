const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_DELAY_MS = 2500;
const BLOCKED_EMAIL_DOMAINS = new Set([
  "10minutemail.com",
  "discard.email",
  "example.com",
  "fake.com",
  "guerrillamail.com",
  "invalid.com",
  "mailinator.com",
  "s.com",
  "sharklasers.com",
  "tempmail.com",
  "test.com",
  "yopmail.com",
]);

function isBlockedEmail(email: string) {
  const [, domain = ""] = email.split("@");
  const normalizedDomain = domain.trim().toLowerCase();

  if (!normalizedDomain) {
    return true;
  }

  return BLOCKED_EMAIL_DOMAINS.has(normalizedDomain);
}

async function sendWaitlistNotification(email: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const waitlistNotifyToEmail = process.env.WAITLIST_NOTIFY_TO_EMAIL;
  const recipients = (waitlistNotifyToEmail ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!resendApiKey || !resendFromEmail || recipients.length === 0) {
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: recipients,
      subject: "New MahaCura waitlist signup",
      html: `
        <div style="margin:0;padding:32px 16px;background:linear-gradient(180deg,#ffffff 0%,#f0fdf9 100%);font-family:Inter,Arial,Helvetica,sans-serif;color:#1f2937;">
          <div style="max-width:640px;margin:0 auto;">
            <div style="display:inline-block;padding:10px 18px;border:1px solid rgba(7,165,130,0.16);border-radius:999px;background:rgba(255,255,255,0.9);color:#07a582;font-size:14px;font-weight:600;box-shadow:0 4px 14px rgba(15,23,42,0.06);">
              Launching soon
            </div>

            <div style="margin-top:20px;padding:36px 32px;border-radius:32px;background:rgba(255,255,255,0.92);border:1px solid rgba(255,255,255,0.9);box-shadow:0 24px 80px rgba(7,165,130,0.14);">
              <div style="font-size:18px;font-weight:700;letter-spacing:-0.02em;color:#1f2937;">
                MahaCura
              </div>

              <h1 style="margin:20px 0 12px;font-family:Urbanist,Inter,Arial,Helvetica,sans-serif;font-size:40px;line-height:1.05;font-weight:500;letter-spacing:-0.04em;color:#1f2937;">
                New <span style="color:#07a582;">waitlist</span> signup
              </h1>

              <p style="margin:0 0 24px;font-size:18px;line-height:1.7;color:#4b5563;">
                A new user joined the MahaCura launch list. Here are the details from the latest signup.
              </p>

              <div style="padding:22px 24px;border-radius:24px;background:rgba(224,242,241,0.5);border:1px solid rgba(7,165,130,0.08);">
                <div style="font-size:13px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(31,41,55,0.72);margin-bottom:10px;">
                  Subscriber
                </div>
                <div style="font-size:24px;line-height:1.4;font-weight:600;color:#1f2937;word-break:break-word;">
                  ${email}
                </div>
              </div>

              <div style="margin-top:24px;padding:18px 20px;border-radius:20px;border:1px dashed rgba(7,165,130,0.22);background:rgba(7,165,130,0.04);font-size:14px;line-height:1.7;color:#4b5563;">
                This notification was sent automatically from the MahaCura waitlist page.
              </div>
            </div>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const errorMessage =
      typeof errorBody?.message === "string"
        ? errorBody.message
        : "Failed to send waitlist notification email.";

    throw new Error(errorMessage);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const website = typeof body?.website === "string" ? body.website.trim() : "";
    const loadedAt = typeof body?.loadedAt === "string" ? Number(body.loadedAt) : Number.NaN;

    if (website) {
      return Response.json({ success: true });
    }

    if (!Number.isFinite(loadedAt) || Date.now() - loadedAt < MIN_SUBMIT_DELAY_MS) {
      return Response.json(
        { error: "Please wait a moment and try again." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (isBlockedEmail(email)) {
      return Response.json(
        { error: "Please use a valid personal email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const waitlistTable = process.env.SUPABASE_WAITLIST_TABLE ?? "waitlist_signups";

    if (!supabaseUrl || !supabaseAnonKey) {
      return Response.json(
        { error: "Waitlist is not configured yet. Add Supabase environment variables first." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/${waitlistTable}`,
      {
        method: "POST",
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify([{ email }]),
      }
    );

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const errorCode =
        typeof errorBody?.code === "string" ? errorBody.code : "";

      if (response.status === 409 || errorCode === "23505") {
        return Response.json(
          { error: "You have already subscribed." },
          { status: 409 }
        );
      }

      const errorMessage =
        typeof errorBody?.message === "string"
          ? errorBody.message
          : typeof errorBody?.error === "string"
            ? errorBody.error
            : "We couldn't save your email right now.";

      return Response.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    try {
      await sendWaitlistNotification(email);
    } catch (error) {
      console.error("Failed to send waitlist notification", error);
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "We couldn't save your email right now." },
      { status: 500 }
    );
  }
}
