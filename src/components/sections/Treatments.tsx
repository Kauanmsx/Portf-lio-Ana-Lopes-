"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { FloatingFloral } from "../animations/FloatingFloral";
import { treatments, type Treatment } from "@/src/data/treatments";
import { siteImages } from "@/src/data/images";

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className={`treatment-card treatment-${treatment.id}`}>
      <div className="treatment-image">
        <ImageWithFallback image={siteImages[treatment.image]} />
      </div>
      <div className="treatment-content">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <Link
          className="treatment-card-link"
          data-testid={`treatment-open-${treatment.id}`}
          aria-label={`Ver detalhes sobre ${treatment.name}`}
          href={`/tratamentos/${treatment.id}`}
        >
          Saiba mais
          <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </div>
    </article>
  );
}

export function Treatments() {
  const treatmentsRef = useRef<HTMLDivElement | null>(null);

  const scrollTreatments = (direction: -1 | 1) => {
    const rail = treatmentsRef.current;
    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.86,
      behavior: "smooth",
    });
  };

  return (
    <section className="section treatments-section" id="tratamentos">
      <FloatingFloral className="treatments-floral treatments-floral-top" />
      <FloatingFloral className="treatments-floral treatments-floral-bottom" />
      <span className="treatments-wave-line" aria-hidden="true" />
      <div className="container">
        <SectionTitle
          eyebrow="Tratamentos"
          title={
            <>
              Encontre o <span className="gold-text">cuidado ideal</span> para você
            </>
          }
          subtitle="Tecnologia, ciência e excelência para realçar sua beleza com naturalidade e segurança."
        />
        <div className="treatments-rail-wrap">
          <button
            type="button"
            className="treatments-nav treatments-nav-prev"
            aria-label="Tratamentos anteriores"
            onClick={() => scrollTreatments(-1)}
          >
            <ChevronLeft aria-hidden="true" size={26} />
          </button>
          <div className="treatments-grid" ref={treatmentsRef}>
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
          <button
            type="button"
            className="treatments-nav treatments-nav-next"
            aria-label="Próximos tratamentos"
            onClick={() => scrollTreatments(1)}
          >
            <ChevronRight aria-hidden="true" size={26} />
          </button>
        </div>
        <div className="treatments-dots" aria-hidden="true">
          {treatments.map((treatment, index) => (
            <span className={index === 0 ? "is-active" : ""} key={treatment.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
