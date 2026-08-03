"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { SectionTitle } from "../ui/SectionTitle";
import { BeforeAfterCompare } from "./BeforeAfterCompare";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteImages } from "@/src/data/images";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

const resultCards = [
  { title: "Toxina botulínica", image: siteImages.resultadoBotoxComparativo },
  { title: "Textura mais uniforme", image: siteImages.tratamentoPeeling },
  { title: "Contorno delicado", image: siteImages.tratamentoHarmonizacao },
  { title: "Viço e qualidade de pele", image: siteImages.tratamentoBioestimulador },
];

export function BeforeAfter() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section results-section" id="resultados">
      <div className="container">
        <SectionTitle
          eyebrow="Resultados"
          title="Resultados que falam por si"
          subtitle="Um olhar cuidadoso para mudanças sutis, seguras e coerentes com cada paciente."
        />
        <div className="results-grid">
          <BeforeAfterCompare />
          <div className="results-copy">
            <span className="eyebrow">Comparação interativa</span>
            <h3>Arraste para observar a evolução</h3>
            <p>
              A avaliação presencial define o melhor protocolo para cada caso.
              As imagens exibem registros autorizados e reforçam a importância
              de um planejamento individualizado.
            </p>
            <small>Os resultados podem variar de acordo com cada paciente.</small>
          </div>
        </div>
        <div className="results-carousel">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            pagination={{ clickable: true }}
            autoplay={reducedMotion ? false : { delay: 3600, disableOnInteraction: false }}
            spaceBetween={18}
            slidesPerView={1.1}
            breakpoints={{ 700: { slidesPerView: 3 } }}
          >
            {resultCards.map((card) => (
              <SwiperSlide key={card.title}>
                <article className="result-card">
                  <ImageWithFallback image={card.image} />
                  <h3>{card.title}</h3>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
