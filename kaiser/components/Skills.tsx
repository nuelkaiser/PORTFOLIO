"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="section-pad scroll-mt-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="display mb-12 text-[clamp(2.5rem,6vw,4.25rem)] text-foreground md:mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {entries.map(([group, items], index) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: index * 0.05, ease }}
            >
              <h3 className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
                {group}
              </h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item} className="text-base text-foreground md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
