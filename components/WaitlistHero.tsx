"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BellRing, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const waitlistBenefits = [
    "Early access when the app launches",
    "Launch updates without spam",
    "Priority news on new features and rollout timing",
];

export function WaitlistHero() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [website, setWebsite] = useState("");
    const [loadedAt, setLoadedAt] = useState("");

    useEffect(() => {
        setLoadedAt(String(Date.now()));
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedEmail = email.trim().toLowerCase();

        if (website.trim()) {
            return;
        }

        if (!EMAIL_REGEX.test(trimmedEmail)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: trimmedEmail,
                    website: website.trim(),
                    loadedAt,
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(data?.error ?? "Something went wrong.");
            }

            toast.success("You're on the list. We'll email you when MahaCura launches.");
            setEmail("");
        } catch (error) {
            const message = error instanceof Error ? error.message : "We couldn't save your email right now.";
            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-24 md:pt-32 md:pb-32">
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/30 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl filter" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
                            <Sparkles className="h-4 w-4" />
                            Launching soon
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-urbanist font-medium tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                                Be the first to know when <span className="text-primary">MahaCura</span> goes live.
                            </h1>
                            <p className="max-w-[640px] text-lg text-muted-foreground md:text-xl">
                                Join the waitlist to get the launch email as soon as the app is ready. We&apos;ll only send the updates that matter.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex max-w-2xl flex-col gap-3 sm:flex-row">
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="company-website">Website</label>
                                <input
                                    id="company-website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={website}
                                    onChange={(event) => setWebsite(event.target.value)}
                                />
                            </div>
                            <label className="sr-only" htmlFor="waitlist-email">
                                Email address
                            </label>
                            <input
                                id="waitlist-email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="min-h-[3.75rem] w-full flex-1 rounded-full border border-input bg-white/80 px-6 py-4 text-lg leading-none text-foreground shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:min-h-[3rem] sm:px-5 sm:py-3 sm:text-base"
                                disabled={isSubmitting}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60"
                            >
                                {isSubmitting ? "Joining..." : "Join Waitlist"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </form>

                        <div className="space-y-3">
                            {waitlistBenefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground md:text-base">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-200/70 via-white to-teal-100/70 blur-2xl" />
                        <div className="relative rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(7,165,130,0.15)] backdrop-blur-xl">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <BellRing className="h-7 w-7" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
                                        Waitlist
                                    </p>
                                    <h2 className="text-2xl font-urbanist font-semibold text-foreground">
                                        Launch updates, not noise
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-2xl bg-secondary/40 p-5">
                                    <p className="text-sm font-semibold text-foreground">What you&apos;ll hear from us</p>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        Launch day access, rollout timing, and the biggest product updates as MahaCura gets ready for release.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                                    <p className="text-sm font-semibold text-foreground">Why join now</p>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        You&apos;ll have a direct line for release news while we finish the final pieces of the app experience.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-dashed border-primary/20 bg-primary/[0.04] p-5">
                                    <p className="text-sm font-semibold text-foreground">Privacy first</p>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        We&apos;re collecting your email only so we can let you know when the app is available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
