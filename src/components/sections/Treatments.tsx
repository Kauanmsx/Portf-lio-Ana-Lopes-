"use client";

import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import { SectionTitle } from "../ui/SectionTitle";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/Button";
import { treatments, type Treatment } from "@/src/data/treatments";
import { siteImages } from "@/src/data/images";
import { createWhatsAppUrl } from "@/src/config/contact";

function TreatmentCard({
  treatment,
  onOpen,
}: {
  treatment: Treatment;
  onOpen: (treatment: Treatment) => void;
}) {
  return (
    <article className="treatment-card">
      <div className="treatment-image">
        <ImageWithFallback image={siteImages[treatment.image]} />
      </div>
      <div className="treatment-content">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <button
          type="button"
          data-testid={`treatment-open-${treatment.id}`}
          onClick={() => onOpen(treatment)}
        >
          Saiba mais
          <ArrowRight aria-hidden="true" size={17} />
        </button>
      </div>
    </article>
  );
}

export function Treatments() {
  const [selected, setSelected] = useState<Treatment | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
      if (event.key === "Tab") {
        const modal = document.querySelector<HTMLElement>(".treatment-modal");
        const focusable = modal?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) {
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          last.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 40);
    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section className="section treatments-section" id="tratamentos">
      <div className="container">
        <SectionTitle
          eyebrow="Tratamentos"
          title="Nossos tratamentos"
          subtitle="Cuidados personalizados para valorizar sua beleza de forma natural e segura."
        />
        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onOpen={setSelected}
            />
          ))}
        </div>
        <div className="treatments-carousel" aria-label="Carrossel de tratamentos">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={18}
            slidesPerView={1.08}
            breakpoints={{ 620: { slidesPerView: 2.05 } }}
          >
            {treatments.map((treatment) => (
              <SwiperSlide key={treatment.id}>
                <TreatmentCard treatment={treatment} onOpen={setSelected} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AnimatePresence>
        {selected ? (
          <motion.div
            className="modal-backdrop"
            role="presentation"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="treatment-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="treatment-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                data-testid="treatment-modal-close"
                aria-label="Fechar detalhes do tratamento"
                onClick={() => setSelected(null)}
                ref={closeButtonRef}
              >
                <X aria-hidden="true" size={22} />
              </button>
              <span className="eyebrow">Tratamento</span>
              <h3 id="treatment-modal-title">{selected.name}</h3>
              <p>{selected.details}</p>
              <Button href={createWhatsAppUrl()} icon="calendar">
                Quero avaliar este cuidado
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
