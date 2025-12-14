import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Empower Up Canada | #1 AI Cycle Syncing & Period Tracker",
  description: "Join thousands of Canadian women mastering their cycle with Empower Up. Localized inventory tracking for brands you love (Shoppers, Rexall) and AI-backed health insights.",
  keywords: ["Period Tracker Canada", "Empower Up Canada", "Cycle Syncing App", "Women's Health Canada", "Ovulation Tracker Toronto", "Menstrual Cycle App"],
  openGraph: {
    title: "Empower Up Canada",
    description: "The only period tracker that knows what's in stock at your local Canadian pharmacy. AI-powered, privacy-first.",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
