"use client";

import { ArrowLeftRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { FloatingFloral } from "../animations/FloatingFloral";
import { Reveal } from "../animations/Reveal";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { SectionTitle } from "../ui/SectionTitle";
import { featuredResult } from "@/src/data/results";

export function Results() {
  const [slider, setSlider] = useState(50);

  return (
    <section className="section results-section" id="resultados">
      <FloatingFloral className="results-floral results-floral-left" />
      <FloatingFloral className="results-floral results-floral-right" />
      <div className="container">
        <SectionTitle
          eyebrow="Resultados"
          title="Resultados que falam por si"
          subtitle="Um olhar cuidadoso para mudanças sutis, seguras e coerentes com cada paciente."
        />
        <div className="results-layout">
          <Reveal className="results-compare-card">
            <div className="before-after-frame" style={{ "--split": `${slider}%` } as CSSProperties}>
              <ImageWithFallback image={featuredResult.after} className="result-after-image" />
              <div className="result-before-layer">
                <ImageWithFallback image={featuredResult.before} className="result-before-image" />
              </div>
              <span className="result-label result-label-before">Antes</span>
              <span className="result-label result-label-after">Depois</span>
              <span className="result-split-line" aria-hidden="true" />
              <span className="result-drag-handle" aria-hidden="true">
                <ArrowLeftRight size={18} />
              </span>
              <input
                className="result-range"
                type="range"
                min="18"
                max="82"
                value={slider}
                aria-label="Comparar antes e depois"
                onChange={(event) => setSlider(Number(event.target.value))}
              />
            </div>
          </Reveal>

          <Reveal className="results-copy" delay={0.12}>
            <span className="eyebrow">Comparação visual</span>
            <h3>Arraste para observar a evolução</h3>
            <p>
              A avaliação presencial define o melhor protocolo para cada caso. As imagens
              exibem registros autorizados e reforçam a importância de um planejamento
              individualizado.
            </p>
            <small>Os resultados podem variar de acordo com cada paciente.</small>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
