import { useState } from "react";
import { Film, Paintbrush, Globe, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Film,
    title: "Animații & Motion Design",
    description: "Custom animations, editare template-uri After Effects, promo-uri, explainer-e și multe altele.",
    active: true,
    type: "animations",
  },
  {
    icon: Paintbrush,
    title: "Creare Logo-uri",
    description: "Design de logo-uri profesionale cu vectorizare și transparență inclusă. Pachet complet.",
    active: true,
    type: "logos",
  },
  {
    icon: Globe,
    title: "Creare Site-uri",
    description: "Website-uri moderne și responsive pentru business-ul tău. Design premium.",
    active: true,
    type: "websites",
  },
];

const logoPricing = {
  price: "150",
  features: [
    "5-6 variante diferite de logo-uri",
    "Logo pe fundal negru, alb sau personalizat",
    "Formate .pdf, .ai și .png",
    "Etape de feedback incluse",
    "Variante verticale și orizontale",
    "Fundal transparent inclus",
  ],
};

const websitePlans = [
  { name: "Simplu", price: "—", description: "Landing page sau site de prezentare simplu", available: false },
  { name: "Medium", price: "—", description: "Site cu mai multe pagini și funcționalități", available: false },
  { name: "Complicat", price: "—", description: "Platformă complexă cu funcții avansate", available: false },
];

const ServicesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Serviciile <span className="text-gradient">Mele</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Alege serviciul potrivit pentru proiectul tău
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {/* ANIMATIONS CARD */}
          <div className="relative p-[2px] rounded-3xl overflow-hidden group shadow-lg flex h-full">
            <div className="absolute inset-[-100%] animate-[spin_20s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, hsl(var(--primary)) 100%)" }} />
            <div className="relative bg-card rounded-[calc(1.5rem-2px)] p-8 flex flex-col h-full z-10 w-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                <Film className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Animații & Motion Design</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Custom animations, editare template-uri After Effects, promo-uri, explainer-e și multe altele.
              </p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {["Proiect unic, de la zero", "Sound Design & SFX inclus", "Livrare rapidă", "Format Adaptabil (TikTok/IG)"].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto mb-4 border-t border-border pt-4">
                 <div className="flex justify-between items-center bg-secondary/50 p-4 rounded-xl border border-white/5 shadow-inner">
                   <span className="text-sm font-medium">3 pachete disponibile</span>
                 </div>
              </div>
              <Button className="w-full py-6 font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all hover:scale-[1.02] cursor-pointer" onClick={() => scrollTo("pricing")}>
                Vezi Pachetele
              </Button>
            </div>
          </div>

          {/* LOGO CARD */}
          <div className="relative p-[2px] rounded-3xl overflow-hidden group shadow-lg flex h-full">
            <div className="absolute inset-[-100%] animate-[spin_20s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, hsl(var(--accent)) 100%)" }} />
            <div className="relative bg-card rounded-[calc(1.5rem-2px)] p-8 flex flex-col h-full z-10 w-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-accent/10 text-accent">
                <Paintbrush className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Creare Logo-uri</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Design de logo-uri profesionale cu vectorizare și transparență inclusă. Pachet complet.
              </p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {logoPricing.features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto mb-4 border-t border-border pt-4">
                 <div className="flex justify-between items-center bg-secondary/50 p-3 rounded-xl border border-white/5 shadow-inner">
                   <span className="text-sm font-medium">Preț Fix:</span>
                   <span className="font-display text-xl font-bold text-accent">€{logoPricing.price}</span>
                 </div>
              </div>
              <Button className="w-full py-6 font-bold text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_20px_rgba(var(--accent),0.3)] transition-all hover:scale-[1.02] cursor-pointer" onClick={() => scrollTo("order")}>
                Comandă Logo
              </Button>
            </div>
          </div>

          {/* WEBSITE CARD */}
          <div className="relative p-[2px] rounded-3xl overflow-hidden group shadow-lg flex h-full">
            <div className="absolute inset-[-100%] animate-[spin_20s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, #3b82f6 100%)" }} />
            <div className="relative bg-card rounded-[calc(1.5rem-2px)] p-8 flex flex-col h-full z-10 w-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-500/10 text-blue-500">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Creare Site-uri</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Website-uri moderne și responsive pentru business-ul tău. Design premium.
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                {websitePlans.map((wp) => (
                  <div key={wp.name} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium">{wp.name}</span>
                    <span className="text-muted-foreground">Ofertă perso.</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto mb-4 border-t border-border pt-4">
                 <div className="flex justify-between items-center bg-secondary/50 p-3 rounded-xl border border-white/5 shadow-inner">
                   <span className="text-sm font-medium">Preț:</span>
                   <span className="font-display text-xl font-bold text-blue-400">La cerere</span>
                 </div>
              </div>
              <Button className="w-full py-6 font-bold text-base bg-blue-600 text-white hover:bg-blue-600/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-[1.02] cursor-pointer" onClick={() => scrollTo("order")}>
                Cere Ofertă
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
