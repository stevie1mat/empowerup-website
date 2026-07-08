import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Science } from "@/components/Science";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Privacy } from "@/components/Privacy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <Science />
      <Features />
      <HowItWorks />
      <FAQ />
      <Privacy />
      <Footer />
    </main>
  );
}
