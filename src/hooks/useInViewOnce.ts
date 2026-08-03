"use client";

import { RefObject, useEffect, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(
  ref: RefObject<T | null>,
  rootMargin = "0px 0px -15% 0px",
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isInView, ref, rootMargin]);

  return isInView;
}
