import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "Premium",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // For now just simulate — Telegram integration will be added later
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="order" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">Mulțumesc!</h2>
            <p className="text-muted-foreground text-lg">
              Am primit detaliile tale. Te voi contacta în cel mai scurt timp posibil.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Plasează <span className="text-gradient">Comanda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Spune-mi despre proiectul tău și te voi contacta rapid
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Numele tău</label>
              <Input
                required
                placeholder="Ion Popescu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email / Telegram</label>
              <Input
                required
                placeholder="email@exemplu.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Pachetul dorit</label>
            <div className="grid grid-cols-3 gap-3">
              {["Basic", "Standard", "Premium"].map((plan) => (
                <button
                  type="button"
                  key={plan}
                  onClick={() => setFormData({ ...formData, plan })}
                  className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    formData.plan === plan
                      ? "bg-hero-gradient text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Detalii proiect</label>
            <Textarea
              required
              placeholder="Descrie proiectul tău: ce tip de animație ai nevoie, pentru ce platformă, dacă ai materiale (logo, text, imagini)..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="min-h-[140px] resize-none"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full py-6 text-base" disabled={loading}>
            {loading ? (
              "Se trimite..."
            ) : (
              <>
                Trimite Comanda
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
