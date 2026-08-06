import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { AnimatedLogo } from "@/src/components/animations/AnimatedLogo";
import { Button } from "@/src/components/ui/Button";
import { ImageWithFallback } from "@/src/components/ui/ImageWithFallback";
import { createWhatsAppUrl } from "@/src/config/contact";
import { siteImages } from "@/src/data/images";
import { treatments } from "@/src/data/treatments";

type TreatmentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return treatments.map((treatment) => ({
    id: treatment.id,
  }));
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { id } = await params;
  const treatment = treatments.find((item) => item.id === id);

  if (!treatment) {
    notFound();
  }

  const whatsappUrl = createWhatsAppUrl(
    `Olá, Dra. Ana! Vim pelo site e gostaria de saber mais sobre ${treatment.name} e realizar um agendamento.`,
  );

  return (
    <main className={`treatment-page treatment-page-${treatment.id}`}>
      <header className="treatment-page-header">
        <Link href="/#inicio" className="treatment-page-brand" aria-label="Voltar para o início">
          <AnimatedLogo compact />
        </Link>
        <nav className="treatment-page-nav" aria-label="Navegação do tratamento">
          <Link href="/#tratamentos">Tratamentos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
      </header>

      <section className="treatment-page-hero">
        <div className="treatment-page-copy">
          <Link className="treatment-page-back" href="/#tratamentos">
            <ArrowLeft aria-hidden="true" size={17} />
            Voltar aos tratamentos
          </Link>
          <span className="eyebrow">Tratamento</span>
          <h1>{treatment.name}</h1>
          <p className="treatment-page-lead">{treatment.deepDescription}</p>
          <div className="treatment-page-actions">
            <Button href={whatsappUrl} icon="calendar">
              Agendar avaliação
            </Button>
            <Link className="treatment-page-link" href="/#contato">
              Tirar dúvidas
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="treatment-page-visual">
          <span className="treatment-page-logo-mark" aria-hidden="true" />
          <div className="treatment-page-image">
            <ImageWithFallback image={siteImages[treatment.image]} priority />
          </div>
        </div>
      </section>

      {treatment.subcategories?.length ? (
        <section className="treatment-page-subcategories" aria-label={`Subcategorias de ${treatment.name}`}>
          <span className="eyebrow">Subcategorias</span>
          <h2>Protocolos dentro de {treatment.name}</h2>
          <div className="subcategory-list">
            {treatment.subcategories.map((subcategory, index) => (
              <article className="subcategory-card" key={subcategory.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{subcategory.name}</strong>
                <p>{subcategory.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="treatment-page-grid" aria-label={`Detalhes sobre ${treatment.name}`}>
        <article className="treatment-page-card">
          <span className="eyebrow">Como funciona</span>
          <h2>Plano com segurança e naturalidade</h2>
          <ul>
            {treatment.steps.map((step) => (
              <li key={step}>
                <Check aria-hidden="true" size={17} />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="treatment-page-card">
          <span className="eyebrow">Indicado para</span>
          <h2>Quando esse cuidado faz sentido</h2>
          <ul>
            {treatment.indications.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="treatment-page-final">
        <div>
          <span className="eyebrow">Avaliação individual</span>
          <h2>O próximo passo é entender o seu rosto, pele e objetivo.</h2>
          <p>{treatment.details}</p>
        </div>
        <Button href={whatsappUrl} icon="arrow">
          Conversar pelo WhatsApp
        </Button>
      </section>
    </main>
  );
}
