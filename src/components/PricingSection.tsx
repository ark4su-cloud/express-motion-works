import { Button } from "@/components/ui/button";
import { Check, Clock, RotateCcw, Star, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useState, useRef } from "react";
import { ContactDialog } from "./ContactDialog";

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

const PricingCard = ({ plan }: { plan: typeof plans[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation limits (max 2 degrees for ultra subtle effect)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const orderClass = plan.name === "Basic" ? "order-1 md:order-1" :
    plan.name === "Standard" ? "order-2 md:order-3" :
      "order-3 md:order-2";

  return (
    <div className={`h-full flex flex-col ${orderClass} ${plan.highlighted ? "md:-translate-y-4 z-10 relative" : "z-0 relative"}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: isHovered ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className={`relative rounded-3xl p-8 flex flex-col h-full ${plan.highlighted
          ? "animate-gradient-shift-bg text-primary-foreground shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-0"
          : plan.name === "Basic"
            ? "bg-card border-2 border-primary/20 shadow-2xl"
            : "bg-card border border-border shadow-2xl hover:border-white/10"
          }`}
      >
        {/* Inner content */}
        <div className="flex flex-col h-full pointer-events-auto mt-2">
          {plan.popular && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-card text-primary text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg border border-primary/20 whitespace-nowrap">
              <Star className="h-4 w-4 fill-primary flex-shrink-0" />
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

          <div className="space-y-3 mb-8 flex-grow">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className={`flex items-center gap-4 text-sm mb-6 pt-6 border-t mt-auto ${plan.highlighted ? "border-primary-foreground/20" : "border-border"}`}>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{plan.delivery}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="h-4 w-4" />
              <span>{plan.revisions} revizii</span>
            </div>
          </div>

          {/* New Contact Dialog Wrapper */}
          <ContactDialog>
            <Button
              className={`w-full py-6 text-base shadow-lg transition-transform hover:scale-105 ${plan.highlighted
                ? "bg-white text-primary hover:bg-white/90"
                : ""
                }`}
              variant={plan.highlighted ? "secondary" : "hero"}
            >
              Comandă Acum
            </Button>
          </ContactDialog>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
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

        <div className="flex flex-col md:grid md:grid-cols-3 gap-y-12 md:gap-6 max-w-6xl mx-auto items-stretch pt-4 md:pt-0">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto px-4">
          <p className="text-muted-foreground text-sm leading-relaxed backdrop-blur-md bg-secondary/20 border border-white/5 rounded-2xl p-4 shadow-lg border-t-white/10">
            <span className="text-primary font-semibold">* Notă:</span> Acestea sunt prețuri estimative. Costul final poate varia în funcție de complexitatea, durata și cerințele specifice ale fiecărui proiect. <ContactDialog><span className="text-foreground font-medium underline decoration-primary underline-offset-4 hover:text-primary transition-colors cursor-pointer">Contactează-mă</span></ContactDialog> pentru o ofertă!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
