import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          After Effects Specialist
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Motion Design
          <br />
          <span className="text-gradient">Profesional</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Animații custom, editare template-uri, promo-uri și explainer-e.
          Transformă-ți ideile în conținut vizual de impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => scrollTo("order")}>
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
