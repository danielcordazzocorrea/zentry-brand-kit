import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Palette, Type, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function BrandGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-6 px-4">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4">Brand Guide</h1>
            <p className="text-xl text-muted-foreground">
              Guia visual da identidade Zentry Automation
            </p>
          </div>

          {/* Slogan */}
          <Card className="mb-12 border-border/50 bg-gradient-hero">
            <CardContent className="p-12 text-center">
              <div className="text-sm uppercase tracking-wider text-white/70 mb-4">Slogan</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Automatize processos. Escale resultados.
              </h2>
              <p className="text-white/80 mt-4">
                Mensagem alternativa: "Menos manual. Mais estratégia."
              </p>
            </CardContent>
          </Card>

          {/* Logo concept */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-accent" />
              Conceito do Logo
            </h2>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6 p-8 bg-muted/50 rounded-lg">
                  <div className="w-20 h-20 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Símbolo:</strong> Raio estilizado (Zap) representando velocidade, energia e automação instantânea</p>
                  <p><strong className="text-foreground">Formato:</strong> Ícone dentro de forma geométrica arredondada (moderno e acessível)</p>
                  <p><strong className="text-foreground">Aplicação:</strong> Gradiente ciano-azul para versões coloridas, monocromático para aplicações simples</p>
                  <p><strong className="text-foreground">Variações:</strong> Logo completo com nome, logo símbolo isolado, versão horizontal</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colors */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Palette className="w-8 h-8 text-accent" />
              Paleta de Cores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Cores Primárias</div>
                  <div className="space-y-4">
                    <div>
                      <div className="h-20 rounded-lg bg-primary mb-2 border border-border/50" />
                      <div className="text-sm font-mono">Deep Blue</div>
                      <div className="text-xs text-muted-foreground">HSL: 217 91% 20%</div>
                      <div className="text-xs text-muted-foreground mt-1">Uso: Logo, títulos, elementos principais</div>
                    </div>
                    <div>
                      <div className="h-20 rounded-lg bg-accent mb-2 border border-border/50" />
                      <div className="text-sm font-mono">Electric Cyan</div>
                      <div className="text-xs text-muted-foreground">HSL: 189 94% 43%</div>
                      <div className="text-xs text-muted-foreground mt-1">Uso: Destaques, CTAs, ícones, gradientes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Cores Secundárias</div>
                  <div className="space-y-4">
                    <div>
                      <div className="h-20 rounded-lg bg-muted mb-2 border border-border/50" />
                      <div className="text-sm font-mono">Light Gray</div>
                      <div className="text-xs text-muted-foreground">HSL: 210 40% 96%</div>
                      <div className="text-xs text-muted-foreground mt-1">Uso: Fundos, cards, áreas secundárias</div>
                    </div>
                    <div>
                      <div className="h-20 rounded-lg bg-foreground mb-2 border border-border/50" />
                      <div className="text-sm font-mono">Dark Text</div>
                      <div className="text-xs text-muted-foreground">HSL: 220 15% 10%</div>
                      <div className="text-xs text-muted-foreground mt-1">Uso: Textos principais, elementos escuros</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-border/50">
              <CardContent className="p-8">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Gradientes</div>
                <div className="space-y-4">
                  <div>
                    <div className="h-20 rounded-lg bg-gradient-primary mb-2" />
                    <div className="text-sm font-mono">Primary Gradient</div>
                    <div className="text-xs text-muted-foreground">Deep Blue → Medium Blue (135deg)</div>
                  </div>
                  <div>
                    <div className="h-20 rounded-lg bg-gradient-accent mb-2" />
                    <div className="text-sm font-mono">Accent Gradient</div>
                    <div className="text-xs text-muted-foreground">Cyan → Light Cyan (135deg)</div>
                  </div>
                  <div>
                    <div className="h-20 rounded-lg bg-gradient-hero mb-2" />
                    <div className="text-sm font-mono">Hero Gradient</div>
                    <div className="text-xs text-muted-foreground">Deep Blue → Medium Blue → Cyan (135deg)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Type className="w-8 h-8 text-accent" />
              Tipografia
            </h2>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Fonte Principal</div>
                    <div className="text-5xl font-bold mb-2">Inter</div>
                    <p className="text-muted-foreground">
                      Fonte sans-serif moderna, limpa e altamente legível. Usada em todo o branding.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Títulos</div>
                      <h1 className="text-4xl font-bold mb-1">Heading 1</h1>
                      <div className="text-xs text-muted-foreground mb-3">Bold, 2.5-4rem</div>
                      
                      <h2 className="text-3xl font-bold mb-1">Heading 2</h2>
                      <div className="text-xs text-muted-foreground mb-3">Bold, 1.875-3rem</div>
                      
                      <h3 className="text-2xl font-bold mb-1">Heading 3</h3>
                      <div className="text-xs text-muted-foreground">Bold, 1.5-2rem</div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Corpo de Texto</div>
                      <p className="text-lg mb-2">Parágrafo Grande (18-20px)</p>
                      <p className="mb-2">Parágrafo Normal (16px)</p>
                      <p className="text-sm mb-2">Parágrafo Pequeno (14px)</p>
                      <p className="text-xs text-muted-foreground">Legendas e labels (12px)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Textos */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Textos de Marca</h2>
            
            <Card className="mb-6 border-border/50">
              <CardContent className="p-8">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Apresentação Curta</div>
                <p className="text-lg leading-relaxed">
                  A <strong>Zentry Automation</strong> transforma processos manuais em fluxos automatizados 
                  inteligentes. Com n8n e IA, integramos seus sistemas, eliminamos tarefas repetitivas e 
                  escalamos operações — para empresas de qualquer tamanho.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6 border-border/50">
              <CardContent className="p-8">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Descrição do Serviço</div>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    <strong>O que fazemos:</strong> Criamos automações sob medida usando n8n e Inteligência Artificial 
                    para conectar suas ferramentas, automatizar tarefas e otimizar processos.
                  </p>
                  <p>
                    <strong>Como funciona:</strong> Analisamos seus fluxos atuais, identificamos gargalos e criamos 
                    automações que funcionam 24/7. Sem necessidade de equipe técnica interna.
                  </p>
                  <p>
                    <strong>Benefícios:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Redução drástica de tempo em tarefas manuais</li>
                    <li>Eliminação de erros humanos</li>
                    <li>Integração total entre sistemas</li>
                    <li>Escalabilidade sem aumentar custos</li>
                    <li>Dados processados e insights automáticos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Tom de Voz</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="font-bold text-foreground mb-2">✓ Somos</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Profissionais e confiáveis</li>
                      <li>• Claros e objetivos</li>
                      <li>• Focados em resultados</li>
                      <li>• Acessíveis e diretos</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-2">✗ Não somos</div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Técnicos demais</li>
                      <li>• Informais ou descontraídos</li>
                      <li>• Vagos ou genéricos</li>
                      <li>• Cheios de jargões</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
