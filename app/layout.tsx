import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { siteConfig } from "@/src/config/site";
import "../css do site/globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const baseUrl = host ? `${protocol}://${host}` : siteConfig.url;
  const ogImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: new URL(baseUrl),
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: baseUrl,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Dra. Ana Lopes - Biomédica Esteta",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [ogImage],
    },
    keywords: [
      "Dra. Ana Lopes",
      "biomédica esteta",
      "harmonização facial",
      "estética avançada",
      "beleza natural",
    ],
    icons: {
      icon: "/images/logo-mark.png",
      shortcut: "/images/logo-mark.png",
    },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.seo.description,
  url: siteConfig.url,
  sameAs: [siteConfig.contact.instagram, siteConfig.contact.whatsappUrl],
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressCountry: "BR",
  },
  openingHours: siteConfig.contact.hours,
  medicalSpecialty: "Estética biomédica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
