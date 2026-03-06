"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Finally, an app that actually knows what Shoppers Drug Mart has in stock! No more wasted trips when I need ibuprofen.",
        author: "Emily R.",
        location: "Toronto, ON",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        quote: "Luna predicted my luteal phase burnout perfectly. I proactively cleared my schedule and felt so much better.",
        author: "Sarah L.",
        location: "Vancouver, BC",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    {
        quote: "Privacy laws in Canada matter to me. Knowing my health data is encrypted and stays local makes me feel safe.",
        author: "Chloe M.",
        location: "Montreal, QC",
        avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-primary/5 relative overflow-hidden" id="community">
            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-urbanist font-medium tracking-tight sm:text-4xl mb-4">
                        Trusted by Women Across <span className="text-red-500">Canada</span>.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Join the community that&apos;s redefining women&apos;s health from coast to coast.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                                    ))}
                                </div>
                                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <div className="font-semibold text-foreground text-sm">{t.author}</div>
                                    <div className="text-xs text-muted-foreground">{t.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
