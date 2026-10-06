"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  BookOpen,
  Headphones,
  Gamepad2,
  Code2,
  Rocket,
  Dumbbell,
  Languages,
} from "lucide-react";
import { AboutData } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { slideIn } from "@/lib/motion";

const iconMap = {
  Zap,
  ShieldCheck,
  Sparkles,
};

const freeTimeIconMap = {
  BookOpen,
  Headphones,
  Gamepad2,
  Code2,
  Rocket,
  Dumbbell,
};

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 border-t border-white/50 bg-transparent dark:border-zinc-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader badge={data.badge} title={data.heading} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Narrative */}
          <motion.div
            {...slideIn("left", 0.1)}
            className="flex flex-col gap-6 text-base text-zinc-600 sm:text-lg lg:col-span-7 dark:text-zinc-400"
          >
            {data.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
              {data.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary-600 dark:text-primary-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* When I'm Free / Outside of Work */}
            {data.freeTime && (
              <div className="mt-2 rounded-2xl border border-zinc-200/90 bg-white/70 p-5 shadow-xs backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{data.freeTime.title}</span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-2.5">
                  {data.freeTime.activities.map((act, actIdx) => {
                    const ActIcon = freeTimeIconMap[act.iconName] || BookOpen;
                    return (
                      <span
                        key={actIdx}
                        className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-xs transition-all hover:border-primary-500/50 hover:text-primary-600 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300 dark:hover:border-primary-400/50 dark:hover:text-primary-300"
                      >
                        <ActIcon className="h-3.5 w-3.5 text-primary-600 dark:text-primary-300" />
                        <span>{act.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Spoken Languages */}
            {data.languages && (
              <div className="mt-1 rounded-2xl border border-zinc-200/90 bg-white/70 p-5 shadow-xs backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-300">
                  <Languages className="h-3.5 w-3.5" />
                  <span>{data.languages.title}</span>
                </div>
                <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {data.languages.items.map((lang, langIdx) => (
                    <div
                      key={langIdx}
                      className="rounded-xl border border-zinc-200/90 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950/80"
                    >
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="font-semibold text-zinc-900 dark:text-white">
                          {lang.name}
                        </span>
                        <span className="font-mono font-bold text-primary-600 dark:text-primary-400">
                          {lang.score}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        {lang.level}
                      </div>
                      {/* Rating Progress Bar */}
                      <div className="mt-2.5 h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden dark:bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-500"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Highlights & Pillars */}
          <motion.div
            {...slideIn("right", 0.2)}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {data.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.iconName] || Zap;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm transition-all hover:border-primary-500/40 hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/30 dark:hover:border-primary-400/40 dark:hover:bg-zinc-900/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-400/10 dark:text-primary-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 text-base dark:text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
