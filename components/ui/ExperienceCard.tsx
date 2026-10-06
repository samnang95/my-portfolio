"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { ExperienceItem } from "@/types/portfolio";
import { slideIn } from "@/lib/motion";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      {...slideIn(index % 2 === 0 ? "left" : "right")}
      className="relative group"
    >
      {/* Timeline node */}
      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-zinc-200 bg-zinc-400 transition-colors group-hover:border-zinc-300 group-hover:bg-primary-500 dark:border-zinc-900 dark:bg-zinc-700 dark:group-hover:border-zinc-950 dark:group-hover:bg-primary-600">
        <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-zinc-950" />
      </div>

      {/* Card Container */}
      <div className="rounded-3xl border border-zinc-200/90 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm transition-all hover:border-primary-500/40 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-primary-400/40 dark:hover:bg-zinc-900/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary-600 transition-colors dark:text-white dark:group-hover:text-primary-300">
              {experience.role}
            </h3>
            <p className="text-sm font-semibold text-zinc-600 mt-1 dark:text-zinc-300">
              {experience.company}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 font-mono text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
              <Calendar className="h-3.5 w-3.5 text-primary-600 dark:text-primary-300" />
              {experience.period}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400">
              <MapPin className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
              {experience.location}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed dark:text-zinc-400">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mt-5 flex flex-col gap-2">
          {experience.achievements.map((ach, achIdx) => (
            <div
              key={achIdx}
              className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
            >
              <CheckCircle2 className="h-4 w-4 text-primary-600 shrink-0 mt-0.5 dark:text-primary-300" />
              <span>{ach}</span>
            </div>
          ))}
        </div>

        {/* Tech stack tags */}
        <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-zinc-200 dark:border-zinc-800/60">
          {experience.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
