import { PortfolioContent } from "@/types/portfolio";

export const enContent: PortfolioContent = {
  siteConfig: {
    brand: {
      name: "Samnang",
      tag: "Flutter",
      subtitle: "Flutter Developer • Mobile & Full-Stack Systems",
    },
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    ctaButton: "Let's Talk",
  },
  hero: {
    badge: "Available for new projects & roles",
    overline: "Developer Portfolio",
    name: "Samnang",
    role: "Flutter Developer",
    description:
      "Building fluid, native-feel mobile applications and resilient backend systems. Focused on clean architecture, optimal 120fps performance, and delightful user experiences.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    highlights: [
      {
        iconName: "Smartphone",
        label: "Core",
        title: "Flutter & Dart",
        subtitle: "iOS & Android",
      },
      {
        iconName: "Layers",
        label: "State",
        title: "BLoC & Riverpod",
        subtitle: "Clean Architecture",
      },
      {
        iconName: "Server",
        label: "Backend",
        title: "Node.js & APIs",
        subtitle: "REST & PostgreSQL",
      },
      {
        iconName: "Code2",
        label: "Quality",
        title: "High Performance",
        subtitle: "Smooth 60/120 FPS",
      },
    ],
  },
  about: {
    badge: "About Me",
    heading: "Passionate about building mobile apps that feel right at home in your hands.",
    paragraphs: [
      "I'm Samnang, a mobile application developer specializing in the Flutter ecosystem. I turn complex business ideas into intuitive, pixel-perfect, and high-performing applications.",
      "My journey began with native mobile concepts, evolving into deep mastery of Dart and cross-platform architecture. I take pride in crafting clean state management systems, offline-first caching, and resilient API networking layers that never leave users hanging.",
      "Beyond the client side, I design and connect backend APIs with Node.js and SQL databases, ensuring end-to-end reliability from database queries to screen pixels.",
    ],
    keyPoints: [
      "Production Mobile Releases",
      "Clean Architecture Certified",
      "Modern State Management",
    ],
    pillars: [
      {
        iconName: "Zap",
        title: "Performance & Polish",
        description:
          "Passionate about smooth 60-120fps animations, minimal frame drops, and responsive UI across varied Android and iOS devices.",
      },
      {
        iconName: "ShieldCheck",
        title: "Robust Architecture",
        description:
          "Deep expertise in BLoC, Riverpod, clean architecture, repository patterns, and testable code structures.",
      },
      {
        iconName: "Sparkles",
        title: "Full-Stack Mindset",
        description:
          "Skilled in bridging mobile clients with reliable Node.js REST APIs, database schemas, and cloud services.",
      },
    ],
  },
  skills: {
    badge: "Technical Stack",
    heading: "Tools & technologies I work with",
    description:
      "A specialized toolkit centered on crafting reliable mobile applications and the backend infrastructure that powers them.",
    categories: [
      {
        title: "Mobile Development",
        iconName: "Smartphone",
        description: "Building production cross-platform apps with smooth animations and native speed.",
        skills: [
          { name: "Flutter", tag: "Primary" },
          { name: "Dart", tag: "Expert" },
          { name: "BLoC Pattern", tag: "Core" },
          { name: "Riverpod", tag: "Core" },
          { name: "Provider", tag: "State" },
          { name: "Clean Architecture", tag: "Pattern" },
          { name: "Android SDK / Kotlin", tag: "Native" },
          { name: "iOS Xcode / Swift", tag: "Native" },
          { name: "Offline Caching (Hive/SQLite)", tag: "Storage" },
          { name: "Push Notifications (FCM)", tag: "Cloud" },
        ],
      },
      {
        title: "Backend & Systems",
        iconName: "Server",
        description: "Designing reliable RESTful APIs, auth pipelines, and database schemas.",
        skills: [
          { name: "Node.js", tag: "Runtime" },
          { name: "Express.js", tag: "Framework" },
          { name: "RESTful APIs", tag: "Networking" },
          { name: "PostgreSQL", tag: "Database" },
          { name: "Firebase / Firestore", tag: "BaaS" },
          { name: "Supabase", tag: "BaaS" },
          { name: "JWT Auth & Security", tag: "Security" },
          { name: "WebSockets", tag: "Realtime" },
        ],
      },
      {
        title: "Tools, Workflow & DevOps",
        iconName: "Wrench",
        description: "Streamlined modern development, testing, profiling, and deployment tools.",
        skills: [
          { name: "Git & GitHub", tag: "VCS" },
          { name: "Docker", tag: "Container" },
          { name: "Postman", tag: "Testing" },
          { name: "Flutter DevTools", tag: "Profiling" },
          { name: "CI / CD Pipelines", tag: "DevOps" },
          { name: "Android Studio", tag: "IDE" },
          { name: "VS Code", tag: "IDE" },
          { name: "Figma to Code", tag: "Design" },
        ],
      },
    ],
  },
  projects: {
    badge: "Featured Work",
    heading: "Recent Mobile & Full-Stack Projects",
    description:
      "Each project is built with clean architecture, strict state management, and real-world readiness.",
    exploreGithub: "Explore all on GitHub",
    items: [
      {
        id: "managestate-platform",
        title: "ManageState Full-Stack Mobile Platform",
        category: "Mobile & Backend System",
        description:
          "Enterprise state architecture mobile application backed by a Node.js REST API. Features offline SQLite sync, role-based JWT authentication, and clean repository pattern.",
        tags: ["Flutter", "Dart", "BLoC Pattern", "Node.js", "Express", "PostgreSQL"],
        highlights: ["Clean Architecture", "Offline First", "JWT Auth", "120fps UI"],
        githubUrl: "https://github.com/samnang95",
        featured: true,
      },
      {
        id: "finpulse-app",
        title: "FinPulse — Live Crypto & Portfolio Tracker",
        category: "Fintech Mobile App",
        description:
          "High-frequency asset tracking app providing live WebSocket order-book updates, interactive candlestick charts, price alert push notifications, and local encrypted storage.",
        tags: ["Flutter", "Riverpod", "WebSockets", "Interactive Charts", "Hive DB"],
        highlights: ["Live WebSockets", "Custom Animations", "Encrypted Cache"],
        githubUrl: "https://github.com/samnang95",
        featured: false,
      },
      {
        id: "swiftdeliver-app",
        title: "SwiftDeliver — Real-Time Logistics & Courier",
        category: "Geolocation Mobile Solution",
        description:
          "Cross-platform delivery tracking client for iOS and Android. Includes background geolocation streaming, turn-by-turn map polylines, and real-time order status websockets.",
        tags: ["Flutter", "Google Maps SDK", "Firebase FCM", "REST API", "Stateful UI"],
        highlights: ["Background Tracking", "Live Routing", "FCM Notifications"],
        githubUrl: "https://github.com/samnang95",
        featured: false,
      },
    ],
  },
  experience: {
    badge: "Work History",
    heading: "Professional Experience",
    description:
      "A track record of engineering scalable mobile systems and leading clean architectural initiatives.",
    items: [
      {
        id: "exp-1",
        role: "Lead Mobile Developer (Flutter)",
        company: "Mobile & Tech Solutions",
        period: "2024 — Present",
        location: "Phnom Penh, Cambodia",
        description:
          "Spearheading cross-platform mobile engineering with Flutter, setting architecture standards, and overseeing full lifecycle app store deployments.",
        achievements: [
          "Architected enterprise state management using BLoC and Riverpod with clean layered architecture.",
          "Optimized rendering pipeline and widget rebuilding to guarantee steady 60/120fps across budget and flagship devices.",
          "Engineered offline-first local caching layers with SQLite and Hive, slashing API network payload by 40%.",
        ],
        tech: ["Flutter", "Dart", "BLoC", "Riverpod", "Clean Architecture", "REST APIs"],
      },
      {
        id: "exp-2",
        role: "Mobile Application Developer",
        company: "Digital Innovation Lab",
        period: "2023 — 2024",
        location: "Phnom Penh, Cambodia",
        description:
          "Built, tested, and published cross-platform mobile applications for diverse clients ranging from logistics to e-commerce.",
        achievements: [
          "Integrated real-time WebSocket communication and Firebase Cloud Messaging for instant user alerts.",
          "Collaborated closely with UI/UX designers to translate Figma design tokens into custom reusable Flutter widgets.",
          "Maintained 99.9% crash-free sessions across multiple production app releases.",
        ],
        tech: ["Flutter", "Node.js", "Firebase", "WebSockets", "Git", "Figma"],
      },
      {
        id: "exp-3",
        role: "Full-Stack & Mobile Engineer",
        company: "Software Systems Group",
        period: "2022 — 2023",
        location: "Phnom Penh, Cambodia",
        description:
          "Developed backend REST APIs with Node.js and paired them with dynamic, responsive mobile and web interfaces.",
        achievements: [
          "Designed PostgreSQL relational schemas and indexed queries for sub-50ms API response times.",
          "Implemented secure JWT authentication flows with token refresh mechanisms.",
          "Authored unit and integration test coverage across core business services.",
        ],
        tech: ["Node.js", "Express", "PostgreSQL", "Flutter", "Docker", "Postman"],
      },
    ],
  },
  contact: {
    badge: "Get In Touch",
    heading: "Let's build something great together.",
    description:
      "Have a mobile app in mind, need architecture consulting, or looking for a dedicated Flutter engineer? Reach out and let's talk.",
    infoItems: [
      {
        label: "Email",
        value: "contact@samnang.dev",
        href: "mailto:contact@samnang.dev",
        iconName: "Mail",
      },
      {
        label: "Location",
        value: "Phnom Penh, Cambodia (UTC+7)",
        iconName: "MapPin",
      },
      {
        label: "Response Time",
        value: "Usually within 24 hours",
        iconName: "Clock",
      },
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com/samnang95" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Chen",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. alex@example.com",
      subjectLabel: "Project Type / Subject",
      subjectPlaceholder: "e.g. New Flutter Mobile App or Contract Role",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project, timeline, or requirements...",
      submitButton: "Send Message",
      successTitle: "Message Received!",
      successDesc: "Thank you for reaching out. I'll get back to you shortly.",
      anotherButton: "Send another message",
    },
  },
  footer: {
    allRightsReserved: "All rights reserved.",
    styledWith: "Styled with",
    backToTop: "Back to top",
  },
};
