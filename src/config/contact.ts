export const contactConfig = {
  phone: "+55 (71) 98122-4674",
  whatsappNumber: "5571981224674",
  whatsappUrl: "https://wa.me/5571981224674?text=Ol%C3%A1%2C%20Dra.%20Ana!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos%20e%20realizar%20um%20agendamento.",
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
