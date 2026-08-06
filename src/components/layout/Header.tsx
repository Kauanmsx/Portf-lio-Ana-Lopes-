"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "../animations/AnimatedLogo";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { createWhatsAppUrl } from "@/src/config/contact";
import { siteConfig } from "@/src/config/site";

const sectionIds = [
  "inicio",
  "diferenciais",
  "sobre",
  "tratamentos",
  "resultados",
  "contato",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.12, 0.35, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="header-logo" href="#inicio" aria-label="Ir para o início">
          <AnimatedLogo compact />
        </a>
        <nav className="desktop-nav" aria-label="Menu principal">
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeId === id ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="header-actions">
          <Button href={createWhatsAppUrl()} className="header-cta">
            Agende sua consulta
          </Button>
          <button
            type="button"
            className="menu-toggle"
            data-testid="mobile-menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden="true" size={25} />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} activeId={activeId} onClose={() => setMenuOpen(false)} />
    </>
  );
}
