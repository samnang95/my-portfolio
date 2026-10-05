"use client";

import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { AboutData } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { slideIn } from "@/lib/motion";

const iconMap = {
  Zap,
  ShieldCheck,
  Sparkles,
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
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights & Pillars */}
          <motion.div
            {...slideIn("right", 0.2)}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {data.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.iconName] || Zap;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm transition-all hover:border-lime-500/40 hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/30 dark:hover:border-lime-400/40 dark:hover:bg-zinc-900/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500/10 text-lime-600 transition-colors group-hover:bg-lime-400 group-hover:text-black dark:bg-lime-400/10 dark:text-lime-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 text-base dark:text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
