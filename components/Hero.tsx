"use client";

import { toast } from "sonner";

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
                            <h1 className="text-4xl font-urbanist font-medium tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                                Meet <span className="text-primary italic">Luna.</span> <br />
                                Your cycle&apos;s new best friend.
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                                Sync your life with your biology. <span className="font-semibold text-foreground">Luna (AI)</span> predicts your energy and mood, while tracking your <span className="text-secondary-foreground">inventory and local supplies</span> so you never run out.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button onClick={() => toast.success("Coming Soon!")} className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                <Download className="mr-2 h-4 w-4" />
                                Download App
                            </button>
                            <a href="#science" className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Meet Luna
                            </a>
                        </div>

                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                                <div className="w-8 h-8 rounded-full border-2 border-background bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                    +10k
                                </div>
                            </div>
                            <span className="font-medium">Trusted by 10,000+ users</span>
                        </div>
                    </motion.div>

                    {/* 3D Mockup Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[260px] lg:max-w-[300px] perspective-1000"
                        style={{ perspective: "1000px" }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0], rotateY: [-12, -12, -12], rotateX: [5, 5, 5], rotateZ: [-2, -2, -2] }}
                            transition={{
                                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                                default: { duration: 0 }
                            }}
                            className="relative preserve-3d"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "rotateY(-12deg) rotateX(5deg) rotateZ(-2deg)"
                            }}
                        >
                            {/* 3D Circle/Orb Behind - Very Light Pink */}
                            <div
                                className="absolute top-1/2 left-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-emerald-100 via-teal-200 to-emerald-300 blur-2xl -z-20 opacity-80"
                                style={{
                                    transform: "translate(-50%, -50%) translateZ(-100px)",
                                    boxShadow: "inset -10px -10px 40px rgba(0,0,0,0.05), inset 10px 10px 30px rgba(255,255,255,0.4)"
                                }}
                            />
                            {/* Outer Soft Glow */}
                            <div
                                className="absolute top-1/2 left-1/2 w-[550px] h-[550px] rounded-full bg-primary/20 blur-3xl -z-30"
                                style={{ transform: "translate(-50%, -50%) translateZ(-150px)" }}
                            />
                            {/* Glass Ring */}
                            <div
                                className="absolute top-1/2 left-1/2 w-[440px] h-[440px] rounded-full border-[2px] border-white/40 bg-white/5 backdrop-blur-[2px] -z-10 shadow-lg"
                                style={{ transform: "translate(-50%, -50%) translateZ(-50px)" }}
                            />

                            {/* CSS Phone Frame */}
                            <div className="relative rounded-[2.5rem] border-[6px] border-white bg-black shadow-[20px_20px_60px_rgba(0,0,0,0.3)] overflow-hidden aspect-[9/19]">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-20" />

                                {/* Screen Image */}
                                <div className="relative w-full h-full bg-[#E0F2F1]">
                                    <Image
                                        src="/app_screen_pink.png"
                                        alt="MahaCura App Interface"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Screen Glare */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                                </div>
                            </div>

                            {/* Floating Elements - Luna Chat Bubble */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -right-24 top-28 p-4 rounded-2xl rounded-tl-sm bg-white/90 backdrop-blur-xl shadow-xl border border-white/60 hidden md:block max-w-[180px]"
                                style={{ transform: "translateZ(40px)" }}
                            >
                                <div className="flex gap-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shrink-0 shadow-sm">
                                        <span className="text-white text-xs font-bold">✨</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xs text-foreground mb-0.5">Luna</div>
                                        <p className="text-[10px] text-muted-foreground leading-tight">
                                            Hey! Your energy is peaking. Use it now! 💪
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-16 bottom-40 p-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/40 hidden md:block"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                    <div className="text-xs font-medium text-foreground pr-2">Cycle synced</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
