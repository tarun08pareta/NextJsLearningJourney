import FeatureCources from "@/components/FeatureCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCard from "@/components/TestimonialCard";
import { Meteors } from "@/components/ui/meteors";
import UpcommingWebnior from "@/components/UpcommingWebnior";
// import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-blacl/[0.90] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeatureCources />
      {/* <WhyChooseUs/> */}
      <TestimonialCard />
      <UpcommingWebnior />
      <Instructor />
      <Footer />
      <Meteors number={100} />
    </main>
  );
}
