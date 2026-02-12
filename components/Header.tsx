"use client";

import { toast } from "sonner";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
                        <span className="text-2xl font-serif font-bold text-foreground">
                            MahaCura
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </a>
                        <a href="#science" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Science
                        </a>
                        <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Privacy
                        </a>
                        <button onClick={() => toast.success("Coming Soon!")} className="rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
                            Download App
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
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
                        <a href="#features" className="text-base font-medium text-muted-foreground hover:text-foreground p-2">
                            Features
                        </a>
                        <a href="#science" className="text-base font-medium text-muted-foreground hover:text-foreground p-2">
                            Science
                        </a>
                        <a href="#privacy" className="text-base font-medium text-muted-foreground hover:text-foreground p-2">
                            Privacy
                        </a>
                        <button onClick={() => toast.success("Coming Soon!")} className="w-full rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
                            Download App
                        </button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
