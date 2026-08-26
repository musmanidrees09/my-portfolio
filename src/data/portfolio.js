const image = (src, alt) => ({
  src,
  alt,
  width: 1920,
  height: 1080,
});

export const personalInfo = {
  name: "Muhammad Usman",
  title: "Full-Stack Developer",
  tagline: "Full-Stack Developer building Next.js & React web apps, Laravel platforms, MERN stack & Chrome extensions.",
  bio: "I build and ship production web applications, SaaS platforms, and browser extensions using Next.js, React, Laravel, Node.js, MongoDB, and JavaScript — from scalable backend architectures and REST APIs to polished, high-performance product interfaces.",
  location: "Lahore, Punjab, Pakistan",
  email: "musmanidrees08@gmail.com",
  phone: "+92 3096134235",
  availability: "Available for full-time roles & select freelance projects",
  github: "https://github.com/musmanidrees09",
  linkedin: "https://www.linkedin.com/in/muhammad-usman09-idrees/",
  portfolioUrl: "https://m-usman-idrees.vercel.app/",
  resumePdf: "/Muhammad_Usman_Web_Developer_CV.pdf",
};

export const proofMetrics = [
  {
    value: "1.5+",
    suffix: "yrs",
    label: "Production Experience",
    description: "Shipping Next.js, MERN & Laravel web platforms",
  },
  {
    value: "5+",
    suffix: "live",
    label: "Live Web & SaaS Platforms",
    description: "Client & personal production applications running in production",
  },
  {
    value: "8+",
    suffix: "live",
    label: "Browser Extensions Shipped",
    description: "Manifest V3 extensions live on Chrome Web Store",
  },
  {
    value: "1,000+",
    suffix: "/mo",
    label: "Monthly PDF Conversions",
    description: "Handled through high-performance file workflows",
  },
  {
    value: "~40%",
    suffix: "speedup",
    label: "Query Performance Gain",
    description: "Achieved via database indexing & query optimization",
  },
];

export const whatIBuild = [
  {
    id: "saas",
    title: "SaaS & Web Applications",
    tagline: "Scalable Next.js, MERN & Laravel platforms",
    description:
      "End-to-end web applications with robust authentication, role-based workflows, REST APIs, MongoDB/MySQL schemas, and responsive user interfaces.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Laravel", "MySQL", "REST APIs", "Tailwind CSS"],
    example: "Prospetra, PDFToolBox & CV Builder",
  },
  {
    id: "ai-products",
    title: "AI-Powered Products",
    tagline: "Productivity & document intelligence",
    description:
      "Intelligent workflows that integrate LLMs for document interrogation, automated cover letter/proposal generation, and smart research assistance.",
    technologies: ["LLM Workflows", "Chrome MV3", "React", "Next.js", "Prompt Engineering", "JSON Pipelines"],
    example: "ApplyFlow AI & AskFiles AI",
  },
  {
    id: "chrome-extensions",
    title: "Chrome Extensions",
    tagline: "Manifest V3 browser automation",
    description:
      "Production-grade browser products leveraging background service workers, content script DOM manipulation, Chrome storage, and cross-context messaging.",
    technologies: ["Manifest V3", "Service Workers", "Content Scripts", "React", "Chrome APIs"],
    example: "CapturePDF & CompareLens AI",
  },
  {
    id: "document-systems",
    title: "Document Processing Systems",
    tagline: "High-throughput file transformation",
    description:
      "Secure PDF manipulation engines for merging, splitting, converting, and compressing files with SHA-256 encryption, temp storage, and 24h auto-deletion.",
    technologies: ["PHP", "Laravel Services", "Node.js Streams", "SHA-256", "Cron Cleanup"],
    example: "PDFToolBox & SwitchDoc",
  },
];

export const featuredProjects = [
  {
    slug: "prospetra",
    title: "Prospetra",
    subtitle: "Modern High-Converting B2B & Lead Generation Platform",
    category: "Live Platform",
    badge: "Live Project",
    status: "live",
    statusLabel: "Live",
    role: "Full-Stack Developer",
    contribution: "Full-Stack Development · Next.js & React Architecture · Responsive UI Engineering · SEO & Performance Optimization",
    description:
      "A high-converting live B2B platform engineered with modern Next.js and React, featuring dynamic animations, fast page loads, responsive layouts, and seamless user conversion funnels.",
    impact: "Live Production Platform · 95+ Lighthouse Score · Ultra-responsive design",
    image: image(
      "/All Extension and Websites images with there name/Prospetra.webp",
      "Prospetra website interface displaying modern hero section and B2B features"
    ),
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "REST APIs", "Modern UI/UX"],
    liveUrl: "https://prospetra.com/",
    githubUrl: null,
    isPrivate: true,
    caseStudy: {
      overview:
        "Prospetra is a live, modern B2B platform built to empower businesses with high-converting client acquisition, structured lead generation pipelines, and compelling interactive digital experiences.",
      problem:
        "B2B service businesses need web platforms that combine instant loading speeds, crisp typography, clean brand messaging, and responsive touchpoints to maximize conversion rates.",
      myRole: "Full-Stack Developer (End-to-End Implementation)",
      contributions: [
        "Architected modern frontend workflows using Next.js and React with component modularity.",
        "Crafted a bespoke, responsive UI utilizing Tailwind CSS with smooth transitions and micro-interactions.",
        "Optimized asset loading, images, and script delivery to achieve top Lighthouse performance scores.",
        "Integrated interactive call-to-action flows and dynamic inquiry routing.",
      ],
      architectureDiagram: [
        { step: "Client Request", detail: "Edge-cached static pages with Next.js SSR/SSG" },
        { step: "React UI Layer", detail: "Interactive components with responsive layout breakpoints" },
        { step: "Conversion Funnel", detail: "Lead capture forms with real-time validation" },
        { step: "Optimized Delivery", detail: "Compressed WebP assets and minimal bundle payload" },
      ],
      challenges: [
        {
          challenge: "Achieving Sub-Second Load Times with Rich Aesthetics",
          solution:
            "Implemented next/image optimizations, CSS tokenization, and lazy loading for off-screen components to maintain instantaneous initial page paint.",
        },
        {
          challenge: "Cross-Device Layout Precision",
          solution:
            "Engineered flexible grid systems and custom breakpoints ensuring seamless visual continuity across mobile, tablet, and ultra-wide screens.",
        },
      ],
      results: [
        "Successfully launched and running live at prospetra.com.",
        "Exceptional performance, accessibility, and SEO audit scores.",
      ],
    },
  },
  {
    slug: "halvex-group",
    title: "Halvex Group",
    subtitle: "Enterprise Corporate & Industrial Solutions Platform",
    category: "Client Project",
    badge: "Client Project",
    status: "live",
    statusLabel: "Live Client Site",
    role: "Full-Stack Developer (Client Project)",
    contribution: "Client Requirements Translation · Full-Stack Implementation · Responsive System Architecture · Production Deployment",
    description:
      "A full-scale corporate web platform built for Halvex Group, presenting industrial solutions, service portfolios, inquiry channels, and corporate governance with enterprise-grade stability.",
    impact: "Live Enterprise Client Platform · Deployed & Actively Maintained",
    image: image(
      "/All Extension and Websites images with there name/Halvex Group.webp",
      "Halvex Group corporate website interface showcasing industrial capabilities and corporate design"
    ),
    technologies: ["React", "Next.js", "PHP", "Tailwind CSS", "REST APIs", "Responsive Design"],
    liveUrl: "http://halvexgroup.com/",
    githubUrl: null,
    isPrivate: true,
    caseStudy: {
      overview:
        "Halvex Group is an enterprise client web platform developed to represent the company's multi-disciplinary industrial solutions, services, and corporate capabilities to global stakeholders.",
      problem:
        "The client required a professional, robust online presence that effectively communicated complex service offerings while maintaining rapid load times and accessible navigation across all devices.",
      myRole: "Full-Stack Developer (Client Project Delivery)",
      contributions: [
        "Collaborated directly on client requirements to architect intuitive information architecture.",
        "Built modular, responsive UI components tailored to the corporate brand identity.",
        "Engineered contact channels and quotation inquiry workflows.",
        "Conducted cross-browser compatibility testing and deployed to client production hosting.",
      ],
      architectureDiagram: [
        { step: "User Ingestion", detail: "Structured navigation with instant corporate capability catalog" },
        { step: "Frontend Interface", detail: "Accessible, responsive React component system" },
        { step: "Backend / Inquiries", detail: "Validated form handlers routing client leads securely" },
        { step: "Production Server", detail: "Optimized static delivery with reliable uptime" },
      ],
      challenges: [
        {
          challenge: "Translating Complex Industrial Services into Clean UI",
          solution:
            "Created structured categorization cards and visual hierarchy modules that clearly distinguish service divisions without overwhelming visitors.",
        },
        {
          challenge: "Mobile Optimization for Executive Stakeholders",
          solution:
            "Rigorous responsive design audits across viewport widths, ensuring effortless navigation on smartphones and tablets.",
        },
      ],
      results: [
        "Delivered and launched live client website meeting all commercial milestones.",
        "High stakeholder satisfaction with positive feedback on clean navigation and performance.",
      ],
    },
  },
  {
    slug: "pdftoolbox",
    title: "PDFToolBox",
    subtitle: "Production Document Processing SaaS Platform",
    category: "SaaS Application",
    badge: "Production Platform",
    status: "live",
    statusLabel: "Live",
    role: "Full-Stack Developer",
    contribution: "Backend Architecture · Service Layer Design · File Encryption · 24h Auto-Cleanup · UI Implementation",
    description:
      "A full-stack PDF processing SaaS engineered to handle merging, splitting, compression, format conversion, and document protection with zero data retention risk.",
    impact: "1,000+ monthly conversions · 50% code duplication reduction",
    image: image(
      "/All Extension and Websites images with there name/PDFToolBox Website Image.webp",
      "PDFToolBox website interface featuring PDF conversion tools and drag-and-drop workspace"
    ),
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "SHA-256", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://pdf.toolscase.com/",
    githubUrl: null,
    isPrivate: true,
    caseStudy: {
      overview:
        "PDFToolBox is an all-in-one document processing SaaS platform engineered to convert, merge, split, compress, and edit PDF documents without compromising user privacy or server resources.",
      problem:
        "Users frequently struggle with heavy desktop software or insecure web tools that retain uploaded files indefinitely, crash on multi-megabyte files, or provide fragmented conversion tools.",
      myRole: "Full-Stack Developer (Sole Architecture & Implementation)",
      contributions: [
        "Architected full-stack application using Laravel MVC and dedicated Service Layer pattern.",
        "Engineered secure file handling with SHA-256 encryption, isolated temporary directories, and 24-hour cron-based automated deletion.",
        "Implemented memory-efficient streaming for PDF merge, split, and compression tasks.",
        "Refactored repetitive file conversion workflows into reusable service classes, reducing code duplication across operations by 50%.",
        "Designed clean, mobile-responsive drag-and-drop UI with real-time conversion progress indicators.",
      ],
      architectureDiagram: [
        { step: "Client Upload", detail: "Drag-and-drop file upload with mime-type & payload validation" },
        { step: "Laravel API Layer", detail: "Authentication, rate limiting, and request sanitation" },
        { step: "Service Layer Orchestration", detail: "Isolated PDF processor executing conversions and compressions" },
        { step: "Encrypted Temp Storage", detail: "Files stored with SHA-256 hashed paths in isolated disk storage" },
        { step: "Secure Download Stream", detail: "Streamed directly to client with expiring one-time tokens" },
        { step: "Automated Cleanup Queue", detail: "Scheduled background workers purging all temporary data within 24h" },
      ],
      challenges: [
        {
          challenge: "Memory Exhaustion on Large File Operations",
          solution:
            "Implemented chunked streaming and buffer-controlled sub-processes rather than loading entire binary payloads into PHP memory, maintaining stability under concurrent loads.",
        },
        {
          challenge: "Data Privacy & Lingering Storage Leaks",
          solution:
            "Implemented an automated queue-driven cleanup scheduler that removes processed temporary files immediately upon completed download or within a hard 24-hour TTL window.",
        },
        {
          challenge: "Code Duplication Across 15+ PDF Operations",
          solution:
            "Created an abstract BasePdfService providing standardized error handling, input validation, and cleanup hooks, reducing duplicated code by 50%.",
        },
      ],
      results: [
        "1,000+ monthly PDF conversions processed smoothly with zero data leak incidents.",
        "50% reduction in duplicated code across PDF operation handlers.",
        "Zero server downtime during peak concurrent processing workloads.",
      ],
    },
  },
  {
    slug: "cv-builder",
    title: "CV Builder",
    subtitle: "ATS-Friendly Career & Resume Engineering Platform",
    category: "Web Platform",
    badge: "Production Platform",
    status: "live",
    statusLabel: "Live",
    role: "Full-Stack Developer",
    contribution: "Legacy Tooling Upgrade to Vite · Laravel 9 to Laravel 12 Migration · Next.js & React Refactor · Tailwind CSS Overhaul",
    description:
      "A production career platform for building ATS-compliant resumes with real-time dynamic preview, custom templates, and structured JSON-to-PDF export.",
    impact: "Laravel 9 → 12 Migration · Vite Build Upgrade · Complete UI/UX Overhaul",
    image: image(
      "/All Extension and Websites images with there name/CV Builder.webp",
      "CV Builder platform showing resume templates and live interactive editing canvas"
    ),
    technologies: ["Next.js", "React", "Laravel 12", "Vite", "Tailwind CSS", "REST APIs", "MySQL"],
    liveUrl: "https://cv.toolscase.com/",
    githubUrl: null,
    isPrivate: true,
    caseStudy: {
      overview:
        "CV Builder is a high-traffic production application allowing job seekers to craft ATS-compliant resumes, preview modifications in real-time, and download formatted PDFs tailored for enterprise hiring systems.",
      problem:
        "The legacy codebase ran on Laravel 9 with outdated webpack-based build tooling, causing sluggish local development, brittle PDF generation, and non-responsive mobile styling across key editor views.",
      myRole: "Full-Stack Developer (Refactor, Modernization & UI Re-architecture)",
      contributions: [
        "Upgraded frontend build system from legacy mix tooling to Vite, resulting in near-instant HMR and faster production builds.",
        "Migrated core backend infrastructure from Laravel 9 to Laravel 12, resolving deprecated dependencies and security advisories.",
        "Adopted modern Tailwind CSS across all pages and template generators, ensuring mobile responsiveness and design consistency.",
        "Refactored complex multi-step form state management to deliver instant live resume preview without layout shifting.",
        "Engineered new user-facing features including template selection, section reordering, and ATS keyword validation.",
      ],
      architectureDiagram: [
        { step: "User Interface", detail: "Next.js / React interactive form with live state synchronization" },
        { step: "State Engine", detail: "Structured CV schema validation & section ordering" },
        { step: "Laravel 12 REST API", detail: "Session authentication, resume persistence, and user profile management" },
        { step: "PDF Renderer", detail: "High-fidelity ATS-compliant HTML-to-PDF generation pipeline" },
        { step: "Cloud Delivery", detail: "Optimized static asset and vector PDF delivery" },
      ],
      challenges: [
        {
          challenge: "Migrating Major Framework Versions (Laravel 9 to 12) Without Data Loss",
          solution:
            "Performed incremental migration in staging, running regression tests across database schemas, Eloquent models, and authentication middleware before deploying.",
        },
        {
          challenge: "Live Canvas Synchronization Delay",
          solution:
            "Decoupled heavy rendering logic from inputs using debounced state updates and memoized preview components, achieving silky 60fps typing experience.",
        },
        {
          challenge: "Cross-Device Inconsistencies on Complex Forms",
          solution:
            "Redesigned the entire UI using responsive Tailwind utility grids and accessible touch targets, providing full editing parity on mobile devices.",
        },
      ],
      results: [
        "Modernized stack running stably on Laravel 12 with full developer velocity on Vite.",
        "100% mobile responsive editor with improved Lighthouse performance metrics.",
        "Seamless template customization without PDF formatting degradation.",
      ],
    },
  },
  {
    slug: "toolscase",
    title: "Toolscase Ecosystem",
    subtitle: "Modular Web Utility & Productivity Platform",
    category: "Ecosystem Platform",
    badge: "Production Platform",
    status: "live",
    statusLabel: "Live",
    role: "Full-Stack Developer",
    contribution: "Modular Architecture · 75+ Custom Tools Built by Me · 108 Total PDF Tools Suite · 35+ Browser Tools · Middleware Auth",
    description:
      "A high-capacity digital utility hub integrating 108 total PDF tools (with 75+ custom tools engineered by me), 35+ browser tools, career utilities, and 8 live Chrome extensions into a unified architecture.",
    impact: "108 PDF Tools (75+ built by me) · 35+ Browser Tools · 8 Extensions",
    image: image(
      "/All Extension and Websites images with there name/Toolscase Website.webp",
      "Toolscase platform homepage showing suite of web tools, PDF utilities, and extensions"
    ),
    technologies: ["Next.js", "React", "Laravel", "PHP", "MySQL", "REST APIs", "Dynamic Routing"],
    liveUrl: "https://www.toolscase.com/",
    githubUrl: null,
    isPrivate: true,
    caseStudy: {
      overview:
        "Toolscase is a modular ecosystem bringing together 108 total PDF processing utilities (over 75+ built by Muhammad Usman), 35+ browser tools, CV creation, and browser extension integrations into one coherent platform.",
      problem:
        "Managing dozens of standalone utility endpoints leads to fragmented codebases, conflicting routes, duplicated authentication logic, and high operational maintenance overhead.",
      myRole: "Full-Stack Developer (Core Ecosystem Architecture & 75+ Custom Tool Modules)",
      contributions: [
        "Architected and built 75+ custom conversion, formatting, and analysis tools within the 108 total PDF tools ecosystem.",
        "Engineered modular utility architecture supporting 35+ standalone browser tools and interactive canvas utilities.",
        "Implemented dynamic routing and extensible controller patterns allowing rapid registration of new utility endpoints.",
        "Engineered middleware-based authentication and role-based access control for premium and free utility tiers.",
        "Integrated the browser extension ecosystem with unified API endpoints and shared web analytics.",
      ],
      architectureDiagram: [
        { step: "Gateway & Dynamic Router", detail: "Centralized routing directing requests to specialized micro-modules" },
        { step: "Middleware Layer", detail: "Unified rate limiting, session verification, and CORS controls" },
        { step: "Modular Engine Suite", detail: "75+ Custom Built Tools, 108 PDF Engines, 35+ Browser Tools" },
        { step: "Extension Sync Layer", detail: "Secure communication bridge for 8+ live Chrome extensions" },
        { step: "Persistent MySQL Layer", detail: "Indexed storage with query optimization and normalized tables" },
      ],
      challenges: [
        {
          challenge: "Scaling Route Registration for 140+ Discrete Tools",
          solution:
            "Implemented configuration-driven route loaders and modular service providers to isolate tools into independent namespaces without controller bloat.",
        },
        {
          challenge: "Cross-Origin Extension API Security",
          solution:
            "Designed dedicated API token authentication and strict origin policies specifically validating requests originating from registered extension IDs.",
        },
      ],
      results: [
        "Unified 108 PDF tools (75+ built by me), 35+ browser utilities, and 8 browser extensions into a maintainable platform.",
        "Zero cross-origin security vulnerabilities or unhandled exceptions across tool routes.",
      ],
    },
  },
];

export const inProgressProjects = [
  {
    slug: "mern-project",
    title: "MERN Stack Application",
    subtitle: "Full-Stack MongoDB · Express · React · Node.js",
    category: "In Development",
    badge: "Building Now",
    status: "building",
    statusLabel: "In Development",
    role: "Full-Stack Developer",
    description:
      "A full-stack MERN application featuring JWT authentication, RESTful API architecture, MongoDB data models with Mongoose, and a responsive React frontend. Currently in active development.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "REST APIs", "Mongoose", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    slug: "nextjs-saas-wip",
    title: "Next.js SaaS Platform",
    subtitle: "Modern SaaS with Server Components & App Router",
    category: "In Development",
    badge: "Building Now",
    status: "building",
    statusLabel: "In Development",
    role: "Full-Stack Developer",
    description:
      "A Next.js 14+ SaaS application leveraging the App Router, Server Components, and a full authentication system — designed for scalable multi-tenant product delivery.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
  {
    slug: "laravel-api-wip",
    title: "Laravel REST API Backend",
    subtitle: "Enterprise-Grade API with RBAC & Multi-Tenancy",
    category: "In Development",
    badge: "Building Now",
    status: "building",
    statusLabel: "In Development",
    role: "Backend Developer",
    description:
      "A robust Laravel API backend with role-based access control, multi-tenant architecture, comprehensive service layer, and automated testing coverage — currently being integrated with a React frontend.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "RBAC", "Sanctum", "PHPUnit", "Redis"],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
  },
];

export const chromeExtensions = [
  {
    slug: "applyflow-ai",
    title: "ApplyFlow AI",
    fullName: "ApplyFlowAI — AI Proposal, Cover Letter & ATS Tool",
    category: "AI Tools",
    categoryKey: "ai",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: true,
    rating: "Live Product",
    description:
      "AI-driven freelance proposal writer, tailored cover letter generator, and resume ATS scanner optimized for Upwork, Fiverr, LinkedIn, and job boards.",
    image: image(
      "/All Extension and Websites images with there name/ApplyFlow AI.webp",
      "ApplyFlow AI Chrome extension generating customized job proposals and ATS analysis"
    ),
    technologies: ["Chrome MV3", "React", "AI Workflows", "Content Scripts", "Background Workers"],
    architectureHighlights: "DOM scraping content scripts, streaming AI response parsing, encrypted local API key storage.",
    storeUrl:
      "https://chromewebstore.google.com/detail/applyflowai-ai-proposal-c/facfpjamldojljkkmgibibclngcngelb",
  },
  {
    slug: "askfiles-ai",
    title: "AskFiles AI",
    fullName: "AskFiles AI — Chat with PDF, CSV & Excel",
    category: "AI Tools",
    categoryKey: "ai",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: true,
    rating: "Live Product",
    description:
      "Chat directly with PDF, CSV, and Excel files inside the browser. Extract insights, summarize lengthy documents, and receive cited answers instantly.",
    image: image(
      "/All Extension and Websites images with there name/AskFile AI.webp",
      "AskFiles AI Chrome extension interface chatting with uploaded PDF and CSV documents"
    ),
    technologies: ["Chrome MV3", "AI Document Parser", "React", "Client File Chunker", "Storage APIs"],
    architectureHighlights: "Client-side document chunking, prompt pipeline, zero external payload storage.",
    storeUrl:
      "https://chromewebstore.google.com/detail/askfiles-ai-chat-with-pdf/lkaoocopoooikbiidoaoicdpoooiifoa",
  },
  {
    slug: "comparelens-ai",
    title: "CompareLens AI",
    fullName: "CompareLens — Smart Product Comparison & Best Price",
    category: "AI Tools",
    categoryKey: "ai",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: true,
    rating: "Live Product",
    description:
      "Intelligent e-commerce product comparison tool that scans specifications, reviews, seller credibility, and prices across Amazon, eBay, AliExpress, and Daraz.",
    image: image(
      "/All Extension and Websites images with there name/CompareLens AI.webp",
      "CompareLens AI Chrome extension comparing product specifications and prices"
    ),
    technologies: ["Chrome MV3", "E-commerce DOM Parser", "AI Extraction", "Product Research APIs"],
    architectureHighlights: "Cross-store DOM schema extractors, pricing delta algorithms, unobtrusive side-panel UI.",
    storeUrl:
      "https://chromewebstore.google.com/detail/comparelens-%E2%80%94-product-com/japflaphinibgjbfbnjpjjododbckhlj",
  },
  {
    slug: "capturepdf",
    title: "CapturePDF",
    fullName: "CapturePDF — Web Page to PDF & Scrolling Screenshot",
    category: "Document & PDF",
    categoryKey: "document",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: true,
    rating: "Live Product",
    description:
      "Convert entire web pages to vector PDFs, capture full-page scrolling screenshots, strip ad clutter, and compress outputs with one click.",
    image: image(
      "/All Extension and Websites images with there name/CapturePDF.webp",
      "CapturePDF Chrome extension converting active web pages to PDF documents"
    ),
    technologies: ["Chrome MV3", "Chrome Tab Capture API", "PDF Pipeline", "Canvas Stitching"],
    architectureHighlights: "Automated scroll-and-stitch canvas engine, CSS print stylesheet overrides, client-side compression.",
    storeUrl:
      "https://chromewebstore.google.com/detail/capturepdf-save-web-page/klmfhmomcihplcbjmejcolddgnjlhlpl",
  },
  {
    slug: "toolscase-pdf-tools",
    title: "Toolscase PDF Tools",
    fullName: "Toolscase PDF Tools — In-Browser Document Workspace",
    category: "Document & PDF",
    categoryKey: "document",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: false,
    rating: "Live Product",
    description:
      "Quick-access browser utility for merging, splitting, compressing, password-protecting, and converting PDF documents directly from the toolbar.",
    image: image(
      "/All Extension and Websites images with there name/Toolscase PDF Tools.webp",
      "Toolscase PDF Tools extension interface with document conversion actions"
    ),
    technologies: ["Chrome MV3", "React", "PDF Workflows", "API Bridge"],
    architectureHighlights: "Lightweight popup client paired with secure Toolscase backend API integration.",
    storeUrl:
      "https://chromewebstore.google.com/detail/toolscase-pdf-tools/omapldhejhnidjodfgafokfdphmbnhdg",
  },
  {
    slug: "switchdoc",
    title: "SwitchDoc",
    fullName: "SwitchDoc — Word, Excel & PPT to PDF Converter",
    category: "Document & PDF",
    categoryKey: "document",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: false,
    rating: "Live Product",
    description:
      "High-speed batch converter for Microsoft Office documents to PDF and vice versa with precision formatting preservation.",
    image: image(
      "/All Extension and Websites images with there name/SwitchDoc.webp",
      "SwitchDoc Chrome extension interface for batch converting Office documents"
    ),
    technologies: ["Chrome MV3", "Batch Conversion", "Document Format Parsers", "React"],
    architectureHighlights: "Multi-file asynchronous queue with live conversion status listeners.",
    storeUrl:
      "https://chromewebstore.google.com/detail/switchdoc-%E2%80%94-word-pdf-powe/lcndpcclcchimdohgkfgdaggaofnflgp",
  },
  {
    slug: "pixgrab",
    title: "PixGrab",
    fullName: "PixGrab — Image Downloader, WebP Converter & ZIP Export",
    category: "Productivity & Utilities",
    categoryKey: "productivity",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: false,
    rating: "Live Product",
    description:
      "Extract all images from any webpage, filter by dimension and format, convert WebP to JPG/PNG, and export collections in organized ZIP archives.",
    image: image(
      "/All Extension and Websites images with there name/PixGrab.webp",
      "PixGrab extension interface for batch downloading website images"
    ),
    technologies: ["Chrome MV3", "DOM Asset Scraper", "ZIP Packaging", "Image Conversion"],
    architectureHighlights: "Deep image DOM scanning, JSZip in-memory archiving, batch file downloads.",
    storeUrl:
      "https://chromewebstore.google.com/detail/pixgrab-image-downloader/hagmogfbnhjacmgddgndcmfnchjcjjfg",
  },
  {
    slug: "focuspulse-ai",
    title: "FocusPulse AI",
    fullName: "FocusPulse AI — Screen Time Tracker & Focus Coach",
    category: "Productivity & Utilities",
    categoryKey: "productivity",
    status: "live",
    statusLabel: "Live on Chrome Web Store",
    featured: false,
    rating: "Live Product",
    description:
      "AI-assisted productivity tracker. Monitors active tab usage, flags distracting browsing patterns, sets custom domain limits, and suggests focus breaks.",
    image: image(
      "/All Extension and Websites images with there name/FocusPulse AI.webp",
      "FocusPulse AI dashboard displaying screen time charts and productivity coach insights"
    ),
    technologies: ["Chrome MV3", "Web Navigation API", "Alarms API", "IndexedDB Analytics", "React"],
    architectureHighlights: "Low-overhead tab activity monitor running in background service worker with IndexedDB analytics.",
    storeUrl:
      "https://chromewebstore.google.com/detail/focuspulse-ai-screen-time/loncpgfdjfpnlhfcplhgflmjddkfodga",
  },
];

export const experienceData = [
  {
    period: "Jun 2025 — Present",
    role: "Full-Stack Web Developer",
    company: "Devonsite",
    location: "Lahore, Pakistan",
    employmentType: "Full-time",
    summary:
      "Architect and ship production Laravel web applications, design secure database schemas, optimize backend query bottlenecks, and build high-performance React frontends within a 4-person engineering team.",
    responsibilities: [
      "Architected and deployed 5+ production web platforms (Next.js, React, Laravel) with encrypted file storage and automated cleanup workflows.",
      "Designed MySQL and MongoDB databases with normalized schemas and strategic composite indexing, optimizing multiple slow queries to reduce response times by ~40% on large datasets.",
      "Applied MVC architecture and modular Next.js API routes with decoupled service layers to ensure maintainability, rapid debugging, and seamless feature expansion.",
      "Engineered multi-tenant authentication and granular Role-Based Access Control (RBAC) across core client deliverables.",
      "Shipped 8+ production Manifest V3 browser extensions with dedicated backend integrations.",
      "Collaborated actively using Git and Bitbucket branching workflows to deliver complex milestones ahead of schedule.",
    ],
    technologies: ["Next.js", "React", "Laravel", "PHP", "Node.js", "MongoDB", "MySQL", "REST APIs", "RBAC", "Chrome MV3", "Git"],
    impactMetrics: [
      "5+ Production Web & SaaS platforms architected, built, and shipped",
      "75+ Custom PDF & web utility tools engineered within 108 tool suite",
      "~40% Query response time optimization on large datasets",
      "8+ Live browser extensions built and published",
    ],
  },
];

export const educationData = {
  degree: "Bachelor of Science in Computer Science (BS CS)",
  institution: "National College of Business Administration & Economics (NCBA&E)",
  location: "Lahore, Pakistan",
  period: "Nov 2020 — Nov 2024",
  cgpa: "3.64 / 4.0",
  focusAreas: [
    "Software Engineering & Architecture",
    "Relational Database Management Systems (RDBMS)",
    "Web Security & Cryptographic Workflows",
    "Data Structures & Algorithms",
  ],
};

export const technicalStack = {
  primary: [
    { name: "Next.js", category: "React Framework", proficiency: "Core Production" },
    { name: "React", category: "Frontend UI", proficiency: "Core Production" },
    { name: "Laravel", category: "Backend Framework", proficiency: "Core Production" },
    { name: "Node.js & Express", category: "Backend Runtime", proficiency: "Core Production" },
    { name: "MongoDB", category: "MERN NoSQL", proficiency: "Core Production" },
    { name: "MySQL", category: "RDBMS & Indexing", proficiency: "Core Production" },
    { name: "JavaScript (ES6+)", category: "Language", proficiency: "Core Production" },
    { name: "PHP", category: "Server Language", proficiency: "Core Production" },
    { name: "Tailwind CSS", category: "Modern Styling", proficiency: "Core Production" },
    { name: "Chrome MV3", category: "Browser Extensions", proficiency: "Core Production" },
    { name: "REST APIs", category: "API Architecture", proficiency: "Core Production" },
  ],
  secondary: [
    { name: "MERN Stack", category: "Full-Stack System" },
    { name: "Blade Templates", category: "SSR Templating" },
    { name: "HTML5 / CSS3", category: "Web Core" },
    { name: "Bootstrap", category: "UI System" },
    { name: "Vite", category: "Build Tooling" },
    { name: "Git / GitHub / Bitbucket", category: "Version Control" },
    { name: "Postman", category: "API Testing" },
  ],
  engineeringHighlights: [
    {
      title: "Next.js & React SSR/CSR Architecture",
      description: "Building ultra-fast modern web applications with server-side rendering, static site generation, responsive state management, and optimized asset delivery.",
    },
    {
      title: "MVC & Service Layer Architecture",
      description: "Separating business logic from controllers into testable, reusable service classes, reducing code duplication by up to 50%.",
    },
    {
      title: "Database Indexing & Query Tuning",
      description: "Identifying slow queries through execution plans, restructuring JOINs, and applying composite indexes to reduce query latency by ~40%.",
    },
    {
      title: "Manifest V3 Extension Engineering",
      description: "Building production browser extensions using background service workers, content script DOM injection, and secure Chrome storage.",
    },
  ],
  developerTools: [
    { name: "Cursor / Copilot", role: "AI Assisted Engineering" },
    { name: "Postman", role: "API Testing & Documentation" },
    { name: "Git / Bitbucket", role: "Team Version Control" },
    { name: "Vite & Webpack", role: "Frontend Tooling" },
  ],
};

export const securityAndReliability = [
  {
    title: "SHA-256 Encrypted Temp Storage",
    description: "All uploaded and processed documents are assigned cryptographic hashes with zero predictable file naming.",
  },
  {
    title: "24-Hour Automated Cleanup",
    description: "Background scheduled tasks guarantee all temporary processing artifacts are permanently removed within 24 hours.",
  },
  {
    title: "Role-Based Access Control (RBAC)",
    description: "Fine-grained permission gates implemented via middleware to isolate tenant resources and protect privileged routes.",
  },
  {
    title: "API Rate Limiting & Validation",
    description: "Strict payload sanitization, MIME-type enforcement, and token bucket rate limiters protecting against abuse.",
  },
  {
    title: "Database Query Optimization",
    description: "Preventing N+1 queries, normalizing data models, and indexing foreign keys to handle high concurrent traffic.",
  },
];

export const howIWork = [
  {
    step: "01",
    phase: "Understand",
    headline: "Deconstruct the Problem",
    description:
      "Clarify business constraints, user workflows, data inputs, performance expectations, and security requirements before touching code.",
  },
  {
    step: "02",
    phase: "Plan",
    headline: "Architect the Foundation",
    description:
      "Define database schemas, index strategies, API contracts, modular service boundaries, and state management flow.",
  },
  {
    step: "03",
    phase: "Build",
    headline: "Engineer the Product",
    description:
      "Implement robust backend services, secure REST endpoints, and polished, accessible React/Tailwind interfaces.",
  },
  {
    step: "04",
    phase: "Test",
    headline: "Verify & Optimize",
    description:
      "Audit slow queries, test edge-case inputs, verify authorization boundaries, validate cross-browser responsiveness, and optimize bundle size.",
  },
  {
    step: "05",
    phase: "Ship",
    headline: "Deploy & Maintain",
    description:
      "Deploy to production environments, configure monitoring and automated cleanup cron schedules, and iterate from real user feedback.",
  },
];

export const clientServices = [
  {
    title: "Next.js & React Frontend Engineering",
    description: "Building responsive, modern, ultra-fast web frontends with clean state management, modern animations, and accessible UI/UX.",
    icon: "Layout",
  },
  {
    title: "Laravel & SaaS Engineering",
    description: "Architecting scalable web applications, multi-tenant databases, authentication, dashboards, and custom backend business logic.",
    icon: "Layers",
  },
  {
    title: "MERN Stack & Node.js Development",
    description: "Developing end-to-end full-stack applications with MongoDB, Express.js, React, and Node.js REST APIs.",
    icon: "Server",
  },
  {
    title: "Chrome Extension Development (MV3)",
    description: "Developing production Manifest V3 browser tools for workflow automation, AI assistance, DOM scraping, and document utilities.",
    icon: "Cpu",
  },
  {
    title: "PDF & Document Processing Systems",
    description: "Building automated document conversion, merging, splitting, watermarking, and secure file handling workflows.",
    icon: "FileText",
  },
  {
    title: "Database Optimization & Tuning",
    description: "Diagnosing slow MySQL/MongoDB queries, designing normalized schemas, and implementing indexing strategies for ~40% latency reduction.",
    icon: "Database",
  },
];
