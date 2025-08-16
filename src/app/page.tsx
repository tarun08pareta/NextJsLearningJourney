import FeatureCources from "@/components/FeatureCources";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-blacl/[0.90] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeatureCources />
    </main>
  );
}
