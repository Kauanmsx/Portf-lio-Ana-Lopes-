"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteImages } from "@/src/data/images";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

function clamp(value: number) {
  return Math.min(92, Math.max(8, value));
}

export function ImageTransformation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(88);
  const [dragging, setDragging] = useState(false);
  const [played, setPlayed] = useState(false);
  const inView = useInViewOnce(ref);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || played || reducedMotion) {
      return;
    }

    setPlayed(true);
    const start = performance.now();
    const duration = 1450;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPosition(88 - eased * 48);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, played, reducedMotion]);

  const updateFromPointer = (clientX: number) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) {
      return;
    }
    setPosition(clamp(((clientX - box.left) / box.width) * 100));
  };

  return (
    <div className="transformation-shell">
      <motion.div
        className="transformation-arc"
        aria-hidden="true"
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        ref={ref}
        className={`image-compare transformation-compare ${played ? "has-played" : ""}`}
        onPointerDown={(event) => {
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
          updateFromPointer(event.clientX);
        }}
        onPointerMove={(event) => {
          if (dragging) {
            updateFromPointer(event.clientX);
          }
        }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        <ImageWithFallback
          image={siteImages.draAnaJaleco}
          className="compare-image compare-after"
          priority
        />
        <div
          className="compare-before-wrap"
          style={
            {
              width: `${position}%`,
              "--clip-image-width": `${10000 / position}%`,
            } as CSSProperties
          }
          aria-hidden="true"
        >
          <ImageWithFallback
            image={siteImages.draAnaCasual}
            className="compare-image compare-before"
            priority
          />
        </div>
        <span className="compare-label compare-label-left">Natural</span>
        <span className="compare-label compare-label-right">Profissional</span>
        <span className="transition-beam" aria-hidden="true" />
        <div className="gold-particles" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <label className="sr-only" htmlFor="hero-transformation">
          Controlar transição entre foto casual e jaleco profissional
        </label>
        <input
          id="hero-transformation"
          className="compare-range"
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
              event.preventDefault();
              setPosition((value) => clamp(value - 4));
            }
            if (event.key === "ArrowRight" || event.key === "ArrowUp") {
              event.preventDefault();
              setPosition((value) => clamp(value + 4));
            }
            if (event.key === "Home") {
              event.preventDefault();
              setPosition(8);
            }
            if (event.key === "End") {
              event.preventDefault();
              setPosition(92);
            }
          }}
        />
        <div className="compare-handle" style={{ left: `${position}%` }} aria-hidden="true">
          <ChevronLeft size={15} />
          <ChevronRight size={15} />
        </div>
      </div>
    </div>
  );
}
