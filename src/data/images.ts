export type SiteImageKey =
  | "draAnaJaleco"
  | "draAnaHeroJaleco"
  | "tratamentoHarmonizacao"
  | "tratamentoPreenchimento"
  | "tratamentoBioestimulador"
  | "tratamentoLaserCO2"
  | "tratamentoGerenciamentoPele"
  | "tratamentoCorporal";

export type SiteImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export const siteImages: Record<SiteImageKey, SiteImage> = {
  draAnaJaleco: {
    src: "/images/dra-ana-jaleco.jpeg",
    alt: "Dra. Ana Lopes usando jaleco profissional",
    fit: "contain",
  },
  draAnaHeroJaleco: {
    src: "/images/dra-ana-hero-cutout.png",
    alt: "Dra. Ana Lopes usando jaleco profissional",
    fit: "contain",
  },
  tratamentoHarmonizacao: {
    src: "/images/tratamento-harmonizacao-novo.png",
    alt: "Harmonizacao facial",
    fit: "cover",
  },
  tratamentoPreenchimento: {
    src: "/images/tratamento-preenchimento-novo.png",
    alt: "Preenchimento facial",
    fit: "cover",
  },
  tratamentoBioestimulador: {
    src: "/images/tratamento-bioestimuladores-novo.png",
    alt: "Bioestimuladores de colageno",
    fit: "cover",
  },
  tratamentoLaserCO2: {
    src: "/images/tratamento-laser-co2.png",
    alt: "Laser CO2",
    fit: "cover",
  },
  tratamentoGerenciamentoPele: {
    src: "/images/tratamento-gerenciamento-pele.png",
    alt: "Gerenciamento de Pele",
    fit: "cover",
  },
  tratamentoCorporal: {
    src: "/images/procedimentos-corporais.webp",
    alt: "Procedimentos corporais",
    fit: "cover",
  },
};
