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

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[0%] w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] animate-float opacity-70 md:opacity-60 will-change-transform transform-gpu" style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.25) 0%, transparent 60%)' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] animate-float opacity-60 md:opacity-50 will-change-transform transform-gpu" style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.25) 0%, transparent 60%)', animationDelay: "3s" }} />
          <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] animate-float opacity-60 md:opacity-50 will-change-transform transform-gpu" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)', animationDelay: "5s" }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-mesh opacity-80" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <OrderSection />
        <PortfolioSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
