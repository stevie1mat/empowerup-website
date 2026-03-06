"use client";

import { Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background py-12 md:py-16">
            <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row">

                <div className="flex flex-col items-center gap-2 md:items-start">
                    <span className="text-xl font-urbanist font-bold text-foreground">MahaCura</span>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} MahaCura. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground">Terms</a>
                    <a href="#" className="hover:text-foreground">Privacy</a>
                    <a href="#" className="hover:text-foreground">Contact</a>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    Made with <Heart className="h-4 w-4 text-accent fill-current" /> for you.
                </div>
            </div>
        </footer>
    );
}
