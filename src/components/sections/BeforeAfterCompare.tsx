"use client";

import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteImages } from "@/src/data/images";

function clamp(value: number) {
  return Math.min(92, Math.max(8, value));
}

export function BeforeAfterCompare() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);

  const updateFromPointer = (clientX: number) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) {
      return;
    }
    setPosition(clamp(((clientX - box.left) / box.width) * 100));
  };

  return (
    <div
      ref={ref}
      className="image-compare result-compare"
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
      <ImageWithFallback image={siteImages.depois} className="compare-image compare-after" />
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
        <ImageWithFallback image={siteImages.antes} className="compare-image compare-before" />
      </div>
      <span className="compare-label compare-label-left">Antes</span>
      <span className="compare-label compare-label-right">Depois</span>
      <label className="sr-only" htmlFor="before-after-control">
        Controlar comparação de antes e depois
      </label>
      <input
        id="before-after-control"
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
  );
}
