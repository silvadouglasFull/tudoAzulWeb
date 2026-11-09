import { instagram, Whatsapp } from "@/constants/socialMidiaContact";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formata um número de telefone no padrão brasileiro.
 * Aceita números com ou sem +55, e com ou sem DDD.
 * 
 * @param phone String contendo o número de telefone (com ou sem formatação)
 * @returns O número formatado ou a string original limpa se não corresponder aos padrões básicos
 */
export function formatBrazilianPhone(phone: string): string {
    // Remove todos os caracteres não numéricos
    const cleaned = phone.replace(/\D/g, '');

    // Caso 1: Com DDI (55) + DDD (2 dígitos) + Celular (9 dígitos) = 13 dígitos
    // Exemplo: 5511999999999 -> +55 (11) 99999-9999
    if (cleaned.length === 13 && cleaned.startsWith('55')) {
        return `+55 (${cleaned.substring(2, 4)}) ${cleaned.substring(4, 9)}-${cleaned.substring(9)}`;
    }

    // Caso 2: Sem DDI, apenas DDD (2 dígitos) + Celular (9 dígitos) = 11 dígitos
    // Exemplo: 11999999999 -> (11) 99999-9999
    if (cleaned.length === 11) {
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`;
    }

    // Caso 3: Apenas o número do celular (9 dígitos), sem DDD e sem DDI
    // Exemplo: 999999999 -> 99999-9999
    if (cleaned.length === 9) {
        return `${cleaned.substring(0, 5)}-${cleaned.substring(5)}`;
    }

    // BÔNUS - Telefones fixos:
    // Com DDI (55) + DDD (2) + Fixo (8) = 12 dígitos
    if (cleaned.length === 12 && cleaned.startsWith('55')) {
        return `+55 (${cleaned.substring(2, 4)}) ${cleaned.substring(4, 8)}-${cleaned.substring(8)}`;
    }
    // Apenas DDD (2) + Fixo (8) = 10 dígitos
    if (cleaned.length === 10) {
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
    }
    // Apenas Fixo (8 dígitos)
    if (cleaned.length === 8) {
        return `${cleaned.substring(0, 4)}-${cleaned.substring(4)}`;
    }

    // Retorna o texto limpo caso não se encaixe em nenhum padrão conhecido
    return cleaned;
}

export const openWhatsApp = () => {
    window.open(`https://wa.me/55${Whatsapp}?text=Olá! Gostaria de solicitar um orçamento para limpeza de piscina.`, "_blank");
};

export const openInstagram = () => {
    window.open(`https://www.instagram.com/${instagram}`, "_blank");
};
