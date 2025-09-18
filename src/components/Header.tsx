import tudoAzulLogo from "@/assets/images/tudo-azul-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/5519995349375?text=Olá! Gostaria de solicitar um orçamento para limpeza de piscina.", "_blank");
    };

    return (
        <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-card">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img src={tudoAzulLogo} alt="Tudo Azul" className="h-12 w-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("inicio")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Início
                        </button>
                        <button
                            onClick={() => scrollToSection("servicos")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Serviços
                        </button>
                        <button
                            onClick={() => scrollToSection("sobre")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Sobre Nós
                        </button>
                        <button
                            onClick={() => scrollToSection("contato")}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Contato
                        </button>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            onClick={openWhatsApp}
                            className="btn-cta px-6 py-2 rounded-full font-semibold"
                        >
                            Solicitar Orçamento
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-up">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection("inicio")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Início
                            </button>
                            <button
                                onClick={() => scrollToSection("servicos")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Serviços
                            </button>
                            <button
                                onClick={() => scrollToSection("sobre")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Sobre Nós
                            </button>
                            <button
                                onClick={() => scrollToSection("contato")}
                                className="text-left text-foreground hover:text-primary transition-colors"
                            >
                                Contato
                            </button>
                            <Button
                                onClick={openWhatsApp}
                                className="btn-cta mt-4 w-full"
                            >
                                Solicitar Orçamento
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;