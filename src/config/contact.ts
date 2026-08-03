// SUBSTITUIR PELOS DADOS REAIS
export const contactConfig = {
  phone: "+55 (11) 99999-9999",
  whatsappNumber: "",
  whatsappUrl: "https://wa.me/qr/NQ5RSVECIWVLL1",
  instagram: "https://www.instagram.com/dra_analopess/",
  instagramHandle: "@dra_analopess",
  email: "contato@draanalopes.com.br",
  address: "Rua das Flores, 123 - Jardim Paulista, São Paulo - SP",
  hours: "Segunda a sexta, das 9h às 19h",
  mapUrl: "https://maps.google.com/?q=Rua%20das%20Flores%20123%20Sao%20Paulo",
  defaultMessage: "Olá, Dra. Ana! Gostaria de agendar uma avaliação.",
};

export function createWhatsAppUrl(message = contactConfig.defaultMessage) {
  if (!contactConfig.whatsappNumber) {
    return contactConfig.whatsappUrl;
  }

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}
