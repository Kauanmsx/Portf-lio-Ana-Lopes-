"use client";

import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { SectionTitle } from "../ui/SectionTitle";
import { testimonials } from "@/src/data/testimonials";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section testimonials-section" id="depoimentos">
      <div className="container">
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que nossas pacientes dizem"
          subtitle="Conteúdos de exemplo para serem substituídos por relatos reais autorizados."
        />
        <div className="testimonials-shell">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            navigation
            loop
            autoplay={reducedMotion ? false : { delay: 4300, pauseOnMouseEnter: true }}
            spaceBetween={22}
            slidesPerView={1}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <article className="testimonial-card">
                  <Quote aria-hidden="true" size={34} />
                  <div className="stars" aria-label="Cinco estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} aria-hidden="true" size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{testimonial.text}”</p>
                  <strong>{testimonial.name}</strong>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
