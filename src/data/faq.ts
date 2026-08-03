export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a avaliação?",
    answer:
      "A avaliação é uma conversa detalhada sobre seus objetivos, histórico e rotina, seguida de análise individual para indicar possibilidades seguras.",
  },
  {
    question: "Os procedimentos são personalizados?",
    answer:
      "Sim. Cada plano é construído de acordo com características, expectativas e necessidades de cada paciente.",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "A duração varia conforme o procedimento, organismo, hábitos e cuidados de manutenção. A estimativa é explicada durante a consulta.",
  },
  {
    question: "Existe tempo de recuperação?",
    answer:
      "Alguns procedimentos permitem retorno rápido à rotina, enquanto outros exigem cuidados específicos. Todas as orientações são passadas previamente.",
  },
  {
    question: "Como posso agendar?",
    answer:
      "Você pode preencher o formulário, enviar as informações pelo WhatsApp ou usar os botões de agendamento espalhados pelo site.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "As condições podem variar conforme o tratamento. A equipe informa as opções disponíveis no momento do atendimento.",
  },
];
