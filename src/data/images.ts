export type SiteImageKey =
  | "logo"
  | "draAnaJaleco"
  | "draAnaCasual"
  | "draAnaSentada"
  | "tratamentoHarmonizacao"
  | "tratamentoPreenchimento"
  | "tratamentoBioestimulador"
  | "tratamentoPeeling"
  | "tratamentoBotox"
  | "resultadoBotoxComparativo"
  | "antes"
  | "depois"
  | "clinica";

export type SiteImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export const siteImages: Record<SiteImageKey, SiteImage> = {
  logo: {
    src: "/images/logo.png",
    alt: "Logo Dra. Ana Lopes",
    fit: "contain",
  },
  draAnaJaleco: {
    src: "/images/dra-ana-jaleco.jpeg",
    alt: "Dra. Ana Lopes usando jaleco profissional",
    fit: "contain",
  },
  draAnaCasual: {
    src: "/images/dra-ana-casual.png",
    alt: "Dra. Ana Lopes em roupa casual",
    fit: "contain",
  },
  draAnaSentada: {
    src: "/images/dra-ana-sentada.jpeg",
    alt: "Dra. Ana Lopes sentada em ambiente clínico elegante",
    fit: "cover",
  },
  tratamentoHarmonizacao: {
    src: "/images/tratamento-harmonizacao.jpg",
    alt: "Harmonização facial com resultado natural",
    fit: "cover",
  },
  tratamentoPreenchimento: {
    src: "/images/tratamento-preenchimento.jpg",
    alt: "Preenchimento facial personalizado",
    fit: "cover",
  },
  tratamentoBioestimulador: {
    src: "/images/tratamento-bioestimulador.jpg",
    alt: "Bioestimulador de colágeno",
    fit: "cover",
  },
  tratamentoPeeling: {
    src: "/images/tratamento-peeling.jpg",
    alt: "Peeling químico para renovação da pele",
    fit: "cover",
  },
  tratamentoBotox: {
    src: "/images/tratamento-botox.png",
    alt: "Resultado de toxina botulinica na regiao dos olhos",
    fit: "cover",
  },
  resultadoBotoxComparativo: {
    src: "/images/resultado-botox-comparativo.png",
    alt: "Comparativo de antes e depois de toxina botulinica",
    fit: "cover",
  },
  antes: {
    src: "/images/antes.jpg",
    alt: "Imagem antes do tratamento",
    fit: "cover",
  },
  depois: {
    src: "/images/depois.jpg",
    alt: "Imagem depois do tratamento",
    fit: "cover",
  },
  clinica: {
    src: "/images/clinica.jpg",
    alt: "Ambiente clínico elegante",
    fit: "cover",
  },
};
