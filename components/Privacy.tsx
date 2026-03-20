"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Privacy() {
    return (
        <section className="bg-secondary/20 py-24 md:py-32" id="privacy">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl space-y-8"
                >
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-primary">
                        <ShieldCheck className="h-10 w-10" />
                    </div>

                    <h2 className="text-3xl font-urbanist font-medium text-foreground md:text-5xl">
                        Encrypted. Anonymous. Yours.
                    </h2>

                    <p className="text-lg text-muted-foreground md:text-xl">
                        We believe privacy is a human right. Your data is stored locally and encrypted.
                        We don&apos;t see it, and we certainly don&apos;t sell it.
                    </p>

                    <div className="pt-4">
                        <Link href="/privacy" className="text-sm font-semibold text-primary decoration-primary underline-offset-4 hover:underline">
                            Read our full Privacy Promise &rarr;
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
