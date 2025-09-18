import poolHero1 from "@/assets/pool-hero-1.jpg";
import poolHero2 from "@/assets/pool-hero-2.jpg";
import poolHero3 from "@/assets/pool-hero-3.jpg";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Droplets, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: poolHero1,
            title: "Sua Piscina Sempre Cristalina",
            subtitle: "Profissionais especializados em limpeza e manutenção de piscinas em Rio Claro/SP"
        },
        {
            image: poolHero2,
            title: "Manutenção Profissional",
            subtitle: "Equipe qualificada com equipamentos modernos para o melhor resultado"
        },
        {
            image: poolHero3,
            title: "Confiança e Qualidade",
            subtitle: "Mais de 5 anos cuidando das piscinas da região com excelência"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/5519995349375?text=Olá! Gostaria de solicitar um orçamento para limpeza de piscina.", "_blank");
    };

    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Carousel */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/60" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 hover:bg-background/40 rounded-full transition-all duration-300 text-white hover:scale-110 z-10"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 hover:bg-background/40 rounded-full transition-all duration-300 text-white hover:scale-110 z-10"
            >
                <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto animate-fade-up">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                        {slides[currentSlide].subtitle}
                    </p>

                    {/* Trust Points */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Droplets className="text-secondary" size={20} />
                            <span className="text-sm font-medium">Limpeza Profunda</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Shield className="text-secondary" size={20} />
                            <span className="text-sm font-medium">100% Confiável</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Clock className="text-secondary" size={20} />
                            <span className="text-sm font-medium">Pontualidade</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={openWhatsApp}
                            size="lg"
                            className="btn-cta px-8 py-4 text-lg font-semibold rounded-full"
                        >
                            Solicitar Orçamento Grátis
                        </Button>
                        <Button
                            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                            size="lg"
                            variant="outline"
                            className="px-8 py-4 text-lg font-semibold rounded-full border-white text-white hover:bg-white hover:text-primary"
                        >
                            Conhecer Serviços
                        </Button>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-secondary scale-125"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;