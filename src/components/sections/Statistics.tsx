"use client";

import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

const stats = [
  { value: 500, suffix: "+", label: "pacientes atendidos" },
  { value: 1200, suffix: "+", label: "procedimentos realizados" },
  { value: 5, suffix: "+", label: "anos de experiência" },
  { value: 100, suffix: "%", label: "compromisso com segurança e naturalidade" },
];

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!start) {
      return;
    }
    if (reducedMotion) {
      setCurrent(value);
      return;
    }

    const startTime = performance.now();
    const duration = 1450;
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion, start, value]);

  return (
    <strong>
      {suffix === "+" ? "+" : ""}
      {current.toLocaleString("pt-BR")}
      {suffix === "%" ? "%" : ""}
    </strong>
  );
}

export function Statistics() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInViewOnce(ref);

  return (
    <section className="section stats-section">
      <div className="container" ref={ref}>
        <SectionTitle
          eyebrow="Números"
          title="Experiência que transmite confiança"
          subtitle="Indicadores institucionais para apresentar a autoridade da clínica de forma clara."
        />
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} start={inView} />
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
