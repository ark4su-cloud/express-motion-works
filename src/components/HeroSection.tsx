import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const services = [
  "Logo Animation",
  "Intro / Outro Animation",
  "Explainer Videos (2D/3D)",
  "Animated Advertisements",
  "Social Media Animations",
  "Product Promo Videos",
  "Animated Presentations",
  "Brand Animation",
  "Infographics Animation",
  "Storyboarding & Concept",
];

const HeroSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentService = services[currentServiceIndex];

  const typeEffect = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < currentService.length) {
        setTimeout(() => setDisplayText(currentService.slice(0, displayText.length + 1)), 60);
      } else {
        setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
      } else {
        setIsDeleting(false);
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
      }
    }
  }, [displayText, isDeleting, currentService]);

  useEffect(() => {
    const timeout = setTimeout(typeEffect, 0);
    return () => clearTimeout(timeout);
  }, [typeEffect]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-hero-bg" />
      <div className="absolute inset-0 hero-noise opacity-[0.03]" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-accent/15 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[60%] w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[20%] right-[30%] w-48 h-48 rounded-full bg-violet-400/10 blur-[60px] animate-pulse-glow" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          After Effects Specialist
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
          Motion Design
          <br />
          <span className="text-gradient-animated">Profesional</span>
        </h1>

        {/* Typewriter effect */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-8">
          <span className="font-mono text-lg md:text-2xl text-primary/80">
            {displayText}
            <span className="inline-block w-[2px] h-6 md:h-7 bg-primary ml-1 animate-blink align-middle" />
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Animații custom, editare template-uri, promo-uri și explainer-e.
          Transformă-ți ideile în conținut vizual de impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6 animate-gradient-shift" onClick={() => scrollTo("order")}>
            Plasează Comanda
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" onClick={() => scrollTo("pricing")}>
            <Eye className="mr-2 h-5 w-5" />
            Vezi Prețurile
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-display font-bold text-foreground">50+</span>
            <span>Proiecte Finalizate</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-display font-bold text-foreground">⭐ 5.0</span>
            <span>Rating Clienți</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-display font-bold text-foreground">2 zile</span>
            <span>Livrare Rapidă</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
