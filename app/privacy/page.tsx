import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl font-urbanist font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information that you provide to us, such as
              your name, email address, and password. We also collect health
              data that you specifically track within the app, such as period
              start dates, symptoms, and moods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide and improve our
              services, including providing you with personalized health
              insights and cycle predictions. We do not sell your personal data
              to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Data Storage and Security
            </h2>
            <p>
              Your data is securely stored using Supabase. We implement standard
              security measures to protect your information from unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Sharing
            </h2>
            <p>
              We do not share your personal health data with advertisers or
              third parties without your explicit consent, except as required by
              law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can manage your data directly within the &quot;My
              Account&quot; section of the app or contact us for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Changes to This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@mahacura.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
