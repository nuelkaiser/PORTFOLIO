"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { useIntro } from "@/components/Intro";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { ready } = useIntro();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end px-[var(--gutter)] pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted md:mb-8 md:text-xs"
        >
          {site.role}
        </motion.p>

        <h1 className="display max-w-[18ch] text-[clamp(3.4rem,13vw,9.5rem)] text-foreground">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={ready ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 1.05, delay: 0.08, ease }}
            >
              Majekodunmi
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block italic text-accent-soft"
              initial={{ y: "110%" }}
              animate={ready ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 1.05, delay: 0.2, ease }}
            >
              Immanuel
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.48, ease }}
            className="flex items-center gap-8"
          >
            <a
              href="#work"
              className="link-underline text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground md:text-xs"
            >
              Selected Work
            </a>
            <a
              href="#contact"
              className="link-underline text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted hover:text-foreground md:text-xs"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
