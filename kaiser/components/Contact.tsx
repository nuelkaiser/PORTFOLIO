"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const contacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/nuelkaiser", href: site.linkedin },
  { label: "GitHub", value: "github.com/nuelkaiser", href: site.github },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/-/g, "")}` },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-pad scroll-mt-20 pb-24 md:pb-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="display mb-12 text-[clamp(2.5rem,6vw,4.25rem)] text-foreground md:mb-16"
        >
          Contact
        </motion.h2>

        <ul className="flex flex-col">
          {contacts.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease }}
              className="border-t border-border"
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8 md:py-7"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {item.label}
                </span>
                <span className="link-underline display text-2xl text-foreground md:text-3xl">
                  {item.value}
                </span>
              </a>
            </motion.li>
          ))}
          <div className="border-t border-border" />
        </ul>

        <footer className="mt-16 flex flex-col gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-muted md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>
            {site.name} Selected Work ’26
          </p>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
