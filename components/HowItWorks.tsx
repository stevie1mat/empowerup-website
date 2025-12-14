"use client";

import { motion } from "framer-motion";
import { ListChecks, Lightbulb, ShoppingBag } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Log Your Symptoms",
        desc: "A quick daily check-in. Tap to log mood, energy, and physical signs in under 10 seconds.",
        icon: ListChecks,
    },
    {
        id: 2,
        title: "Get Daily Insights",
        desc: "Luna analyzes your data to explain WHY you feel this way and what your body needs to thrive.",
        icon: Lightbulb,
    },
    {
        id: 3,
        title: "Sync & Thrive",
        desc: "Get personalized product recommendations and check stock at local Canadian stores like Shoppers & Rexall.",
        icon: ShoppingBag,
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="how-it-works">
            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl mb-4">
                        How Empower Up Works
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Three simple steps to mastering your monthly rhythm.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-3 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/30 transition-colors relative z-10">
                                <step.icon className="w-10 h-10 text-primary" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-sm">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl font-medium mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
