"use client";

import { motion } from "motion/react";
import { Smartphone, Sparkles, ArrowUpRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import { slideIn, gridDirection } from "@/lib/motion";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      {...slideIn(gridDirection(index), (index % 3) * 0.12)}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white/80 p-7 shadow-sm backdrop-blur-sm transition-[border-color,background-color,box-shadow] hover:border-primary-500/50 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-primary-400/50 dark:hover:bg-zinc-900/60"
    >
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-[11px] font-semibold text-primary-700 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
            <Smartphone className="h-3 w-3" />
            <span>{project.category}</span>
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              <Sparkles className="h-3 w-3 text-primary-600 dark:text-primary-300" />
              Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="mt-5 text-xl font-bold text-zinc-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
            >
              ✓ {h}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Tech Tags & Actions */}
      <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/70">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 transition-colors hover:text-primary-600 dark:text-zinc-300 dark:hover:text-primary-300"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Repository</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-all group-hover:border-primary-500/50 group-hover:text-primary-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:group-hover:border-primary-400/50 dark:group-hover:text-primary-300"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
