"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navLinks, site } from "@/lib/content";
import { useIntro } from "@/components/Intro";

export function Nav() {
  const { ready } = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden
      />
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -24, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex items-center justify-between gap-6 px-[var(--gutter)] py-4 md:py-5"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground md:text-xs"
          >
            {site.name}
          </a>
          <ul className="flex items-center gap-5 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted hover:text-foreground md:text-xs"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
    </>
  );
}
