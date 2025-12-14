"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-48">
            {/* Background/Gradient Orb - Animated */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/30 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl filter" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                                Sync with your cycle, <br />
                                <span className="text-primary">not just your calendar.</span>
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                                Master your body&apos;s natural rhythm with AI-backed insights.
                                Empower Up gives you the science—you own the data.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                <Download className="mr-2 h-4 w-4" />
                                Download on App Store
                            </button>
                            <button className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Get it on Google Play
                            </button>
                        </div>

                        <div className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">4.9/5</span> stars from 10,000+ users
                        </div>
                    </motion.div>

                    {/* 3D Mockup Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square">
                            {/* Glassmorphism Card Effect behind the image */}
                            <div className="absolute inset-4 rounded-3xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20 transform rotate-[-6deg] z-0" />

                            {/* Placeholder for the 3D Image */}
                            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
                                <Image
                                    src="/app_mockup_3d.png"
                                    alt="Empower Up App Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
