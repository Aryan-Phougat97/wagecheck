import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { FooterCta } from "@/components/FooterCta";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <FooterCta />
    </main>
  );
}
