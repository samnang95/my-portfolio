"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { slideIn } from "@/lib/motion";

interface ProjectsProps {
  badge: string;
  heading: string;
  description: string;
  exploreGithub: string;
  projects: Project[];
}

export default function Projects({
  badge,
  heading,
  description,
  exploreGithub,
  projects,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-24 border-t border-white/50 bg-transparent dark:border-zinc-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header with external link */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader badge={badge} title={heading} description={description} />

          <motion.a
            {...slideIn("right")}
            href="https://github.com/samnang95"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-lime-600 dark:text-zinc-300 dark:hover:text-lime-400 shrink-0"
          >
            <span>{exploreGithub}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
