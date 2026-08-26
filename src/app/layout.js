import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://m-usman-idrees.vercel.app"),
  title: "Muhammad Usman | Full-Stack Developer — Next.js, React, Laravel & SaaS",
  description:
    "Portfolio of Muhammad Usman, a Full-Stack Developer with 1.5+ years of production experience shipping Next.js and React web apps, MERN stack platforms, Laravel SaaS systems, and 8+ live Manifest V3 Chrome extensions.",
  keywords: [
    "Muhammad Usman",
    "Muhammad Usman developer",
    "Full-Stack Developer",
    "Next.js developer",
    "React developer",
    "MERN stack developer",
    "Node.js developer",
    "MongoDB developer",
    "Laravel developer",
    "Chrome extension developer",
    "Manifest V3 extensions",
    "SaaS product engineer",
    "PHP developer",
    "MySQL database optimization",
    "PDF tools developer",
    "Prospetra",
    "Halvex Group",
    "Full Stack Web Developer Pakistan",
    "Devonsite developer",
    "Toolscase",
    "PDFToolBox",
  ],
  authors: [{ name: "Muhammad Usman" }],
  creator: "Muhammad Usman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Usman | Full-Stack Developer — Next.js, React, Laravel & SaaS",
    description:
      "Full-stack developer building and shipping production SaaS platforms, Next.js & React web applications, AI tools, and 8+ live Manifest V3 Chrome extensions.",
    url: "https://m-usman-idrees.vercel.app/",
    siteName: "Muhammad Usman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Usman — Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usman | Full-Stack Developer — Next.js, React, Laravel & SaaS",
    description:
      "Full-stack developer building and shipping production SaaS platforms, Next.js web applications, AI tools, and 8+ live Manifest V3 Chrome extensions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon1.png",
    apple: "/icon1.png",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://m-usman-idrees.vercel.app/#person",
      name: "Muhammad Usman",
      jobTitle: "Full-Stack Developer",
      url: "https://m-usman-idrees.vercel.app/",
      email: "mailto:musmanidrees08@gmail.com",
      telephone: "+92 3096134235",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      worksFor: {
        "@type": "Organization",
        name: "Devonsite",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "National College of Business Administration & Economics (NCBA&E)",
      },
      sameAs: [
        "https://github.com/musmanidrees09",
        "https://www.linkedin.com/in/muhammad-usman09-idrees/",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MERN Stack",
        "Laravel",
        "PHP",
        "JavaScript (ES6+)",
        "MySQL & Query Optimization",
        "REST APIs",
        "Chrome Extension Development (Manifest V3)",
        "Document Processing & PDF Systems",
        "SaaS Architecture",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://m-usman-idrees.vercel.app/#website",
      url: "https://m-usman-idrees.vercel.app/",
      name: "Muhammad Usman | Full-Stack Developer",
      author: {
        "@id": "https://m-usman-idrees.vercel.app/#person",
      },
      description:
        "Personal engineering portfolio of Muhammad Usman, Full-Stack Developer specializing in Laravel, React, SaaS platforms, and Chrome extensions.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[var(--accent)] selection:text-[var(--ink)]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        {children}
      </body>
    </html>
  );
}
