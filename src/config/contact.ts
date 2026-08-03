// SUBSTITUIR PELOS DADOS REAIS
export const contactConfig = {
  phone: "+55 (71) 98122-4674",
  whatsappNumber: "+55 (71) 98122-4674",
  whatsappUrl: "https://wa.me/qr/NQ5RSVECIWVLL1",
  instagram: "https://www.instagram.com/dra_analopess/",
  instagramHandle: "@dra_analopess",
  email: "draanalopes.15@gmail.com",
  address: "Av. Tancredo Neves, 1632. Ed. Salvador Trade Center, torre Norte, sala 1905/1904. Caminho das Árvores. Salvador - BA, 41820-000",
  hours: "Segunda a sexta, das 9h às 19h",
  mapUrl: "https://maps.app.goo.gl/NdQCabU8ZPeQio9W7",
  defaultMessage: "Olá, Dra. Ana! Vim pelo site e gostaria de saber mais sobre os procedimentos e realizar um agendamento.",
};

export function createWhatsAppUrl(message = contactConfig.defaultMessage) {
  if (!contactConfig.whatsappNumber) {
    return contactConfig.whatsappUrl;
  }

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}
