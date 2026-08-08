"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;
const lineEase = [0.76, 0, 0.24, 1] as const;

function GrowingLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className="absolute inset-x-0 top-0 h-px origin-left bg-foreground/15"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px", amount: 0.2 }}
      transition={{ duration: 1.65, delay, ease: lineEase }}
    />
  );
}

function ProjectRow({
  project,
  index,
  active,
  onEnter,
  onLeave,
}: {
  project: Project;
  index: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease }}
      className="group relative grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-3 py-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] md:py-10"
    >
      <GrowingLine delay={index * 0.14} />

      <div className="min-w-0">
        <h3 className="display text-[clamp(2.25rem,6vw,4.75rem)] text-foreground transition-colors duration-500 group-hover:text-accent-soft">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:hidden">
          {project.summary}
        </p>
      </div>

      <p className="hidden max-w-md text-sm leading-relaxed text-muted md:block md:self-center">
        {project.summary}
      </p>

      <div className="flex items-center gap-4 self-start pt-2 md:self-center md:pt-0">
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          {project.year}
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-foreground opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          View live →
        </span>
      </div>

      <div
        className="col-span-full mt-2 aspect-[16/10] overflow-hidden md:hidden"
        style={{ backgroundColor: project.accent }}
      >
        <Image
          src={project.image}
          alt=""
          width={800}
          height={500}
          className="h-full w-full object-cover opacity-90"
        />
      </div>

      <div
        className={`pointer-events-none absolute right-[8%] top-1/2 z-10 hidden w-[min(38vw,420px)] -translate-y-1/2 overflow-hidden md:block ${
          active ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        aria-hidden
      >
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.45, ease }}
              className="relative aspect-[16/10] overflow-hidden"
              style={{ backgroundColor: project.accent }}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes="420px"
                className="object-cover opacity-90"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  );
}

export function Work() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="work" className="section-pad scroll-mt-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <h2 className="display text-[clamp(2.5rem,7vw,5rem)] text-foreground">
            Selected
            <span className="block italic text-accent-soft">Work—</span>
          </h2>
          <p className="pb-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted md:text-xs">
            ’26
          </p>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              active={activeId === project.id}
              onEnter={() => setActiveId(project.id)}
              onLeave={() => setActiveId(null)}
            />
          ))}
          <div className="relative h-px">
            <GrowingLine delay={projects.length * 0.14} />
          </div>
        </div>
      </div>
    </section>
  );
}
