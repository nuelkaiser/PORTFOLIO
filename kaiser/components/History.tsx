"use client";

import { motion } from "framer-motion";
import { certifications, education, experience } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function History() {
  return (
    <section id="history" className="section-pad scroll-mt-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="display mb-12 text-[clamp(2.5rem,6vw,4.25rem)] text-foreground md:mb-16"
        >
          History
        </motion.h2>

        <ul className="flex flex-col">
          {experience.map((item, index) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: index * 0.06, ease }}
              className="grid grid-cols-1 gap-2 border-t border-border py-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-6 md:py-8"
            >
              <span className="display text-2xl md:text-3xl">{item.company}</span>
              <span className="text-sm text-muted md:text-base">{item.role}</span>
              <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                {item.period}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted md:text-right">
                {item.location}
              </span>
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            className="grid grid-cols-1 gap-2 border-t border-border py-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-6 md:py-8"
          >
            <span className="display text-2xl md:text-3xl">{education.school}</span>
            <span className="text-sm text-muted md:text-base">{education.degree}</span>
            <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              {education.period}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted md:text-right">
              {education.location}
            </span>
          </motion.li>

          {certifications.map((cert) => (
            <motion.li
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: 0.16, ease }}
              className="grid grid-cols-1 gap-2 border-t border-b border-border py-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2.4fr)] md:items-baseline md:gap-6 md:py-8"
            >
              <span className="display text-2xl md:text-3xl">AWS</span>
              <div>
                <p className="text-sm text-foreground md:text-base">{cert.name}</p>
                <p className="mt-1 text-sm text-muted">{cert.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
