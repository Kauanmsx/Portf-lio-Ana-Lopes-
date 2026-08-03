"use client";

import { BackToTop } from "../components/ui/BackToTop";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { About } from "../components/sections/About";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { Benefits } from "../components/sections/Benefits";
import { ContactForm } from "../components/sections/ContactForm";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Statistics } from "../components/sections/Statistics";
import { Testimonials } from "../components/sections/Testimonials";
import { Treatments } from "../components/sections/Treatments";

export function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Treatments />
        <About />
        <BeforeAfter />
        <Statistics />
        <Testimonials />
        <Process />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
