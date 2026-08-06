import type { SiteImageKey } from "./images";

export type TreatmentSubcategory = {
  name: string;
  description: string;
};

export type Treatment = {
  id: string;
  name: string;
  description: string;
  details: string;
  deepDescription: string;
  steps: string[];
  indications: string[];
  subcategories?: TreatmentSubcategory[];
  image: SiteImageKey;
};

export const treatments: Treatment[] = [
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial",
    description: "Equilíbrio e naturalidade para realçar sua beleza.",
    details:
      "A avaliação considera anatomia, rotina e objetivos para propor um plano seguro, individualizado e alinhado à naturalidade.",
    deepDescription:
      "A harmonização facial é planejada para equilibrar proporções, suavizar assimetrias e valorizar os traços naturais sem descaracterizar o rosto. Antes de qualquer indicação, a Dra. Ana observa estrutura facial, qualidade da pele, expressão, histórico e objetivo da paciente para montar um plano de cuidado individual.",
    steps: [
      "Avaliação facial completa e escuta do objetivo estético.",
      "Planejamento dos pontos que podem receber intervenção com segurança.",
      "Indicação de técnicas combinadas quando fizer sentido para o resultado.",
      "Orientações de preparo, recuperação e acompanhamento pós-procedimento.",
    ],
    indications: [
      "Quem busca um rosto mais equilibrado sem exageros.",
      "Pacientes que desejam melhorar contorno, sustentação ou proporção facial.",
      "Pessoas que querem um plano progressivo, natural e personalizado.",
    ],
    image: "tratamentoHarmonizacao",
  },
  {
    id: "preenchimento-facial",
    name: "Preenchimento Facial",
    description: "Volume e contorno na medida certa para você.",
    details:
      "Indicado após avaliação, pode contribuir para contorno, hidratação e suporte de áreas específicas, sempre respeitando os limites de cada face.",
    deepDescription:
      "O preenchimento facial pode ajudar a restaurar volumes, definir pontos estratégicos e melhorar contornos com precisão. O foco é respeitar a anatomia e a naturalidade para que o resultado converse com o rosto inteiro.",
    steps: [
      "Avaliação das proporções faciais e áreas de suporte.",
      "Definição da quantidade e dos pontos de aplicação.",
      "Aplicação cuidadosa com técnica adequada para cada região.",
      "Orientação sobre cuidados após o procedimento.",
    ],
    indications: [
      "Contorno facial mais definido.",
      "Reposição de volume em áreas específicas.",
      "Melhora de suporte e harmonia do rosto.",
    ],
    image: "tratamentoPreenchimento",
  },
  {
    id: "bioestimuladores",
    name: "Bioestimuladores de Colágeno",
    description: "Firmeza, sustentação e juventude para sua pele.",
    details:
      "Protocolos personalizados ajudam a estimular colágeno de forma progressiva, com acompanhamento e orientações de cuidado.",
    deepDescription:
      "Os bioestimuladores são indicados para estimular a produção de colágeno e melhorar a firmeza da pele ao longo do tempo. O resultado costuma ser progressivo, respeitando o ritmo de resposta de cada organismo.",
    steps: [
      "Análise da flacidez, textura e qualidade da pele.",
      "Escolha do protocolo conforme necessidade e região.",
      "Aplicação em pontos planejados para estímulo gradual.",
      "Acompanhamento da evolução do colágeno.",
    ],
    indications: [
      "Firmeza e sustentação da pele.",
      "Prevenção de perda de colágeno.",
      "Resultados progressivos e naturais.",
    ],
    image: "tratamentoBioestimulador",
  },
  {
    id: "laser-co2",
    name: "Laser CO2",
    description: "Suavização de linhas de expressão e prevenção.",
    details:
      "O protocolo com Laser CO2 é definido após avaliação, respeitando fototipo, objetivo e recuperação esperada para cada pele.",
    deepDescription:
      "O Laser CO2 atua na renovação da pele e pode auxiliar na melhora de textura, linhas finas e marcas selecionadas. A intensidade e o protocolo dependem da avaliação, fototipo e tempo disponível para recuperação.",
    steps: [
      "Avaliação da pele e do objetivo de renovação.",
      "Definição de intensidade e áreas de tratamento.",
      "Aplicação do laser com orientação de segurança.",
      "Cuidados pós-procedimento para proteger a pele.",
    ],
    indications: [
      "Textura irregular e linhas finas.",
      "Renovação e viço da pele.",
      "Protocolos de melhora progressiva da qualidade cutânea.",
    ],
    image: "tratamentoLaserCO2",
  },
  {
    id: "gerenciamento-de-pele",
    name: "Gerenciamento de Pele",
    description: "Hidratação profunda e viço de dentro para fora.",
    details:
      "Cuidado profundo para limpeza, renovação, viço e preparo da pele com segurança.",
    deepDescription:
      "O gerenciamento de pele organiza uma rotina de cuidado profissional para melhorar limpeza, hidratação, textura e luminosidade. O plano pode combinar procedimentos em consultório e orientações para manutenção em casa.",
    steps: [
      "Análise do tipo de pele, oleosidade e sensibilidade.",
      "Limpeza, preparo e escolha do protocolo ideal.",
      "Procedimentos para renovação, hidratação e viço.",
      "Orientação de manutenção para prolongar o resultado.",
    ],
    indications: [
      "Pele sem viço, oleosa ou congestionada.",
      "Preparo antes de outros procedimentos.",
      "Quem deseja uma rotina de cuidado mais organizada.",
    ],
    subcategories: [
      {
        name: "Limpeza de pele",
        description:
          "Protocolo para remover impurezas, controlar oleosidade e deixar a pele mais preparada para outros cuidados.",
      },
      {
        name: "Peelings",
        description:
          "Renovação controlada para melhorar textura, luminosidade, manchas selecionadas e uniformidade da pele.",
      },
      {
        name: "Microagulhamento",
        description:
          "Estímulo planejado da pele para favorecer renovação, qualidade cutânea e melhora progressiva da textura.",
      },
      {
        name: "Hidraglow",
        description:
          "Cuidado voltado para hidratação, viço e aparência mais iluminada, conforme a necessidade de cada pele.",
      },
    ],
    image: "tratamentoGerenciamentoPele",
  },
  {
    id: "procedimentos-corporais",
    name: "Procedimentos Corporais",
    description: "Contorno, firmeza e cuidado personalizado para o corpo.",
    details:
      "Protocolos corporais planejados de acordo com avaliação, rotina e objetivos para cuidar de textura, firmeza e bem-estar.",
    deepDescription:
      "Os procedimentos corporais são pensados de forma personalizada para cuidar de contorno, firmeza, textura e bem-estar. A indicação depende da avaliação e da construção de um plano realista para cada objetivo.",
    steps: [
      "Avaliação corporal e alinhamento de expectativas.",
      "Definição das áreas prioritárias de cuidado.",
      "Escolha do protocolo conforme objetivo e rotina.",
      "Acompanhamento da evolução com orientações individualizadas.",
    ],
    indications: [
      "Cuidado com firmeza e textura corporal.",
      "Apoio em planos de contorno e bem-estar.",
      "Pacientes que desejam protocolos personalizados.",
    ],
    subcategories: [
      {
        name: "PEIM",
        description:
          "Técnica indicada após avaliação para cuidar de pequenos vasos aparentes, com planejamento e orientação individual.",
      },
      {
        name: "Harmonização glútea",
        description:
          "Protocolos para valorizar contorno, proporção e firmeza da região glútea de forma personalizada.",
      },
      {
        name: "Criolipólise",
        description:
          "Tecnologia de resfriamento controlado usada em planos de cuidado para gordura localizada.",
      },
      {
        name: "Tratamento para gordura localizada",
        description:
          "Combinação de estratégias corporais para áreas específicas, definida conforme avaliação, rotina e objetivo.",
      },
      {
        name: "Tratamento para cicatriz",
        description:
          "Cuidado voltado para textura, aspecto e qualidade da pele em áreas com cicatrizes, respeitando cada caso.",
      },
    ],
    image: "tratamentoCorporal",
  },
];
