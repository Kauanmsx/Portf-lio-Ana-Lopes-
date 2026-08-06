"use client";

import { BackToTop } from "../components/ui/BackToTop";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { About } from "../components/sections/About";
import { Benefits } from "../components/sections/Benefits";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Hero } from "../components/sections/Hero";
import { Results } from "../components/sections/Results";
import { Treatments } from "../components/sections/Treatments";

export function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Treatments />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
