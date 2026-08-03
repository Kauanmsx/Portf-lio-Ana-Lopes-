import type { SiteImageKey } from "./images";

export type Treatment = {
  id: string;
  name: string;
  description: string;
  details: string;
  image: SiteImageKey;
};

export const treatments: Treatment[] = [
  {
    id: "harmonizacao-facial",
    name: "Harmonização facial",
    description: "Planejamento sutil para equilibrar proporções e valorizar traços.",
    details:
      "A avaliação considera anatomia, rotina e objetivos para propor um plano seguro, individualizado e alinhado à naturalidade.",
    image: "tratamentoHarmonizacao",
  },
  {
    id: "preenchimento-facial",
    name: "Preenchimento facial",
    description: "Reposição estratégica de volume com acabamento delicado.",
    details:
      "Indicado após avaliação, pode contribuir para contorno, hidratação e suporte de áreas específicas, sempre respeitando os limites de cada face.",
    image: "tratamentoPreenchimento",
  },
  {
    id: "bioestimuladores",
    name: "Bioestimuladores de colágeno",
    description: "Estímulo gradual para firmeza, textura e viço da pele.",
    details:
      "Protocolos personalizados ajudam a estimular colágeno de forma progressiva, com acompanhamento e orientações de cuidado.",
    image: "tratamentoBioestimulador",
  },
  {
    id: "peelings-quimicos",
    name: "Peelings químicos",
    description: "Renovação controlada para uma pele mais uniforme e luminosa.",
    details:
      "A escolha dos ativos depende do tipo de pele, histórico e objetivo, evitando promessas absolutas e priorizando segurança.",
    image: "tratamentoPeeling",
  },
  {
    id: "toxina-botulinica",
    name: "Toxina botulínica",
    description: "Suavização de linhas de expressão com expressão preservada.",
    details:
      "O protocolo busca leveza e equilíbrio, com pontos definidos individualmente durante a avaliação presencial.",
    image: "tratamentoHarmonizacao",
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    description: "Hidratação profunda para textura mais refinada e pele viçosa.",
    details:
      "Uma opção para melhora de qualidade de pele, conduzida com orientação individual e expectativas realistas.",
    image: "tratamentoBioestimulador",
  },
];
