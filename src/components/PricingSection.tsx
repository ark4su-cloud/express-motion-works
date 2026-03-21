import { Button } from "@/components/ui/button";
import { Check, Clock, RotateCcw, Star, ExternalLink } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "25",
    description: "Editare orice template After Effects",
    features: [
      "Editare template AE",
      "Render HD 1080p",
      "Fișiere sursă incluse",
    ],
    revisions: 2,
    delivery: "2 zile",
    highlighted: false,
    popular: false,
  },
  {
    name: "Premium",
    price: "120",
    description: "Custom Animation — proiect unic de la zero",
    features: [
      "Animație custom completă",
      "Sound Design inclus",
      "Logo Transparency",
      "Vectorizare logo",
      "Render 4K",
      "Fișiere sursă incluse",
    ],
    revisions: 4,
    delivery: "4 zile",
    highlighted: true,
    popular: true,
  },
  {
    name: "Standard",
    price: "70",
    description: "Customizare template-uri avansate + animații simple",
    features: [
      "Customizare template avansat",
      "Animații mai puțin complicate",
      "Render HD 1080p",
      "Fișiere sursă incluse",
    ],
    revisions: 2,
    delivery: "2 zile",
    highlighted: false,
    popular: false,
  },
];

const PricingSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Alege <span className="text-gradient">Planul</span> Tău
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Prețuri transparente pentru servicii de motion design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "animate-gradient-shift-bg text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.02] md:scale-105 border-0"
                  : plan.name === "Basic"
                  ? "bg-card border-2 border-primary/20 shadow-md"
                  : "bg-card border border-border shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-card text-primary text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  <Star className="h-4 w-4 fill-primary" />
                  Cel mai popular
                </div>
              )}

              <h3 className="font-display text-2xl font-bold mb-2">
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-display font-bold">€{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/proiect</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className={`flex items-center gap-4 text-sm mb-6 pt-6 border-t ${plan.highlighted ? "border-primary-foreground/20" : "border-border"}`}>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{plan.delivery}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="h-4 w-4" />
                  <span>{plan.revisions} revizii</span>
                </div>
              </div>

              {/* Vezi Exemple button */}
              <Button
                variant="ghost"
                size="sm"
                className={`w-full mb-3 ${plan.highlighted ? "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10" : "text-primary hover:bg-primary/5"}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Vezi Exemple
              </Button>

              <Button
                onClick={() => scrollTo("order")}
                className={`w-full py-6 text-base ${
                  plan.highlighted
                    ? "bg-card text-primary hover:bg-card/90 shadow-lg"
                    : ""
                }`}
                variant={plan.highlighted ? "secondary" : "hero"}
              >
                Comandă Acum
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
