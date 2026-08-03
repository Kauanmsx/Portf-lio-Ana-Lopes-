"use client";

import { HeartHandshake, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { Reveal } from "../animations/Reveal";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Você em primeiro lugar, sempre.",
  },
  {
    icon: Sparkles,
    title: "Procedimentos avançados",
    text: "Tecnologia e ciência a seu favor.",
  },
  {
    icon: Leaf,
    title: "Resultados naturais",
    text: "Realce sua beleza com leveza.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e confiança",
    text: "Protocolos seguros e personalizados.",
  },
];

export function Benefits() {
  return (
    <section className="section benefits-section" id="diferenciais">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.08}>
              <article className="benefit-card">
                <AnimatedIcon icon={benefit.icon} label={benefit.title} />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
