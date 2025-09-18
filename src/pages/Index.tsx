import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroCarousel />
                <ServicesSection />
                <AboutSection />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default Index;