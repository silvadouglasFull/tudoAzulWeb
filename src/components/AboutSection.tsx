import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, MapPin, Shield, Star, Users } from "lucide-react";

const AboutSection = () => {
    const stats = [
        { number: "5+", label: "Anos de Experiência", icon: Clock },
        { number: "500+", label: "Piscinas Atendidas", icon: Award },
        { number: "100%", label: "Clientes Satisfeitos", icon: Star },
        { number: "24h", label: "Resposta WhatsApp", icon: Shield }
    ];

    const trustBadges = [
        "Profissionais Certificados",
        "Equipamentos Modernos",
        "Produtos de Qualidade",
        "Atendimento Personalizado",
        "Pontualidade Garantida",
        "Preços Justos"
    ];

    const openWhatsApp = () => {
        window.open("https://wa.me/5519995349375?text=Olá! Gostaria de conhecer mais sobre a Tudo Azul.", "_blank");
    };

    return (
        <section id="sobre" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Sobre a Tudo Azul
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Somos especialistas em limpeza e manutenção de piscinas em Rio Claro/SP,
                        comprometidos em oferecer serviços de excelência com profissionais qualificados.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-6">
                                Sua Piscina em Mãos Confiáveis
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6">
                                Na Tudo Azul, entendemos que sua piscina é um investimento importante e um local
                                de lazer para toda a família. Por isso, oferecemos serviços especializados com
                                profissionais treinados e equipamentos de última geração.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                Nossa equipe possui vasta experiência no mercado de manutenção de piscinas,
                                garantindo que sua piscina esteja sempre cristalina, segura e pronta para uso.
                            </p>
                        </div>

                        {/* Company Values */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-foreground mb-4">
                                Nossos Valores:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Shield, text: "Confiança e Segurança" },
                                    { icon: Award, text: "Qualidade Garantida" },
                                    { icon: Users, text: "Atendimento Humanizado" },
                                    { icon: MapPin, text: "Presença Local" }
                                ].map((value, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <value.icon className="text-primary" size={20} />
                                        <span className="text-foreground font-medium">{value.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button
                            onClick={openWhatsApp}
                            size="lg"
                            className="btn-primary px-8 py-4 text-lg font-semibold rounded-full"
                        >
                            Falar com Nossa Equipe
                        </Button>
                    </div>

                    {/* Right Content - Stats */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <Card
                                    key={index}
                                    className="text-center p-6 border-0 shadow-card hover:shadow-primary transition-all duration-300"
                                >
                                    <CardContent className="p-0">
                                        <stat.icon className="text-primary mx-auto mb-4" size={32} />
                                        <div className="text-3xl font-bold text-foreground mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-muted-foreground font-medium">
                                            {stat.label}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Location Info */}
                        <Card className="p-6 bg-gradient-primary text-primary-foreground border-0 shadow-primary">
                            <CardContent className="p-0">
                                <div className="flex items-center space-x-3 mb-4">
                                    <MapPin size={24} />
                                    <h4 className="text-xl font-semibold">Nossa Região</h4>
                                </div>
                                <p className="mb-4">
                                    Atendemos Rio Claro e região com equipe local,
                                    garantindo rapidez no atendimento e conhecimento das necessidades locais.
                                </p>
                                <p className="text-sm opacity-90">
                                    Rio Claro • Limeira • Araras • Piracicaba • Santa Gertrudes
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                            Por que confiar na Tudo Azul?
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Garantias que fazem a diferença na escolha do seu parceiro
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {trustBadges.map((badge, index) => (
                            <div
                                key={index}
                                className="trust-badge text-center px-3 py-2 text-sm font-medium"
                            >
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;