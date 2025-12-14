"use client";

import { motion } from "framer-motion";
import { BrainCircuit, MapPin, PackageOpen, CalendarDays, ShoppingBag, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
    return (
        <section className="container mx-auto px-4 py-24 md:py-32">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-medium text-foreground md:text-5xl">
                    More than just tracking.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Empower Up connects your body&apos;s rhythm with the world around you.
                    Find essentials nearby, manage your inventory, and stay ahead of your cycle.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 auto-rows-[minmax(250px,auto)]">

                {/* Feature 1: Intelligent Tracking (Large) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-[#F3E5F5] p-8 flex flex-col gap-6 group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background shadow-sm">
                            <CalendarDays className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Cycle Intelligence</h3>
                        <p className="text-muted-foreground max-w-sm">
                            Beyond simple dates. AI predicts your symptoms and energy levels, syncing your calendar with your biology.
                        </p>
                    </div>

                    {/* UI Mockup for Tracking */}
                    <div className="relative h-auto min-h-[220px] bg-background rounded-2xl shadow-sm border border-border/50 p-6 overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
                            <span className="font-semibold text-sm">October 2025</span>
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">Pro Version</span>
                        </div>
                        <div className="flex justify-around text-center opacity-70">
                            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                                <div key={i} className="text-xs font-medium w-6">{d}</div>
                            ))}
                        </div>
                        <div className="flex justify-around mt-4">
                            {[12, 13, 14, 15, 16, 17, 18].map((d, i) => (
                                <div key={i} className={cn(
                                    "w-8 h-8 flex items-center justify-center text-sm rounded-full transition-all",
                                    d === 14 ? "bg-accent text-accent-foreground font-bold shadow-md scale-110" : "text-muted-foreground hover:bg-gray-50"
                                )}>
                                    {d}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-3">
                            <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium flex items-center gap-1.5 w-max">
                                <BrainCircuit className="w-4 h-4" /> High Energy
                            </div>
                            <div className="px-3 py-2 rounded-lg bg-pink-100 text-pink-700 text-xs font-medium flex items-center gap-1.5 w-max">
                                Ovulation
                            </div>
                        </div>
                    </div>

                    {/* New "Daily Insight" Sub-card to fill space */}
                    <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 border border-white/40 shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                            <BrainCircuit className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-foreground">Daily Insight</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                                Your energy is peaking today! Perfect time for that high-intensity workout you&apos;ve been planning.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Feature 2: Nearby Store Locator (Wide) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#FDEDF2] border border-gray-100 rounded-3xl p-8 flex flex-col sm:flex-row gap-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[#F5F5F0] opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

                    <div className="flex-1 relative z-10">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 shadow-sm">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Emergency Essentials</h3>
                        <p className="text-muted-foreground">
                            Caught unprepared? Locate the nearest verified store with period products in stock.
                        </p>
                    </div>

                    {/* Map UI Mockup */}
                    <div className="w-full sm:w-1/2 h-40 sm:h-auto bg-[#F0F4F8] rounded-2xl border border-gray-200 relative overflow-hidden flex items-center justify-center shadow-inner">
                        {/* Map Grid & Streets */}
                        <div className="absolute inset-0 opacity-60">
                            <svg width="100%" height="100%">
                                <defs>
                                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="2.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#map-grid)" />
                                {/* Diagonal Main Road */}
                                <line x1="120" y1="-20" x2="160" y2="300" stroke="white" strokeWidth="6" />
                            </svg>
                        </div>

                        {/* Other Stores (Inactive) */}
                        <div className="absolute top-8 left-12 opacity-50">
                            <MapPin className="w-4 h-4 text-gray-400 fill-current" />
                        </div>
                        <div className="absolute bottom-10 left-8 opacity-50">
                            <MapPin className="w-4 h-4 text-gray-400 fill-current" />
                        </div>
                        <div className="absolute top-1/3 right-8 opacity-50">
                            <MapPin className="w-4 h-4 text-gray-400 fill-current" />
                        </div>

                        {/* Active Pin (Nearest) */}
                        <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10 transition-transform hover:-translate-y-1">
                            <div className="px-2.5 py-1.5 bg-[#2D2A3E] text-white text-[10px] font-bold rounded-lg shadow-xl flex items-center gap-1.5 mb-2 whitespace-nowrap">
                                5 min <ShoppingBag className="w-3 h-3 text-white/80" />
                            </div>
                            <MapPin className="w-8 h-8 text-[#2D2A3E] fill-current drop-shadow-md" />
                            {/* Pulse effect for active location */}
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-[#2D2A3E]/30 rounded-full blur-[2px]" />
                        </div>
                    </div>
                </motion.div>

                {/* Feature 3: Smart Inventory (Tall) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="col-span-1 lg:col-span-1 lg:row-span-1 bg-[#E1BEE7]/20 rounded-3xl p-8 relative overflow-hidden group hover:shadow-lg transition-all"
                >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                        <PackageOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">Smart Inventory</h3>
                    <p className="text-sm text-muted-foreground mt-2 mb-6">
                        Track your stash. Get alerts before you run out.
                    </p>

                    {/* Inventory Pill UI */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                                <span className="text-sm font-medium text-foreground">Tampons</span>
                            </div>
                            <span className="text-[10px] text-red-500 font-bold bg-red-50 px-2 py-1 rounded-full">Low</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-red-400 h-full w-[20%]" />
                        </div>
                        <div className="text-right text-xs text-muted-foreground">3 remaining</div>
                    </div>
                </motion.div>

                {/* Feature 4: Discrete Notifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="col-span-1 lg:col-span-1 lg:row-span-1 bg-white border border-gray-100 rounded-3xl p-8 group hover:shadow-lg transition-all"
                >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-sm">
                        <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">Subtle Alerts</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        No awkward notifications. Just gentle, private reminders.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg flex items-center gap-2 opacity-40 blur-[1px]">
                            <div className="w-8 h-8 bg-gray-200 rounded-full" />
                            <div className="h-2 w-24 bg-gray-200 rounded" />
                        </div>
                        <div className="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-3 shadow-md scale-105 origin-left">
                            <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                <Bell className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-foreground">Empower Up</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">Order reminder: Cycle starts in 3 days.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
