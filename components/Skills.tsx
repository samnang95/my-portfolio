"use client";

import { SkillCategory } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillCard from "@/components/ui/SkillCard";

interface SkillsProps {
  badge: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
}

export default function Skills({ badge, heading, description, categories }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-24 border-t border-white/50 bg-transparent dark:border-zinc-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge={badge}
          title={heading}
          description={description}
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category, catIdx) => (
            <SkillCard key={category.title} category={category} index={catIdx} />
          ))}
        </div>
      </div>
    </section>
  );
}
