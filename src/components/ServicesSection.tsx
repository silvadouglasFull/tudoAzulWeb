import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Filter, Sparkles, TestTube, Timer, Wrench } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: Droplets,
            title: "Limpeza Completa",
            description: "Aspiração do fundo, escovação das paredes e linha d'água, remoção de folhas e detritos.",
            features: ["Aspiração profunda", "Escovação completa", "Limpeza de bordas"]
        },
        {
            icon: Filter,
            title: "Limpeza de Filtros",
            description: "Manutenção e limpeza de todos os tipos de filtros para máxima eficiência.",
            features: ["Filtros de areia", "Filtros de cartucho", "Sistemas de filtragem"]
        },
        {
            icon: TestTube,
            title: "Tratamento Químico",
            description: "Análise e correção do pH, aplicação de cloro e outros produtos químicos necessários.",
            features: ["Análise de pH", "Dosagem de cloro", "Produtos de qualidade"]
        },
        {
            icon: Wrench,
            title: "Manutenção Preventiva",
            description: "Verificação de equipamentos, bombas, aquecedores e sistemas de automação.",
            features: ["Check-up equipamentos", "Manutenção bombas", "Sistema automação"]
        },
        {
            icon: Sparkles,
            title: "Limpeza Pesada",
            description: "Recuperação de piscinas abandonadas ou com problemas severos de limpeza.",
            features: ["Recuperação total", "Tratamento choque", "Renovação completa"]
        },
        {
            icon: Timer,
            title: "Manutenção Regular",
            description: "Planos semanais, quinzenais ou mensais para manter sua piscina sempre perfeita.",
            features: ["Visitas regulares", "Planos flexíveis", "Acompanhamento contínuo"]
        }
    ];

    const openWhatsApp = () => {
        window.open("https://wa.me/5519995349375?text=Olá! Gostaria de conhecer os serviços de manutenção de piscina.", "_blank");
    };

    return (
        <section id="servicos" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Nossos Serviços
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Oferecemos soluções completas para manter sua piscina sempre cristalina e pronta para uso.
                        Profissionais qualificados e equipamentos modernos garantem o melhor resultado.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="service-card border-0 shadow-card bg-card hover:shadow-primary p-6"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-0">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                                        <service.icon className="text-primary-foreground" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center justify-center text-sm text-foreground">
                                                <Sparkles className="text-secondary mr-2" size={16} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                            Por que escolher a Tudo Azul?
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Benefícios que fazem a diferença na manutenção da sua piscina
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Economia de Tempo",
                                description: "Você relaxa enquanto cuidamos de tudo",
                                icon: "⏰"
                            },
                            {
                                title: "Água Sempre Limpa",
                                description: "Piscina pronta para uso a qualquer momento",
                                icon: "💧"
                            },
                            {
                                title: "Saúde da Família",
                                description: "Água tratada e livre de bactérias",
                                icon: "🛡️"
                            },
                            {
                                title: "Valorização do Imóvel",
                                description: "Piscina bem cuidada valoriza sua propriedade",
                                icon: "🏠"
                            }
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="text-center animate-slide-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        Pronto para ter uma piscina sempre limpa?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Solicite seu orçamento gratuito pelo WhatsApp e descubra como podemos
                        cuidar da sua piscina com profissionalismo e qualidade.
                    </p>
                    <Button
                        onClick={openWhatsApp}
                        size="lg"
                        className="btn-cta px-8 py-4 text-lg font-semibold rounded-full"
                    >
                        Solicitar Orçamento Grátis
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;