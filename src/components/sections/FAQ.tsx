"use client";

import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { faqItems } from "@/src/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section">
      <div className="container faq-container">
        <SectionTitle
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          subtitle="Respostas gerais para orientar sua decisão antes da avaliação."
        />
        <div className="accordion">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <article className="accordion-item" key={item.question}>
                <button
                  type="button"
                  data-testid={`faq-button-${index}`}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <Plus aria-hidden="true" size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
