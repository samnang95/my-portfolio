import { PortfolioContent } from "@/types/portfolio";

export const kmContent: PortfolioContent = {
  siteConfig: {
    brand: {
      name: "Samnang",
      tag: "Dev",
      subtitle: "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ • LTNG Business",
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
    greeting: "សួស្តី ខ្ញុំបាទឈ្មោះ",
    name: "រិន សំណាង",
    role: "",
    description: "ខ្ញុំបាទឈ្មោះ រិន សំណាង (Rin Samnang) មានអាយុ ២៣ ឆ្នាំ និងបច្ចុប្បន្ននៅលីវ។ ខ្ញុំបម្រើការងារជាអ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ (Mobile Developer) នៅក្រុមហ៊ុន LTNG Business។ ខ្ញុំបានបញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកវិស្វកម្មបច្ចេកវិទ្យាព័ត៌មានវិទ្យា (ITE) ពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP) ក្នុងខែកក្កដា ឆ្នាំ២០២៥។",
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
        iconName: "Briefcase",
        label: "តួនាទីបច្ចុប្បន្ន",
        title: "Mobile Developer",
        subtitle: "LTNG Business",
      },
      {
        iconName: "Smartphone",
        label: "ជំនាញស្នូល",
        title: "Flutter & Dart",
        subtitle: "iOS និង Android",
      },
      {
        iconName: "GraduationCap",
        label: "ការអប់រំ",
        title: "RUPP (ITE)",
        subtitle: "បញ្ចប់ការសិក្សា កក្កដា ២០២៥",
      },
      {
        iconName: "Clock",
        label: "បទពិសោធន៍",
        title: "ធ្វើការបាន ១ ឆ្នាំ",
        subtitle: "នៅ LTNG Business",
      },
    ],
  },
  about: {
    badge: "ជីវប្រវត្តិផ្ទាល់ខ្លួន",
    heading: "ប្តេជ្ញាចិត្តក្នុងការបង្កើតកម្មវិធីទូរស័ព្ទដែលផ្តល់នូវបទពិសោធន៍រលូន និងងាយស្រួលប្រើប្រាស់។",
    paragraphs: [
      "ខ្ញុំបាទឈ្មោះ រិន សំណាង (Rin Samnang) អាយុ ២៣ ឆ្នាំ ជាអ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ (Mobile Developer) នៅក្រុមហ៊ុន LTNG Business និងបានបញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកវិស្វកម្មបច្ចេកវិទ្យាព័ត៌មានវិទ្យា (ITE) ពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP) ក្នុងឆ្នាំ២០២៥។",
      "ដោយផ្តោតលើប្រព័ន្ធ Flutter ecosystem ខ្ញុំផ្លាស់ប្តូរតម្រូវការអាជីវកម្មស្មុគស្មាញឱ្យក្លាយជាកម្មវិធីទូរស័ព្ទដែលមានល្បឿនលឿន រលូន ដំណើរការខ្ពស់ ដោយផ្អែកលើ clean architecture, state management ទំនើប និងការរចនាផ្ចិតផ្ចង់យ៉ាងស្រស់ស្អាត។",
      "នៅពេលទំនេរពីការងារ ខ្ញុំចូលចិត្តហាត់ប្រាណនៅផ្ទះ (Gym) អានសៀវភៅ ស្តាប់តន្ត្រី លេងហ្គេមលើទូរស័ព្ទ ស្រាវជ្រាវភាសាសរសេរកូដថ្មីៗ និងបន្តរៀនសូត្រតាមរយៈការកសាងគម្រោងជាក់ស្តែង។",
    ],
    keyPoints: [
      "ដាក់ឱ្យដំណើរការលើ App Store & Play Store",
      "រចនាសម្ព័ន្ធ Clean Architecture & Scalable State",
      "ការតភ្ជាប់ Offline-First & REST APIs",
      "ចលនារលូន 120fps & UI ផ្ចិតផ្ចង់",
    ],
    freeTime: {
      title: "ពេលទំនេររបស់ខ្ញុំ (When I'm Free)",
      activities: [
        { label: "ហាត់ប្រាណនៅផ្ទះ (Home Gym)", iconName: "Dumbbell" },
        { label: "អានសៀវភៅ", iconName: "BookOpen" },
        { label: "ស្តាប់តន្ត្រី", iconName: "Headphones" },
        { label: "លេងហ្គេមលើទូរស័ព្ទ", iconName: "Gamepad2" },
        { label: "ស្រាវជ្រាវភាសាកូដថ្មីៗ", iconName: "Code2" },
        { label: "រៀន និងបង្កើតគម្រោងថ្មីៗ", iconName: "Rocket" },
      ],
    },
    languages: {
      title: "ភាសាទំនាក់ទំនង (Spoken Languages)",
      items: [
        {
          name: "ភាសាខ្មែរ (Khmer)",
          level: "ភាសាកំណើត (Native)",
          score: "10/10",
          percentage: 100,
        },
        {
          name: "ភាសាអង់គ្លេស (English)",
          level: "កម្រិតទំនាក់ទំនងការងារ (Professional)",
          score: "6/10",
          percentage: 60,
        },
      ],
    },
    pillars: [
      {
        iconName: "Zap",
        title: "ល្បឿន និងភាពរលូន (60/120fps)",
        description: "បង្កើត UI/UX ប្រកបដោយភាពរលូន ល្បឿន 60/120fps កាត់បន្ថយ frame drops និងធានាភាពឆ្លើយតបរហ័សលើឧបករណ៍ iOS និង Android គ្រប់ទំហំ។",
      },
      {
        iconName: "ShieldCheck",
        title: "រចនាសម្ព័ន្ធ Clean Architecture",
        description: "រៀបចំកូដតាមបែប feature-first modularity ជាមួយ clean architecture និង state management ទំនើប (BLoC & Riverpod) ងាយស្រួលពង្រីក និងថែទាំ។",
      },
      {
        iconName: "Sparkles",
        title: "ការគិតបែប Full-Stack",
        description: "តភ្ជាប់ mobile client យ៉ាងរលូនជាមួយ Node.js REST APIs, ប្រព័ន្ធ authentication, PostgreSQL និង offline-first local caching។",
      },
    ],
  },
  skills: {
    badge: "ជំនាញបច្ចេកទេស",
    heading: "បច្ចេកវិទ្យា និងឧបករណ៍ដែលខ្ញុំប្រើប្រាស់",
    description: "ឧបករណ៍ឯកទេសសម្រាប់ការកសាងកម្មវិធីទូរស័ព្ទចល័តប្រកបដោយទំនុកចិត្ត និងហេដ្ឋារចនាសម្ព័ន្ធ backend គាំទ្រពីក្រោយ។",
    categories: [
      {
        title: "កម្មវិធីទូរស័ព្ទ (App)",
        iconName: "Smartphone",
        description: "ការអភិវឌ្ឍកម្មវិធី Cross-Platform និង Native លើប្រព័ន្ធ iOS និង Android។",
        skills: [
          { name: "Flutter & Dart", tag: "Cross-Platform" },
          { name: "SwiftUI", tag: "Native iOS" },
          { name: "Kotlin & Jetpack Compose", tag: "Native Android" },
        ],
      },
      {
        title: "ការអភិវឌ្ឍវេបសាយ (Web)",
        iconName: "Globe",
        description: "ការបង្កើត Frontend ទំនើប ភាសាកូដ និង Reactive UI Frameworks។",
        skills: [
          { name: "JavaScript & TypeScript", tag: "Language" },
          { name: "Vue.js", tag: "Framework" },
          { name: "React.js", tag: "Framework" },
        ],
      },
      {
        title: "Backend & Database",
        iconName: "Server",
        description: "Server-side runtimes, ប្រព័ន្ធ APIs និងប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ។",
        skills: [
          { name: "Node.js", tag: "Runtime" },
          { name: "Express.js", tag: "Framework" },
          { name: "Laravel", tag: "PHP Framework" },
          { name: "MongoDB", tag: "Database" },
        ],
      },
      {
        title: "DevOps & ឧបករណ៍ប្រើប្រាស់",
        iconName: "Wrench",
        description: "ឧបករណ៍គ្រប់គ្រងកូដ កុងតឺន័រ IDEs និងប្រព័ន្ធ deployment ទំនើប។",
        skills: [
          { name: "Git & GitHub", tag: "VCS" },
          { name: "Docker", tag: "Container" },
          { name: "Postman", tag: "API Testing" },
          { name: "VS Code", tag: "IDE" },
          { name: "Figma", tag: "UI/UX" },
          { name: "Antigravity", tag: "AI IDE" },
          { name: "Android Studio", tag: "IDE" },
          { name: "CI / CD", tag: "DevOps" },
        ],
      },
    ],
  },
  projects: {
    badge: "ស្នាដៃសំខាន់ៗ",
    heading: "គម្រោង Mobile & Full-Stack ថ្មីៗ",
    description: "គម្រោងនីមួយៗត្រូវបានបង្កើតឡើងដោយផ្អែកលើ clean architecture និងការគ្រប់គ្រង state យ៉ាងហ្មត់ចត់។",
    exploreGithub: "មើលទាំងអស់នៅលើ GitHub",
    items: [
      {
        id: "food-ordering-ecosystem",
        title: "Food Ordering & Delivery Ecosystem",
        category: "Full-Stack & Mobile Ecosystem",
        description: "ប្រព័ន្ធបញ្ជាទិញ និងដឹកជញ្ជូនម្ហូបអាហារពេញលេញ (Full-Stack) ដែលរួមមានកម្មវិធីទូរស័ព្ទ Flutter សម្រាប់អតិថិជន វេបសាយកុម្ម៉ង់ React.js (Tailwind, Vite) ផ្ទាំងគ្រប់គ្រង Admin ដោយ Vue.js (TypeScript, Tailwind, Vite) និង Backend API ដោយ Node.js, Express និង MongoDB។",
        tags: ["Flutter", "Dart", "React.js", "Vue.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        highlights: ["Flutter Mobile App", "React Web Client", "Vue Admin Dashboard", "Node & MongoDB API"],
        githubUrl: "https://github.com/samnang95/food-order-full-stack/tree/dev",
        featured: true,
      },
      {
        id: "blood-donation-app",
        title: "Blood Donation Mobile App",
        category: "Healthcare Mobile App",
        description: "កម្មវិធីទូរស័ព្ទបរិច្ចាគឈាមសហគមន៍បង្កើតឡើងដោយ Flutter & Dart។ ជួយស្វែងរកអ្នកបរិច្ចាគឈាមបន្ទាន់យ៉ាងរហ័ស ផ្សាយដំណឹងតម្រូវការឈាមតាមប្រភេទ តាមដានលក្ខខណ្ឌសុខភាព និងកត់ត្រាប្រវត្តិបរិច្ចាគ។",
        tags: ["Flutter", "Dart", "Clean Architecture", "State Management", "Mobile UI"],
        highlights: ["ស្វែងរកអ្នកបរិច្ចាគ", "ដំណឹងឈាមបន្ទាន់", "Cross-Platform", "UI ងាយស្រួលប្រើ"],
        githubUrl: "https://github.com/samnang95/blood_donation_mobile_app",
        featured: true,
      },
      {
        id: "inventory-app",
        title: "Inventory Management Mobile App",
        category: "Business & Inventory App",
        description:
          "កម្មវិធីទូរស័ព្ទគ្រប់គ្រងស្តុក និងទំនិញអាជីវកម្មបង្កើតឡើងដោយ Flutter & Dart។ ជួយតាមដានចំនួនស្តុកជាក់ស្តែង ការកត់ត្រាទំនិញ ប្រព័ន្ធស្កេនបាកូដ ការជូនដំណឹងពេលទំនិញជិតអស់ពីស្តុក និងការស្វែងរកទំនិញរហ័ស។",
        tags: ["Flutter", "Dart", "Clean Architecture", "Stock Management", "Mobile UI"],
        highlights: ["Real-Time Stock", "Product Catalog", "Barcode Workflow", "Low-Stock Alerts"],
        githubUrl: "https://github.com/samnang95/InventoryApp",
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
        role: "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ (Mobile Developer - Flutter & Dart)",
        company: "LTNG Business",
        period: "២០២៥ — បច្ចុប្បន្ន (១ ឆ្នាំ)",
        location: "រាជធានីភ្នំពេញ កម្ពុជា",
        description: "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទស្នូល ទទួលបន្ទុកបង្កើត និងពង្រីកកម្មវិធី cross-platform ដោយប្រើ Flutter & Dart។ បានដឹកនាំអភិវឌ្ឍ និងដាក់ឱ្យដំណើរការគម្រោងជាក់ស្តែងចំនួន ៣៖ LTNG ExChange, LiveLok និង Blood Donation។",
        achievements: [
          "LTNG ExChange: អភិវឌ្ឍប្រព័ន្ធកម្មវិធីប្តូរប្រាក់ និងទ្រព្យសកម្ម ដោយបំពាក់មុខងារតាមដានអត្រាប្តូរប្រាក់ភ្លាមៗ ប្រព័ន្ធសុវត្ថិភាពប្រតិបត្តិការ និងផ្ទាំងគ្រប់គ្រងរលូន។",
          "LiveLok: បង្កើតកម្មវិធីទូរស័ព្ទ interactive ពេលវេលាជាក់ស្តែង (real-time) ជាមួយប្រព័ន្ធផ្ញើសាររហ័ស ផ្ទាំងទស្សនា និងការគ្រប់គ្រង state ប្រកបដោយប្រសិទ្ធភាពខ្ពស់។",
          "Blood Donation App: បង្កើតកម្មវិធីទូរស័ព្ទសប្បុរសធម៌បរិច្ចាគឈាម តភ្ជាប់អ្នកត្រូវការឈាមបន្ទាន់ជាមួយអ្នកស្ម័គ្រចិត្តបរិច្ចាគ ព្រមទាំងប្រព័ន្ធជូនដំណឹងរហ័ស។",
          "Clean Architecture & Performance: អនុវត្ត Clean Architecture និង State Management (BLoC / Riverpod) ធានាដំណើរការ 60fps យ៉ាងរលូន និងតភ្ជាប់ REST APIs យ៉ាងរឹងមាំ។",
        ],
        tech: ["Flutter", "Dart", "LTNG ExChange", "LiveLok", "Blood Donation", "BLoC", "Riverpod", "REST APIs"],
      },
    ],
  },
  contact: {
    badge: "ទំនាក់ទំនង",
    heading: "តោះចាប់ផ្តើមសហការកសាងអ្វីដែលអស្ចារ្យជាមួយគ្នា។",
    description: "តើលោកអ្នកមានគម្រោងកម្មវិធីទូរស័ព្ទថ្មី ត្រូវការប្រឹក្សា architecture ឬស្វែងរកអ្នកអភិវឌ្ឍន៍ Flutter មែនទេ? សូមទាក់ទងមកខ្ញុំឥឡូវនេះ។",
    infoItems: [
      {
        label: "អ៊ីមែល",
        value: "rinsamnang50@gmail.com",
        href: "mailto:rinsamnang50@gmail.com",
        iconName: "Mail",
      },
      {
        label: "លេខទូរស័ព្ទ",
        value: "088 699 4350",
        href: "tel:+855886994350",
        iconName: "Phone",
      },
      {
        label: "តេឡេក្រាម",
        value: "@Samnang_Rin",
        href: "https://t.me/Samnang_Rin",
        iconName: "Send",
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
      { platform: "Telegram", url: "https://t.me/Samnang_Rin" },
      { platform: "Instagram", url: "https://www.instagram.com/rinsamnang50/" },
      { platform: "Facebook", url: "https://www.facebook.com/rin.samnang.978025/" },
    ],
    form: {
      nameLabel: "ឈ្មោះពេញ",
      namePlaceholder: "សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក",
      emailLabel: "អាសយដ្ឋានអ៊ីមែល",
      emailPlaceholder: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក",
      subjectLabel: "ប្រធានបទ",
      subjectPlaceholder: "តើអ្នកចង់ពិភាក្សាអំពីអ្វី? (ឧ. កម្មវិធីទូរស័ព្ទ, ការងារសហការ)",
      messageLabel: "សាររបស់អ្នក",
      messagePlaceholder: "សូមសរសេរសាររបស់អ្នកនៅទីនេះ...",
      submitButton: "ផ្ញើសារ",
      successTitle: "ទទួលបានសារជោគជ័យ!",
      successDesc: "សូមអរគុណសម្រាប់ការទាក់ទងមកកាន់ខ្ញុំ។ ខ្ញុំនឹងឆ្លើយតបទៅកាន់លោកអ្នកវិញក្នុងពេលឆាប់ៗ។",
      anotherButton: "ផ្ញើសារមួយទៀត",
    },
  },
  footer: {
    allRightsReserved: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    builtWith: "បង្កើតឡើងដោយ",
    backToTop: "ត្រឡប់ទៅលើវិញ",
  },
};
