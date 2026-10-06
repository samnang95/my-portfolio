import { PortfolioContent } from "@/types/portfolio";

export const kmContent: PortfolioContent = {
  siteConfig: {
    brand: {
      name: "Samnang",
      tag: "Flutter",
      subtitle: "អ្នកអភិវឌ្ឍន៍ Flutter • កម្មវិធីទូរស័ព្ទ និងប្រព័ន្ធ Full-Stack",
    },
    navLinks: [
      { name: "អំពីខ្ញុំ", href: "#about" },
      { name: "ជំនាញ", href: "#skills" },
      { name: "គម្រោង", href: "#projects" },
      { name: "បទពិសោធន៍", href: "#experience" },
      { name: "ទំនាក់ទំនង", href: "#contact" },
    ],
    ctaButton: "ជជែកពិភាក្សា",
  },
  hero: {
    badge: "បើកទទួលគម្រោង និងឱកាសការងារថ្មីៗ",
    overline: "Developer Portfolio",
    name: "សំអាង (Samnang)",
    role: "អ្នកអភិវឌ្ឍន៍ Flutter",
    description:
      "បង្កើតកម្មវិធីទូរស័ព្ទប្រកបដោយភាពរលូន ល្បឿនលឿន និងប្រព័ន្ធ backend ដែលមានស្ថិរភាពខ្ពស់។ ផ្តោតលើ clean architecture, ល្បឿន 120fps និងបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អឥតខ្ចោះ។",
    primaryCta: {
      label: "មើលគម្រោងនានា",
      href: "#projects",
    },
    secondaryCta: {
      label: "ទាក់ទងមកខ្ញុំ",
      href: "#contact",
    },
    cvCta: {
      label: "ទាញយក CV",
      href: "/cv/samnang-rin-cv.pdf",
    },
    highlights: [
      {
        iconName: "Smartphone",
        label: "គោល",
        title: "Flutter & Dart",
        subtitle: "iOS និង Android",
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
        label: "គុណភាព",
        title: "ប្រសិទ្ធភាពខ្ពស់",
        subtitle: "រលូនកម្រិត 60/120 FPS",
      },
    ],
  },
  about: {
    badge: "អំពីខ្ញុំ",
    heading: "ប្តេជ្ញាចិត្តក្នុងការបង្កើតកម្មវិធីទូរស័ព្ទដែលផ្តល់នូវបទពិសោធន៍រលូន និងងាយស្រួលប្រើប្រាស់។",
    paragraphs: [
      "ខ្ញុំឈ្មោះ សំអាង (Samnang) ជាអ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទដែលមានជំនាញច្បាស់លាស់លើ Flutter និង Dart។ ខ្ញុំផ្លាស់ប្តូរគំនិតអាជីវកម្មស្មុគស្មាញឱ្យទៅជាកម្មវិធីដែលមានភាពទាក់ទាញ ល្បឿនលឿន និងដំណើរការយ៉ាងរលូន។",
      "បទពិសោធន៍របស់ខ្ញុំចាប់ផ្តើមពី native mobile រហូតដល់ស្ទាត់ជំនាញលើ cross-platform architecture។ ខ្ញុំយកចិត្តទុកដាក់ខ្ពស់លើ clean state management, offline-first caching និងការតភ្ជាប់ API ដែលមានសុវត្ថិភាព និងភាពជឿជាក់ខ្ពស់។",
      "ក្រៅពីផ្នែក mobile ខ្ញុំក៏អាចរៀបចំ និងតភ្ជាប់ REST APIs ជាមួយ Node.js និង SQL databases ធានាដំណើរការពីប្រព័ន្ធ database រហូតដល់ផ្ទៃអេក្រង់ទូរស័ព្ទ។",
    ],
    keyPoints: [
      "បានដាក់ឱ្យដំណើរការកម្មវិធីផ្លូវការ",
      "រចនាសម្ព័ន្ធ Clean Architecture",
      "State Management ទំនើប",
    ],
    pillars: [
      {
        iconName: "Zap",
        title: "ល្បឿន និងភាពរលូន",
        description:
          "ផ្តោតលើចលនា 60-120fps កាត់បន្ថយ frame drops និងធានាភាពឆ្លើយតបរហ័សលើឧបករណ៍ Android និង iOS គ្រប់ប្រភេទ។",
      },
      {
        iconName: "ShieldCheck",
        title: "រចនាសម្ព័ន្ធរឹងមាំ",
        description:
          "ជំនាញច្បាស់លាស់លើ BLoC, Riverpod, clean architecture, repository patterns និងការធ្វើ automated testing។",
      },
      {
        iconName: "Sparkles",
        title: "ការគិតបែប Full-Stack",
        description:
          "សមត្ថភាពតភ្ជាប់រវាង mobile app ជាមួយ Node.js REST APIs, database schemas និង cloud services ប្រកបដោយប្រសិទ្ធភាព។",
      },
    ],
  },
  skills: {
    badge: "ជំនាញបច្ចេកទេស",
    heading: "បច្ចេកវិទ្យា និងឧបករណ៍ដែលខ្ញុំប្រើប្រាស់",
    description:
      "ឧបករណ៍ឯកទេសសម្រាប់ការកសាងកម្មវិធីទូរស័ព្ទចល័តប្រកបដោយទំនុកចិត្ត និងហេដ្ឋារចនាសម្ព័ន្ធ backend គាំទ្រពីក្រោយ។",
    categories: [
      {
        title: "ការអភិវឌ្ឍកម្មវិធីទូរស័ព្ទ (Mobile)",
        iconName: "Smartphone",
        description: "កសាងកម្មវិធី cross-platform សម្រាប់ផលិតកម្មជាមួយចលនារលូន និងល្បឿន native។",
        skills: [
          { name: "Flutter", tag: "ចម្បង" },
          { name: "Dart", tag: "ជំនាញ" },
          { name: "BLoC Pattern", tag: "ស្នូល" },
          { name: "Riverpod", tag: "ស្នូល" },
          { name: "Provider", tag: "State" },
          { name: "Clean Architecture", tag: "រចនាសម្ព័ន្ធ" },
          { name: "Android SDK / Kotlin", tag: "Native" },
          { name: "iOS Xcode / Swift", tag: "Native" },
          { name: "Offline Caching (Hive/SQLite)", tag: "ទិន្នន័យ" },
          { name: "Push Notifications (FCM)", tag: "Cloud" },
        ],
      },
      {
        title: "Backend និងប្រព័ន្ធទិន្នន័យ",
        iconName: "Server",
        description: "រៀបចំ RESTful APIs, ប្រព័ន្ធ auth និង database schemas ប្រកបដោយសុវត្ថិភាព។",
        skills: [
          { name: "Node.js", tag: "Runtime" },
          { name: "Express.js", tag: "Framework" },
          { name: "RESTful APIs", tag: "Networking" },
          { name: "PostgreSQL", tag: "Database" },
          { name: "Firebase / Firestore", tag: "BaaS" },
          { name: "Supabase", tag: "BaaS" },
          { name: "JWT Auth & Security", tag: "សុវត្ថិភាព" },
          { name: "WebSockets", tag: "Realtime" },
        ],
      },
      {
        title: "ឧបករណ៍ និង DevOps",
        iconName: "Wrench",
        description: "ឧបករណ៍ទំនើបសម្រាប់ការអភិវឌ្ឍ តេស្ត វិភាគ និងដាក់ឱ្យដំណើរការ។",
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
    badge: "ស្នាដៃសំខាន់ៗ",
    heading: "គម្រោង Mobile & Full-Stack ថ្មីៗ",
    description:
      "គម្រោងនីមួយៗត្រូវបានបង្កើតឡើងដោយផ្អែកលើ clean architecture និងការគ្រប់គ្រង state យ៉ាងហ្មត់ចត់។",
    exploreGithub: "មើលទាំងអស់នៅលើ GitHub",
    items: [
      {
        id: "managestate-platform",
        title: "ManageState Full-Stack Mobile Platform",
        category: "Mobile & Backend System",
        description:
          "កម្មវិធីទូរស័ព្ទបែប enterprise state architecture ភ្ជាប់ជាមួយ Node.js REST API។ មានប្រព័ន្ធ offline SQLite sync, JWT authentication និង clean repository pattern។",
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
          "កម្មវិធីតាមដានទ្រព្យសកម្ម និងរូបិយប័ណ្ណឌីជីថលតាមពេលវេលាជាក់ស្តែង (WebSocket) ជាមួយតារាង candlestick អន្តរកម្ម និងប្រព័ន្ធ encrypted storage។",
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
          "កម្មវិធីតាមដានការដឹកជញ្ជូនសម្រាប់ iOS និង Android។ រួមបញ្ចូល background geolocation streaming, turn-by-turn map polylines និង real-time order status websockets។",
        tags: ["Flutter", "Google Maps SDK", "Firebase FCM", "REST API", "Stateful UI"],
        highlights: ["Background Tracking", "Live Routing", "FCM Notifications"],
        githubUrl: "https://github.com/samnang95",
        featured: false,
      },
    ],
  },
  experience: {
    badge: "ប្រវត្តិការងារ",
    heading: "បទពិសោធន៍វិជ្ជាជីវៈ",
    description:
      "កំណត់ត្រានៃការដឹកនាំរចនាសម្ព័ន្ធ mobile ប្រកបដោយស្ថិរភាព និងការអភិវឌ្ឍប្រព័ន្ធដែលអាចពង្រីកបាន។",
    items: [
      {
        id: "exp-1",
        role: "Lead Mobile Developer (Flutter)",
        company: "Mobile & Tech Solutions",
        period: "២០២៤ — បច្ចុប្បន្ន",
        location: "រាជធានីភ្នំពេញ កម្ពុជា",
        description:
          "ដឹកនាំការអភិវឌ្ឍកម្មវិធី cross-platform ជាមួយ Flutter កំណត់ស្តង់ដារ architecture និងគ្រប់គ្រងការដាក់ឱ្យប្រើប្រាស់លើ App Store និង Play Store។",
        achievements: [
          "រៀបចំ architecture enterprise state management ដោយប្រើ BLoC និង Riverpod ប្រកបដោយភាពច្បាស់លាស់។",
          "បង្កើនប្រសិទ្ធភាព rendering pipeline ធានាដំណើរការ 60/120fps យ៉ាងរលូនលើទូរស័ព្ទគ្រប់កម្រិត។",
          "រៀបចំ offline-first local caching ជាមួយ SQLite និង Hive កាត់បន្ថយ network payload ដល់ទៅ ៤០%។",
        ],
        tech: ["Flutter", "Dart", "BLoC", "Riverpod", "Clean Architecture", "REST APIs"],
      },
      {
        id: "exp-2",
        role: "Mobile Application Developer",
        company: "Digital Innovation Lab",
        period: "២០២៣ — ២០២៤",
        location: "រាជធានីភ្នំពេញ កម្ពុជា",
        description:
          "អភិវឌ្ឍ តេស្ត និងដាក់ឱ្យប្រើប្រាស់កម្មវិធីទូរស័ព្ទ cross-platform សម្រាប់អតិថិជនជាច្រើនក្នុងវិស័យដឹកជញ្ជូន និង e-commerce។",
        achievements: [
          "តភ្ជាប់ប្រព័ន្ធទំនាក់ទំនង WebSocket ពេលវេលាជាក់ស្តែង និង Firebase Cloud Messaging សម្រាប់ការជូនដំណឹងភ្លាមៗ។",
          "សហការយ៉ាងជិតស្និទ្ធជាមួយក្រុម UI/UX ដើម្បីបំប្លែង Figma design tokens ទៅជា reusable Flutter widgets។",
          "រក្សាបានកម្រិត 99.9% crash-free sessions លើគ្រប់កំណែផលិតកម្ម។",
        ],
        tech: ["Flutter", "Node.js", "Firebase", "WebSockets", "Git", "Figma"],
      },
      {
        id: "exp-3",
        role: "Full-Stack & Mobile Engineer",
        company: "Software Systems Group",
        period: "២០២២ — ២០២៣",
        location: "រាជធានីភ្នំពេញ កម្ពុជា",
        description:
          "អភិវឌ្ឍ backend REST APIs ដោយប្រើ Node.js និងតភ្ជាប់ជាមួយផ្ទាំងបញ្ជាទូរស័ព្ទ និងគេហទំព័រ។",
        achievements: [
          "រចនា PostgreSQL relational schemas ធានាល្បឿន API response ក្រោម 50ms។",
          "អនុវត្តប្រព័ន្ធផ្ទៀងផ្ទាត់ JWT ដែលមានសុវត្ថិភាពខ្ពស់ជាមួយ token refresh mechanisms។",
          "សរសេរ unit tests និង integration tests ធានាគុណភាពកូដមុនពេលចេញផ្សាយ។",
        ],
        tech: ["Node.js", "Express", "PostgreSQL", "Flutter", "Docker", "Postman"],
      },
    ],
  },
  contact: {
    badge: "ទំនាក់ទំនង",
    heading: "តោះចាប់ផ្តើមសហការកសាងអ្វីដែលអស្ចារ្យជាមួយគ្នា។",
    description:
      "តើលោកអ្នកមានគម្រោងកម្មវិធីទូរស័ព្ទថ្មី ត្រូវការប្រឹក្សា architecture ឬស្វែងរកអ្នកអភិវឌ្ឍន៍ Flutter មែនទេ? សូមទាក់ទងមកខ្ញុំឥឡូវនេះ។",
    infoItems: [
      {
        label: "អ៊ីមែល",
        value: "contact@samnang.dev",
        href: "mailto:contact@samnang.dev",
        iconName: "Mail",
      },
      {
        label: "ទីតាំង",
        value: "រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា (UTC+7)",
        iconName: "MapPin",
      },
      {
        label: "រយៈពេលឆ្លើយតប",
        value: "ជាទូទៅក្នុងរង្វង់ ២៤ ម៉ោង",
        iconName: "Clock",
      },
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com/samnang95" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
    form: {
      nameLabel: "ឈ្មោះរបស់អ្នក",
      namePlaceholder: "ឧទាហរណ៍៖ សុខ ចិន្តា",
      emailLabel: "អាសយដ្ឋានអ៊ីមែល",
      emailPlaceholder: "ឧទាហរណ៍៖ sok@example.com",
      subjectLabel: "ប្រភេទគម្រោង / ប្រធានបទ",
      subjectPlaceholder: "ឧទាហរណ៍៖ កម្មវិធី Flutter ថ្មី ឬការងារកុងត្រា",
      messageLabel: "សារ",
      messagePlaceholder: "សូមរៀបរាប់អំពីគម្រោង កាលវិភាគ ឬតម្រូវការរបស់អ្នក...",
      submitButton: "ផ្ញើសារ",
      successTitle: "ទទួលបានសារជោគជ័យ!",
      successDesc: "សូមអរគុណសម្រាប់ការទាក់ទងមកកាន់ខ្ញុំ។ ខ្ញុំនឹងឆ្លើយតបទៅកាន់លោកអ្នកវិញក្នុងពេលឆាប់ៗ។",
      anotherButton: "ផ្ញើសារមួយទៀត",
    },
  },
  footer: {
    allRightsReserved: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    styledWith: "រៀបចំរចនាដោយ",
    backToTop: "ត្រឡប់ទៅលើវិញ",
  },
};
