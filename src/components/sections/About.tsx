"use client";

import { Award, BadgeCheck } from "lucide-react";
import { FloatingFloral } from "../animations/FloatingFloral";
import { Reveal } from "../animations/Reveal";
import { Button } from "../ui/Button";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteConfig } from "@/src/config/site";
import { siteImages } from "@/src/data/images";

export function About() {
  return (
    <section className="section about-section" id="sobre">
      <FloatingFloral className="about-floral" />
      <div className="container about-grid">
        <Reveal className="about-image-wrap">
          <ImageWithFallback image={siteImages.draAnaJaleco} className="about-image" />
          <div className="about-badge">
            <Award aria-hidden="true" size={20} />
            <span>{siteConfig.crbm}</span>
          </div>
        </Reveal>
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
          <Button href="#contato" variant="secondary" icon="arrow">
            Conheça minha trajetória
          </Button>
          <span className="script-detail" aria-hidden="true">Ana Lopes</span>
        </Reveal>
      </div>
    </section>
  );
}
