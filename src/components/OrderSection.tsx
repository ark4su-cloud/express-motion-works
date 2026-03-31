import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ContactDialog } from "./ContactDialog";

const OrderSection = () => {
  return (
    <section id="order" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Începe <span className="text-gradient">Proiectul</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Contactează-mă pe platforma dedicată pentru a discuta detaliile proiectului tău.
          </p>
        </div>

        <div className="max-w-xl mx-auto flex justify-center mt-8">
          <ContactDialog>
            <Button size="lg" className="w-auto sm:min-w-[300px] py-8 text-xl liquid-gradient-btn text-white rounded-xl shadow-xl shadow-primary/20 transition-transform hover:scale-105">
              Contactează-mă 
              <Send className="ml-3 h-6 w-6" />
            </Button>
          </ContactDialog>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
