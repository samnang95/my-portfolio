export type Locale = "en" | "km";

export interface NavLink {
  name: string;
  href: string;
}

export interface HeroHighlight {
  label: string;
  title: string;
  subtitle: string;
  iconName: "Smartphone" | "Layers" | "Server" | "Code2";
}

export interface HeroData {
  badge: string;
  overline: string;
  name: string;
  role: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  highlights: HeroHighlight[];
}

export interface AboutPillar {
  title: string;
  description: string;
  iconName: "Zap" | "ShieldCheck" | "Sparkles";
}

export interface AboutData {
  badge: string;
  heading: string;
  paragraphs: string[];
  keyPoints: string[];
  pillars: AboutPillar[];
}

export interface SkillItem {
  name: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: "Smartphone" | "Server" | "Wrench";
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  iconName: "Mail" | "MapPin" | "Clock";
}

export interface SocialLink {
  platform: "GitHub" | "LinkedIn";
  url: string;
}

export interface ContactFormLabels {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  successTitle: string;
  successDesc: string;
  anotherButton: string;
}

export interface ContactData {
  badge: string;
  heading: string;
  description: string;
  infoItems: ContactInfoItem[];
  socials: SocialLink[];
  form: ContactFormLabels;
}

export interface SiteConfig {
  brand: {
    name: string;
    tag: string;
    subtitle: string;
  };
  navLinks: NavLink[];
  ctaButton: string;
}

export interface PortfolioContent {
  siteConfig: SiteConfig;
  hero: HeroData;
  about: AboutData;
  skills: {
    badge: string;
    heading: string;
    description: string;
    categories: SkillCategory[];
  };
  projects: {
    badge: string;
    heading: string;
    description: string;
    exploreGithub: string;
    items: Project[];
  };
  experience: {
    badge: string;
    heading: string;
    description: string;
    items: ExperienceItem[];
  };
  contact: ContactData;
  footer: {
    allRightsReserved: string;
    styledWith: string;
    backToTop: string;
  };
}
