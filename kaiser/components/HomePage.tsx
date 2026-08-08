"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { History } from "@/components/History";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { IntroProvider } from "@/components/Intro";

export function HomePage() {
  return (
    <IntroProvider>
      <div className="site-atmosphere" aria-hidden />
      <div className="site-grain" aria-hidden />
      <div className="site-content">
        <Nav />
        <main>
          <Hero />
          <Work />
          <About />
          <History />
          <Skills />
          <Contact />
        </main>
      </div>
    </IntroProvider>
  );
}
