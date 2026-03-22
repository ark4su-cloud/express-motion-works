import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-hero-bg" />
        <div className="absolute inset-0 hero-noise opacity-[0.06]" />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[0%] w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full bg-primary/30 blur-[100px] md:blur-[130px] animate-float opacity-70 md:opacity-60" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full bg-accent/30 blur-[100px] md:blur-[130px] animate-float opacity-60 md:opacity-50" style={{ animationDelay: "3s" }} />
          <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-blue-500/20 blur-[100px] md:blur-[120px] animate-float opacity-60 md:opacity-50" style={{ animationDelay: "5s" }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-mesh opacity-80" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <OrderSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
