import { Bot, GitBranch, Workflow, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Conectamos seus sistemas e criamos fluxos que funcionam sozinhos. Do simples ao complexo, com n8n."
  },
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description: "Incorporamos IA nos seus processos para análise, decisões e respostas automáticas inteligentes."
  },
  {
    icon: GitBranch,
    title: "Integrações",
    description: "Conectamos suas ferramentas existentes sem código. APIs, planilhas, CRMs, ERPs e muito mais."
  },
  {
    icon: Gauge,
    title: "Otimização Contínua",
    description: "Monitoramos e ajustamos seus fluxos para garantir performance máxima e escalabilidade."
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que fazemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de automação para empresas de qualquer tamanho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
