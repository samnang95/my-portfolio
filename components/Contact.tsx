"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { ContactData } from "@/types/portfolio";
import { slideIn } from "@/lib/motion";

const iconMap = {
  Mail,
  MapPin,
  Clock,
};

function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-white/50 bg-transparent dark:border-zinc-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Contact Info */}
          <motion.div
            {...slideIn("left")}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-300">
                {data.badge}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                {data.heading}
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed dark:text-zinc-400">
                {data.description}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {data.infoItems.map((item) => {
                  const Icon = iconMap[item.iconName] || Mail;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-zinc-800 dark:text-zinc-300"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-primary-600 border border-zinc-200 dark:bg-zinc-900 dark:text-primary-300 dark:border-zinc-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="break-all text-sm font-medium hover:text-primary-600 transition-colors dark:hover:text-primary-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social profiles */}
            <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Find me on</p>
              <div className="mt-4 flex items-center gap-3">
                {data.socials.map((social) => {
                  const isGithub = social.platform === "GitHub";
                  const Icon = isGithub ? GithubIcon : LinkedinIcon;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.platform} profile`}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-primary-500 hover:text-primary-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-primary-400 dark:hover:text-primary-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            {...slideIn("right", 0.15)}
            className="rounded-3xl border border-zinc-200/90 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 lg:col-span-7"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20 text-primary-600 mb-4 dark:bg-primary-400/20 dark:text-primary-300">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {data.form.successTitle}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
                  {data.form.successDesc}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 rounded-full border border-zinc-300 px-5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {data.form.anotherButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {data.form.nameLabel} <span className="text-primary-600 dark:text-primary-300">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={data.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-600 dark:focus:border-primary-400 dark:focus:ring-1 dark:focus:ring-primary-400"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {data.form.emailLabel} <span className="text-primary-600 dark:text-primary-300">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={data.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-600 dark:focus:border-primary-400 dark:focus:ring-1 dark:focus:ring-primary-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    {data.form.subjectLabel}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={data.form.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-600 dark:focus:border-primary-400 dark:focus:ring-1 dark:focus:ring-primary-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    {data.form.messageLabel} <span className="text-primary-600 dark:text-primary-300">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder={data.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-600 dark:focus:border-primary-400 dark:focus:ring-1 dark:focus:ring-primary-400"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-400/20 active:scale-95"
                >
                  <span>{data.form.submitButton}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
