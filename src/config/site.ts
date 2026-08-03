import { contactConfig } from "./contact";

export const siteConfig = {
  name: "Dra. Ana Lopes",
  fullName: "Dra. Ana Lopes - Biomédica Esteta",
  title: "Biomédica Esteta",
  crbm: "CRBM 24169",
  url: "https://dra-ana-lopes.example.com",
  contact: contactConfig,
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Resultados", href: "#resultados" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
  seo: {
    title: "Dra. Ana Lopes | Biomédica Esteta",
    description:
      "Harmonização facial, estética avançada e cuidados personalizados para realçar sua beleza com naturalidade e segurança.",
  },
};
