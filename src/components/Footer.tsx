import tudoAzulLogo from "@/assets/images/tudo-azul-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const openWhatsApp = () => {
        window.open("https://wa.me/5519999999999?text=Olá! Gostaria de solicitar um orçamento para limpeza de piscina.", "_blank");
    };

    const openInstagram = () => {
        window.open("https://instagram.com/tudoazul_piscinas", "_blank");
    };

    return (
        <footer id="contato" className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <img src={tudoAzulLogo} alt="Tudo Azul" className="h-16 w-auto brightness-0 invert" />
                        <p className="text-primary-foreground/80">
                            Especialistas em limpeza e manutenção de piscinas em Rio Claro/SP.
                            Profissionais qualificados para manter sua piscina sempre perfeita.
                        </p>
                        <div className="flex space-x-4">
                            <Button
                                onClick={openWhatsApp}
                                variant="outline"
                                size="sm"
                                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                                <Phone size={16} className="mr-2" />
                                WhatsApp
                            </Button>
                            <Button
                                onClick={openInstagram}
                                variant="outline"
                                size="sm"
                                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                                <Instagram size={16} className="mr-2" />
                                Instagram
                            </Button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Nossos Serviços</h3>
                        <ul className="space-y-3 text-primary-foreground/80">
                            <li>Limpeza Completa</li>
                            <li>Tratamento Químico</li>
                            <li>Limpeza de Filtros</li>
                            <li>Manutenção Preventiva</li>
                            <li>Limpeza Pesada</li>
                            <li>Manutenção Regular</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="text-secondary mt-1" size={18} />
                                <div>
                                    <p className="font-medium">WhatsApp</p>
                                    <p className="text-primary-foreground/80">(19) 98216-3039</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Instagram className="text-secondary mt-1" size={18} />
                                <div>
                                    <p className="font-medium">Instagram</p>
                                    <p className="text-primary-foreground/80">@tudoazulpiscinas3</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="text-secondary mt-1" size={18} />
                                <div>
                                    <p className="font-medium">Região de Atendimento</p>
                                    <p className="text-primary-foreground/80">Rio Claro/SP e região</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Horário de Atendimento</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Clock className="text-secondary mt-1" size={18} />
                                <div>
                                    <p className="font-medium">Segunda a Sexta</p>
                                    <p className="text-primary-foreground/80">8:00 - 18:00</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Clock className="text-secondary mt-1" size={18} />
                                <div>
                                    <p className="font-medium">Sábado</p>
                                    <p className="text-primary-foreground/80">8:00 - 12:00</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="text-secondary mt-1" size={18} />
                                <div>
                                    <p className="font-medium">WhatsApp 24h</p>
                                    <p className="text-primary-foreground/80">Resposta garantida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary-light/20 rounded-2xl p-8 mb-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Pronto para ter uma piscina perfeita?
                    </h3>
                    <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                        Solicite seu orçamento gratuito agora pelo WhatsApp. Nossa equipe está pronta
                        para cuidar da sua piscina com todo profissionalismo e qualidade.
                    </p>
                    <Button
                        onClick={openWhatsApp}
                        size="lg"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary-light px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                        Solicitar Orçamento Grátis
                    </Button>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <a href="https://www.instagram.com/dswebdev/" className="text-primary-foreground/60 text-sm">
                            © {new Date().getFullYear()} Ds Web | Powerfull Programming. Todos os direitos reservados.
                        </a>
                        <div className="flex space-x-6 text-sm text-primary-foreground/60">
                            <span>Rio Claro/SP</span>
                            <span>•</span>
                            <span>Profissionais Especializados</span>
                            <span>•</span>
                            <span>Confiança e Qualidade</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;