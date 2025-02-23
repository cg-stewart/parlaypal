import CTA from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import ScoreTicker from "@/components/landing/score-ticker";
import Testimonials from "@/components/landing/testimonials";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white w-full">
      <Navbar />
      <ScoreTicker />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
