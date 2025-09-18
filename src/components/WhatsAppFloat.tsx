import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
    const openWhatsApp = () => {
        window.open("https://wa.me/5519995349375?text=Olá! Gostaria de solicitar um orçamento para limpeza de piscina.", "_blank");
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <button
                onClick={openWhatsApp}
                className="whatsapp-float bg-green-500 hover:bg-green-600"
                aria-label="Solicitar orçamento via WhatsApp"
            >
                <MessageCircle size={28} />
            </button>

            {/* Pulse Ring Animation */}
            <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
                <div className="w-16 h-16 bg-green-500/30 rounded-full animate-pulse-ring"></div>
            </div>
        </>
    );
};

export default WhatsAppFloat;