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
    description: "Design de logo-uri profesionale cu vectorizare și transparență inclusă.",
    active: true,
    type: "logos",
  },
  {
    icon: Globe,
    title: "Creare Site-uri",
    description: "Website-uri moderne și responsive pentru business-ul tău.",
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
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleService = (type: string) => {
    if (type === "animations") {
      scrollTo("pricing");
      return;
    }
    setExpandedService(expandedService === type ? null : type);
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title}>
              <div
                onClick={() => toggleService(service.type)}
                className="group relative rounded-2xl p-8 transition-all duration-300 bg-card shadow-lg hover:shadow-xl cursor-pointer border border-primary/20 hover:border-primary/40"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {service.type === "animations" ? "Vezi prețuri →" : "Vezi detalii"}
                  </span>
                  {service.type !== "animations" && (
                    <ChevronDown className={`h-4 w-4 text-primary transition-transform ${expandedService === service.type ? "rotate-180" : ""}`} />
                  )}
                </div>
              </div>

              {/* Logo pricing panel */}
              {service.type === "logos" && expandedService === "logos" && (
                <div className="mt-4 rounded-2xl p-6 bg-card border-2 border-primary/30 shadow-xl animate-in slide-in-from-top-2">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-display font-bold text-gradient">€{logoPricing.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">/proiect</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {logoPricing.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" className="w-full py-5" onClick={() => scrollTo("order")}>
                    Comandă Logo
                  </Button>
                </div>
              )}

              {/* Website pricing panel */}
              {service.type === "websites" && expandedService === "websites" && (
                <div className="mt-4 rounded-2xl p-6 bg-card border border-border shadow-xl animate-in slide-in-from-top-2">
                  <div className="space-y-3">
                    {websitePlans.map((wp) => (
                      <div key={wp.name} className="p-4 rounded-xl bg-secondary/50 border border-border">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-display font-semibold">{wp.name}</span>
                          <span className="text-muted-foreground text-sm">Preț: {wp.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{wp.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Prețurile vor fi actualizate în curând. Contactează-ne pentru o ofertă personalizată.
                  </p>
                  <Button variant="heroOutline" className="w-full mt-4 py-5" onClick={() => scrollTo("order")}>
                    Cere Ofertă
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
