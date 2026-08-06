import type { SiteImage } from "./images";

export type ResultCase = {
  id: string;
  treatment: string;
  before: SiteImage;
  after: SiteImage;
};

export const featuredResult: ResultCase = {
  id: "paciente-3",
  treatment: "Toxina botulínica",
  before: {
    src: "/images/resultado-paciente-3-antes.png",
    alt: "Antes do tratamento na região frontal",
    fit: "cover",
  },
  after: {
    src: "/images/resultado-paciente-3-depois.png",
    alt: "Depois do tratamento na região frontal",
    fit: "cover",
  },
};
