"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, ClipboardCheck, HeartPulse, Route } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

const steps = [
  {
    icon: CalendarDays,
    title: "Agendamento",
    text: "Escolha o melhor canal e conte brevemente o que procura.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação personalizada",
    text: "Entenda possibilidades, cuidados e expectativas com clareza.",
  },
  {
    icon: Route,
    title: "Plano de tratamento",
    text: "Receba um plano alinhado à sua rotina e aos seus objetivos.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento",
    text: "Tenha orientações para evolução segura e manutenção dos resultados.",
  },
];

export function Process() {
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !lineRef.current || !sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <section className="section process-section" ref={sectionRef}>
      <div className="container">
        <SectionTitle
          eyebrow="Atendimento"
          title="Etapas do atendimento"
          subtitle="Um percurso claro para você se sentir acolhida antes, durante e depois."
        />
        <div className="process-track">
          <span className="process-line" ref={lineRef} aria-hidden="true" />
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <AnimatedIcon icon={step.icon} label={step.title} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
