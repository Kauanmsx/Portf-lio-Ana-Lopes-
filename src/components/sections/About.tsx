"use client";

import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FloatingFloral } from "../animations/FloatingFloral";
import { Reveal } from "../animations/Reveal";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteConfig } from "@/src/config/site";
import { siteImages, type SiteImage } from "@/src/data/images";

type AboutSlide = {
  image: SiteImage;
  milestone: string;
  note: string;
};

const aboutSlides: AboutSlide[] = [
  {
    image: siteImages.draAnaJaleco,
    milestone: "Atuação clínica",
    note: "Cuidado, técnica e naturalidade em cada protocolo.",
  },
  {
    image: {
      src: "/images/sobre-clinica-jaleco.png",
      alt: "Dra. Ana Lopes em ambiente clínico com jaleco",
      fit: "cover",
    },
    milestone: "Rotina profissional",
    note: "Avaliação individual e segurança no atendimento.",
  },
  {
    image: {
      src: "/images/sobre-graduacao.png",
      alt: "Dra. Ana Lopes em registros de graduação",
      fit: "cover",
    },
    milestone: "Formação em Biomedicina",
    note: "Base científica para conduzir protocolos estéticos.",
  },
  {
    image: {
      src: "/images/sobre-formatura-familia.png",
      alt: "Dra. Ana Lopes comemorando sua formatura",
      fit: "cover",
    },
    milestone: "Trajetória com propósito",
    note: "Uma construção feita com estudo, família e dedicação.",
  },
];

const timelineBubbles = [
  {
    value: "2021",
    label: "Primeiro curso na área",
  },
  {
    value: "+4",
    label: "anos de experiência",
  },
];

export function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (direction: -1 | 1) => {
    setActiveSlide((current) => (current + direction + aboutSlides.length) % aboutSlides.length);
  };

  const currentSlide = aboutSlides[activeSlide];

  return (
    <section className="section about-section" id="sobre">
      <FloatingFloral className="about-floral" />
      <div className="container about-grid">
        <Reveal className="about-copy" delay={0.12}>
          <span className="eyebrow">Sobre a Dra. Ana</span>
          <h2>Cuidado, ciência e naturalidade</h2>
          <p className="lead">
            Minha missão é realçar a beleza de forma natural, respeitando a
            individualidade de cada paciente e promovendo autoestima, segurança
            e bem-estar.
          </p>
          <p>
            A experiência é conduzida com escuta, planejamento e protocolos
            personalizados. Cada indicação nasce de uma avaliação cuidadosa,
            com orientação clara e acompanhamento responsável.
          </p>
          <div className="about-signature">
            <BadgeCheck aria-hidden="true" size={22} />
            <div>
              <strong>{siteConfig.name}</strong>
              <span>{siteConfig.title} · {siteConfig.crbm}</span>
            </div>
          </div>
          <span className="script-detail" aria-hidden="true">Ana Lopes</span>
        </Reveal>

        <Reveal className="about-carousel-wrap">
          <div className="about-carousel" aria-label="Trajetória da Dra. Ana Lopes">
            <div className="about-slides">
              {aboutSlides.map((slide, index) => (
                <div
                  className={`about-slide ${index === activeSlide ? "is-active" : ""}`}
                  aria-hidden={index !== activeSlide}
                  key={slide.image.src}
                >
                  <ImageWithFallback image={slide.image} className="about-image" />
                </div>
              ))}
            </div>

            <div className="about-slide-card">
              <span>{currentSlide.milestone}</span>
              <strong>{currentSlide.note}</strong>
            </div>

            <div className="about-bubbles" aria-label="Marcos da trajetória">
              {timelineBubbles.map((bubble) => (
                <div className="about-bubble" key={bubble.value}>
                  <strong>{bubble.value}</strong>
                  <span>{bubble.label}</span>
                </div>
              ))}
            </div>

            <div className="about-carousel-controls">
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => goToSlide(-1)}
              >
                <ChevronLeft aria-hidden="true" size={22} />
              </button>
              <div className="about-carousel-dots" aria-hidden="true">
                {aboutSlides.map((slide, index) => (
                  <span className={index === activeSlide ? "is-active" : ""} key={slide.image.src} />
                ))}
              </div>
              <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => goToSlide(1)}
              >
                <ChevronRight aria-hidden="true" size={22} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
