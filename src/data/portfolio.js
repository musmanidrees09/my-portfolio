export const featuredProjects = [
  {
    slug: "toolscase-pdftoolbox-extension",
    title: "Toolscase PDFToolBox",
    category: "Published Chrome extension",
    status: "Published",
    summary:
      "A browser extension that routes document workflows to PDFToolBox, covering 27 PDF actions including conversion, merge, split, compression, OCR, and secure processing.",
    technologies: ["React", "Vite", "Chrome MV3", "PDF workflows"],
    visual: { type: "toolbox", label: "27 PDF workflows" },
    link: { label: "View on Chrome Web Store", href: "https://chromewebstore.google.com/detail/toolscase-pdf-tools/omapldhejhnidjodfgafokfdphmbnhdg" },
  },
  {
    slug: "pixgrab",
    title: "PixGrab",
    category: "Published Chrome extension",
    status: "Published",
    summary:
      "A browser utility for extracting page images, capturing screenshots, saving pages as PDF, converting WebP images, and exporting ZIP files.",
    technologies: ["React", "Vite", "Chrome MV3", "Image utilities"],
    visual: { type: "pixgrab", label: "Capture and extract" },
    link: { label: "View on Chrome Web Store", href: "https://chromewebstore.google.com/detail/pixgrab-image-downloader/hagmogfbnhjacmgddgndcmfnchjcjjfg" },
  },
  {
    slug: "applyflowai",
    title: "ApplyFlowAI",
    category: "Published Chrome extension",
    status: "Published",
    summary:
      "A proposal and cover-letter workflow for freelance and job platforms, with job-post extraction and resume ATS scanning.",
    technologies: ["Chrome MV3", "Google OAuth", "jsPDF", "Job workflows"],
    image: {
      src: "/projects/applyflowai.png",
      alt: "ApplyFlowAI extension interface showing an AI-powered job application workflow",
      width: 1400,
      height: 560,
    },
    link: { label: "View on Chrome Web Store", href: "https://chromewebstore.google.com/detail/applyflowai-ai-proposal-c/facfpjamldojljkkmgibibclngcngelb" },
  },
  {
    slug: "pdftoolbox-platform",
    title: "PDFToolBox Platform",
    category: "Web platform",
    status: "Live platform",
    summary:
      "A Laravel PDF-processing SaaS for document conversion, merge, split, and compression with secure file handling and temporary storage cleanup.",
    technologies: ["Laravel", "PHP", "Blade", "Tailwind", "MySQL"],
    visual: { type: "platform", label: "Document processing" },
    link: { label: "View platform", href: "https://pdf.toolscase.com/" },
  },
  {
    slug: "cv-builder",
    title: "CV Builder",
    category: "Web platform",
    status: "Production work",
    summary:
      "A CV and resume builder improved across Laravel and React, including a Laravel 9 to 12 upgrade and migration from Laravel Mix to Vite.",
    technologies: ["Laravel", "React", "Vite", "Tailwind"],
    visual: { type: "cvbuilder", label: "Resume builder" },
  },
  {
    slug: "toolscase-platform",
    title: "ToolsCase",
    category: "Web platform",
    status: "Live platform",
    summary:
      "A modular web-utility platform that brings PDF conversion, CV and resume building, QR generation, and related tools into one service.",
    technologies: ["Laravel", "PHP", "REST APIs", "MySQL"],
    visual: { type: "toolscase", label: "Utility platform" },
    link: { label: "View platform", href: "https://toolscase.com/" },
  },
];

export const inProgressProjects = [
  {
    title: "CompareLens",
    summary: "Compares product prices, specifications, ratings, and saved options across store tabs.",
  },
  {
    title: "CapturePDF",
    summary: "Converts webpages, URLs, and HTML to PDF with screenshot, merge, and compression tools.",
  },
  {
    title: "SwitchDoc",
    summary: "Batch document conversion between Word, PDF, PowerPoint, and office formats.",
  },
  {
    title: "AskFiles AI",
    summary: "Document-question workflow for PDF, CSV, and Excel files.",
  },
  {
    title: "FontInspector",
    summary: "Browser font inspection with type specimens and CSS typography export.",
  },
];
