import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zentry Automation</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Zentry Automation. Automação inteligente para negócios escaláveis.
          </p>
        </div>
      </div>
    </footer>
  );
};
