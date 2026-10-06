"use client";

import { motion } from "motion/react";
import { Smartphone, Server, Wrench, Globe, Code2, Layers } from "lucide-react";
import { SkillCategory } from "@/types/portfolio";
import { slideIn } from "@/lib/motion";

const iconMap = {
  Smartphone,
  Server,
  Wrench,
  Globe,
  Code2,
  Layers,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const Icon = iconMap[category.iconName] || Smartphone;

  return (
    <motion.div
      {...slideIn("up", (index % 4) * 0.1)}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-3xl border border-zinc-200/90 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-[border-color,background-color,box-shadow] hover:border-primary-500/40 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-primary-400/40 dark:hover:bg-zinc-900/60"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-zinc-800 dark:text-primary-300">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{category.title}</h3>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
        {category.description}
      </p>

      {/* Skill Pills */}
      <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-zinc-200 dark:border-zinc-800/60">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all hover:border-primary-500/50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-primary-400/50 dark:hover:text-white"
          >
            <span>{skill.name}</span>
            <span className="text-[10px] text-primary-600 font-mono dark:text-primary-400/80">
              {skill.tag}
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
