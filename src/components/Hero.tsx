import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Automação Inteligente</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Automatize processos.
          <br />
          <span className="gradient-text">Escale seu negócio.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Transforme tarefas manuais em fluxos automatizados com n8n e IA. 
          Mais velocidade, menos erros, resultados escaláveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="hero" className="gap-2 group" asChild>
            <a href="https://wa.me/5512997614335" target="_blank" rel="noopener noreferrer">
              Começar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline">
            Conhecer soluções
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Redução de tempo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Processos ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Precisão</div>
          </div>
        </div>
      </div>
    </section>
  );
};
