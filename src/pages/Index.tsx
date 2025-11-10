import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Floating Brand Guide button */}
      <Link to="/brand-guide">
        <Button 
          className="fixed bottom-8 right-8 gap-2 shadow-elevated z-50"
          size="lg"
        >
          <FileText className="w-4 h-4" />
          Ver Brand Guide
        </Button>
      </Link>

      <Hero />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
