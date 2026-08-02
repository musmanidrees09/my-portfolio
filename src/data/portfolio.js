const image = (src, alt) => ({
  src,
  alt,
  width: 1920,
  height: 1080,
});

export const projects = [
  {
    slug: "cv-builder",
    title: "CV Builder",
    category: "website",
    status: "live",
    statusLabel: "Live",
    description:
      "An ATS-friendly career platform for creating polished resumes, exploring templates, and preparing for the next opportunity.",
    image: image(
      "/All Extension and Websites images with there name/CV Builder.webp",
      "CV Builder website homepage showing resume templates and an ATS-friendly resume workflow"
    ),
    technologies: ["Laravel", "React", "Vite", "Tailwind CSS"],
    link: { label: "Open CV Builder", href: "https://cv.toolscase.com/" },
    featured: true,
  },
  {
    slug: "pdftoolbox",
    title: "PDFToolBox",
    category: "website",
    status: "live",
    statusLabel: "Live",
    description:
      "An all-in-one PDF workspace for converting, merging, splitting, compressing, editing, extracting images, and protecting documents.",
    image: image(
      "/All Extension and Websites images with there name/PDFToolBox Website Image.webp",
      "PDFToolBox website homepage with a drag-and-drop PDF upload workspace"
    ),
    technologies: ["Laravel", "PHP", "Blade", "MySQL"],
    link: { label: "Open PDFToolBox", href: "https://pdf.toolscase.com/" },
    featured: true,
  },
  {
    slug: "toolscase",
    title: "Toolscase",
    category: "website",
    status: "live",
    statusLabel: "Live",
    description:
      "A modular web-utility ecosystem bringing browser tools, PDF workflows, CV building, and practical productivity services into one place.",
    image: image(
      "/All Extension and Websites images with there name/Toolscase Website.webp",
      "Toolscase website homepage presenting browser tools, PDF tools, and product utilities"
    ),
    technologies: ["Laravel", "REST APIs", "MySQL", "Product systems"],
    link: { label: "Open Toolscase", href: "https://www.toolscase.com/" },
    featured: true,
  },
  {
    slug: "applyflow-ai",
    title: "ApplyFlowAI: AI Proposal & Cover Letter Tool",
    category: "extension",
    status: "live",
    statusLabel: "Live",
    description:
      "AI freelance proposal tool, cover letter writer, and resume ATS scanner for Upwork, Fiverr, LinkedIn, Indeed, gigs, and job boards.",
    image: image(
      "/All Extension and Websites images with there name/ApplyFlow AI.webp",
      "ApplyFlowAI Chrome extension interface for generating freelance proposals and cover letters"
    ),
    technologies: ["Chrome MV3", "React", "AI workflows"],
    link: {
      label: "View on Chrome Web Store",
      href: "https://chromewebstore.google.com/detail/applyflowai-ai-proposal-c/facfpjamldojljkkmgibibclngcngelb",
    },
  },
  {
    slug: "toolscase-pdf-tools",
    title: "Toolscase PDF Tools",
    category: "extension",
    status: "live",
    statusLabel: "Live",
    description:
      "Easily convert, merge, split, compress, edit, extract images, protect, and unlock documents directly inside your web browser.",
    image: image(
      "/All Extension and Websites images with there name/Toolscase PDF Tools.webp",
      "Toolscase PDF Tools Chrome extension interface with document conversion and compression actions"
    ),
    technologies: ["Chrome MV3", "PDF workflows", "React"],
    link: {
      label: "View on Chrome Web Store",
      href: "https://chromewebstore.google.com/detail/toolscase-pdf-tools/omapldhejhnidjodfgafokfdphmbnhdg",
    },
  },
  {
    slug: "askfiles-ai",
    title: "AskFiles AI – Chat with PDF, CSV & Excel",
    category: "extension",
    status: "live",
    statusLabel: "Live",
    description:
      "Chat with PDF, CSV, and Excel files using AI. Ask questions, get instant answers, summaries, and citations from long documents.",
    image: image(
      "/All Extension and Websites images with there name/AskFile AI.webp",
      "AskFiles AI Chrome extension interface for chatting with PDF, CSV, and Excel files"
    ),
    technologies: ["AI document assistant", "Chrome MV3", "React"],
    link: {
      label: "View on Chrome Web Store",
      href: "https://chromewebstore.google.com/detail/askfiles-ai-chat-with-pdf/lkaoocopoooikbiidoaoicdpoooiifoa",
    },
  },
  {
    slug: "comparelens-ai",
    title: "CompareLens — Product Comparison & Best Price",
    category: "extension",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "Smart AI product price comparison tool for comparing specifications, prices, and ratings across Amazon, Daraz, eBay, AliExpress, and more stores.",
    image: image(
      "/All Extension and Websites images with there name/CompareLens AI.webp",
      "CompareLens AI Chrome extension concept for comparing product specifications and prices"
    ),
    technologies: ["AI comparison", "Product research", "Chrome MV3"],
    link: null,
  },
  {
    slug: "pixgrab",
    title: "PixGrab – Image Downloader, Screenshot & PDF Tool",
    category: "extension",
    status: "live",
    statusLabel: "Live",
    description:
      "Download images from websites, capture screenshots, save pages as PDF, convert WebP images, and export files as ZIP.",
    image: image(
      "/All Extension and Websites images with there name/PixGrab.webp",
      "PixGrab Chrome extension interface for downloading website images and exporting files"
    ),
    technologies: ["Chrome MV3", "Image utilities", "ZIP export"],
    link: {
      label: "View on Chrome Web Store",
      href: "https://chromewebstore.google.com/detail/pixgrab-image-downloader/hagmogfbnhjacmgddgndcmfnchjcjjfg",
    },
  },
  {
    slug: "focuspulse-ai",
    title: "FocusPulse AI – Screen Time Tracker",
    category: "extension",
    status: "live",
    statusLabel: "Live",
    description:
      "AI-powered screen time tracker and focus coach. Track website usage, block distractions, set goals, and receive productivity insights.",
    image: image(
      "/All Extension and Websites images with there name/FocusPulse AI.webp",
      "FocusPulse AI Chrome extension dashboard showing screen time and productivity insights"
    ),
    technologies: ["Chrome MV3", "Productivity", "AI coaching"],
    link: {
      label: "View on Chrome Web Store",
      href: "https://chromewebstore.google.com/detail/focuspulse-ai-screen-time/loncpgfdjfpnlhfcplhgflmjddkfodga",
    },
  },
  {
    slug: "capturepdf",
    title: "CapturePDF – Save Web Page as PDF Converter",
    category: "extension",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "Save web pages as PDF, capture scrolling screenshots, convert HTML or URLs to PDF, compress files, and merge PDFs directly in the browser.",
    image: image(
      "/All Extension and Websites images with there name/CapturePDF.webp",
      "CapturePDF Chrome extension concept for capturing web pages and converting them to PDF"
    ),
    technologies: ["Chrome MV3", "Web capture", "PDF tools"],
    link: null,
  },
  {
    slug: "switchdoc",
    title: "SwitchDoc – Word to PDF & Document Converter",
    category: "extension",
    status: "live",
    statusLabel: "Live",
    description:
      "Convert Word, Excel, and PowerPoint files to PDF and back instantly with fast batch conversion.",
    image: image(
      "/All Extension and Websites images with there name/SwitchDoc.webp",
      "SwitchDoc Chrome extension interface for converting Word, Excel, PowerPoint, and PDF files"
    ),
    technologies: ["Chrome MV3", "Batch conversion", "Document workflows"],
    link: {
      label: "View on Chrome Web Store",
      href: "https://chromewebstore.google.com/detail/switchdoc-%E2%80%94-word-pdf-powe/lcndpcclcchimdohgkfgdaggaofnflgp",
    },
  },
];

export const websiteProjects = projects.filter((project) => project.category === "website");
export const extensionProjects = projects.filter((project) => project.category === "extension");
