"use client";

import { Camera, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AnimatedLogo } from "../animations/AnimatedLogo";
import { siteConfig } from "@/src/config/site";
import { contactConfig, createWhatsAppUrl } from "@/src/config/contact";

const footerLinks = [
  ...siteConfig.nav,
  { label: "Política de privacidade", href: "#contato" },
  { label: "Termos de uso", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="site-footer" id="rodape">
      <div className="footer-leaf footer-leaf-left" aria-hidden="true" />
      <div className="footer-leaf footer-leaf-right" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <AnimatedLogo light />
          <p>
            Cuidado estético personalizado para realçar a beleza natural com
            segurança, ciência e acolhimento.
          </p>
        </div>
        <div>
          <h3>Navegação</h3>
          <nav className="footer-links" aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <a key={`${link.label}-${link.href}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3>Contato</h3>
          <ul className="footer-contact">
            <li>
              <Phone aria-hidden="true" size={18} />
              <a href={`tel:${contactConfig.phone.replace(/\D/g, "")}`}>
                {contactConfig.phone}
              </a>
            </li>
            <li>
              <MessageCircle aria-hidden="true" size={18} />
              <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Camera aria-hidden="true" size={18} />
              <a href={contactConfig.instagram} target="_blank" rel="noreferrer">
                {contactConfig.instagramHandle}
              </a>
            </li>
            <li>
              <Mail aria-hidden="true" size={18} />
              <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Atendimento</h3>
          <ul className="footer-contact">
            <li>
              <MapPin aria-hidden="true" size={18} />
              <a href={contactConfig.mapUrl} target="_blank" rel="noreferrer">
                {contactConfig.address}
              </a>
            </li>
            <li>
              <Clock aria-hidden="true" size={18} />
              <span>{contactConfig.hours}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.fullName}. {siteConfig.crbm}.
        </span>
        <span>Conteúdo informativo. Avaliação presencial individualizada.</span>
      </div>
    </footer>
  );
}
