"use client";

import { motion } from "motion/react";
import { slideIn } from "@/lib/motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      {...slideIn(isCenter ? "up" : "left")}
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-300">
        {badge}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
