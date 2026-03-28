import { Button } from "@/components/ui/button";
import { Send, Eye, Star, Zap, CheckCircle2, MessageCircle, Instagram, Briefcase } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-16 md:pt-20 md:pb-0">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            After Effects Specialist
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium backdrop-blur-sm border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Contact rapid
          </div>
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-4xl mx-auto px-4">
          {/* Telegram */}
          <a
            href="https://t.me/ArtioMotion"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/30 backdrop-blur-xl border border-primary/50 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-all text-white font-bold text-lg hover:-translate-y-1 w-full md:w-auto min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Send className="h-5 w-5 text-white group-hover:scale-110 transition-transform relative z-10 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            <span className="relative z-10 tracking-wide text-white group-hover:text-white transition-colors">Telegram</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/37368189267"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/30 backdrop-blur-xl border border-primary/50 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-all text-white font-bold text-lg hover:-translate-y-1 w-full md:w-auto min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform relative z-10 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            <span className="relative z-10 tracking-wide text-white group-hover:text-white transition-colors">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/artiomotion.md"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/30 backdrop-blur-xl border border-primary/50 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-all text-white font-bold text-lg hover:-translate-y-1 w-full md:w-auto min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform relative z-10 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            <span className="relative z-10 tracking-wide text-white group-hover:text-white transition-colors">Instagram</span>
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/s/8zX6GxZ"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary/30 backdrop-blur-xl border border-primary/50 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-all text-white font-bold text-lg hover:-translate-y-1 w-full md:w-auto min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Briefcase className="h-5 w-5 text-white group-hover:scale-110 transition-transform relative z-10 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            <span className="relative z-10 tracking-wide text-white group-hover:text-white transition-colors">Fiverr</span>
          </a>
        </div>

        <div className="mt-12 md:mt-20 max-w-5xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <div className="flex-1 w-full sm:w-auto px-6 py-4 rounded-full bg-secondary/50 backdrop-blur-xl border border-white/5 flex flex-row items-center gap-5 shadow-2xl transition hover:-translate-y-1 hover:border-blue-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10 border border-primary/20 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col text-left relative z-10">
              <span className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-none mb-1">50+</span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium leading-none">Proiecte Finalizate</span>
            </div>
          </div>

          <div className="flex-1 w-full sm:w-auto px-6 py-4 rounded-full bg-secondary/50 backdrop-blur-xl border border-white/5 flex flex-row items-center gap-5 shadow-2xl transition hover:-translate-y-1 hover:border-blue-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 relative z-10 border border-accent/20 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 text-accent fill-accent/20" />
            </div>
            <div className="flex flex-col text-left relative z-10">
              <span className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-none mb-1">5.0</span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium leading-none">Rating Clienți</span>
            </div>
          </div>

          <div className="flex-1 w-full sm:w-auto px-6 py-4 rounded-full bg-secondary/50 backdrop-blur-xl border border-white/5 flex flex-row items-center gap-5 shadow-2xl transition hover:-translate-y-1 hover:border-blue-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 relative z-10 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex flex-col text-left relative z-10">
              <span className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-none mb-1">2 Zile</span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium leading-none">Livrare Rapidă</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
