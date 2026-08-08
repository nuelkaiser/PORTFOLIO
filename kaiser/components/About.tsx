"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="display text-[clamp(2.5rem,6vw,4.25rem)] text-foreground"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-2xl"
        >
          <p className="text-xl leading-relaxed text-foreground md:text-2xl md:leading-snug">
            {site.bio}
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.16em] text-muted">
            Currently based in {site.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
