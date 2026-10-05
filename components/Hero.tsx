"use client";

import { motion } from "motion/react";
import { ArrowDown, Sparkles, Smartphone, Layers, Server, Code2 } from "lucide-react";
import { HeroData } from "@/types/portfolio";

const iconMap = {
  Smartphone,
  Layers,
  Server,
  Code2,
};

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 transition-colors duration-300">
      {/* Background ambient glow effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl dark:bg-lime-400/10"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start">
          {/* Availability pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-3.5 py-1.5 text-xs font-semibold text-lime-700 backdrop-blur-sm dark:border-lime-400/20 dark:bg-lime-400/10 dark:text-lime-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75 dark:bg-lime-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500 dark:bg-lime-400" />
            </span>
            <span>{data.badge}</span>
          </motion.div>

          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 sm:text-sm"
          >
            {data.overline}
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white"
          >
            Hi, I&apos;m{" "}
            <span className="text-lime-600 underline decoration-lime-500/40 decoration-wavy decoration-2 underline-offset-8 dark:text-lime-400 dark:decoration-lime-400/40">
              {data.name}
            </span>
            .
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl md:text-2xl font-light leading-relaxed dark:text-zinc-400"
          >
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">{data.role}</span>{" "}
            {data.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={data.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-lime-400/20 transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
            >
              <span>{data.primaryCta.label}</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <a
              href={data.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur-sm transition-all hover:border-zinc-400 hover:bg-zinc-100 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <span>{data.secondaryCta.label}</span>
              <Sparkles className="h-4 w-4 text-lime-500 dark:text-lime-400" />
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 grid w-full grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {data.highlights.map((item) => {
              const Icon = iconMap[item.iconName] || Smartphone;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                >
                  <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400">
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-mono font-medium text-zinc-500 uppercase dark:text-zinc-400">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-2 font-bold text-zinc-900 text-base dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
