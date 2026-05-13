"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Change background opacity based on scroll
    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-urbanist font-bold text-foreground">
                            MahaCura
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                        <Link href="/#science" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Science
                        </Link>
                        <Link href="/#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Privacy
                        </Link>
                        <Link href="/waitlist" className="rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
                            Join Waitlist
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden shadow-lg"
                >
                    <nav className="flex flex-col gap-4">
                        <Link href="/#features" className="text-base font-medium text-muted-foreground hover:text-foreground p-2" onClick={() => setIsMobileMenuOpen(false)}>
                            Features
                        </Link>
                        <Link href="/#science" className="text-base font-medium text-muted-foreground hover:text-foreground p-2" onClick={() => setIsMobileMenuOpen(false)}>
                            Science
                        </Link>
                        <Link href="/#privacy" className="text-base font-medium text-muted-foreground hover:text-foreground p-2" onClick={() => setIsMobileMenuOpen(false)}>
                            Privacy
                        </Link>
                        <Link href="/waitlist" className="w-full rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>
                            Join Waitlist
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
