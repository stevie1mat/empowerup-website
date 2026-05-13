import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Privacy } from "@/components/Privacy";
import { WaitlistHero } from "@/components/WaitlistHero";

export const metadata: Metadata = {
  title: "MahaCura Waitlist | Get Launch Updates",
  description:
    "Join the MahaCura waitlist and get an email as soon as the app is released.",
};

export default function WaitlistPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <WaitlistHero />
      <Privacy />
      <Footer />
    </main>
  );
}
