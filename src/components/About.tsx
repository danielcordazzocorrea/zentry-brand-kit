import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reduza até 80% do tempo gasto em tarefas manuais",
  "Elimine erros humanos com processos automatizados",
  "Integre todas as suas ferramentas em um único fluxo",
  "Escale operações sem aumentar custos proporcionalmente",
  "Ganhe insights com dados processados automaticamente",
  "Libere sua equipe para focar no estratégico"
];

export const About = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Processos mais rápidos.
              <br />
              <span className="gradient-text">Negócios mais inteligentes.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Na <strong>Zentry Automation</strong>, acreditamos que automação não é luxo — 
              é essencial. Usamos n8n e IA para criar soluções sob medida que transformam 
              como sua empresa opera.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não importa o tamanho do seu negócio. Se você tem processos repetitivos, 
              nós temos a solução.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
