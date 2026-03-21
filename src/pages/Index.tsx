import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
