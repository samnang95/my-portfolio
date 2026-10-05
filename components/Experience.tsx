"use client";

import { ExperienceItem } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";

interface ExperienceProps {
  badge: string;
  heading: string;
  description: string;
  experiences: ExperienceItem[];
}

export default function Experience({
  badge,
  heading,
  description,
  experiences,
}: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-24 border-t border-white/50 bg-transparent dark:border-zinc-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader badge={badge} title={heading} description={description} />

        {/* Timeline */}
        <div className="relative mt-16 pl-6 sm:pl-8 border-l border-zinc-300 dark:border-zinc-800">
          <div className="flex flex-col gap-14">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
