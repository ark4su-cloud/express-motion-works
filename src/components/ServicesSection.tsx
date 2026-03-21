import { Film, Paintbrush, Globe } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Animații & Motion Design",
    description: "Custom animations, editare template-uri After Effects, promo-uri, explainer-e și multe altele.",
    active: true,
  },
  {
    icon: Paintbrush,
    title: "Creare Logo-uri",
    description: "Design de logo-uri profesionale cu vectorizare și transparență inclusă.",
    active: false,
  },
  {
    icon: Globe,
    title: "Creare Site-uri",
    description: "Website-uri moderne și responsive pentru business-ul tău.",
    active: false,
  },
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => service.active && scrollTo("pricing")}
              className={`group relative rounded-2xl p-8 transition-all duration-300 ${
                service.active
                  ? "bg-card shadow-lg hover:shadow-xl cursor-pointer border border-primary/20 hover:border-primary/40"
                  : "bg-card/60 border border-border opacity-75"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              {!service.active && (
                <span className="mt-4 inline-block text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  În curând
                </span>
              )}
              {service.active && (
                <span className="mt-4 inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Vezi prețuri →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
