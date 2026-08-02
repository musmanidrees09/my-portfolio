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
  title: "Muhammad Usman | Laravel & React Full-Stack Developer",
  description:
    "Portfolio of Muhammad Usman, a Lahore-based Laravel and React full-stack developer building practical SaaS platforms, PDF tools, career products, and Chrome extensions.",
  keywords: [
    "Muhammad Usman developer",
    "Laravel developer",
    "React developer",
    "Next.js developer",
    "full-stack developer Pakistan",
    "Chrome extension developer",
    "SaaS product engineer",
    "PDF tools developer",
    "browser extension development",
  ],
  authors: [{ name: "Muhammad Usman" }],
  creator: "Muhammad Usman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Usman | Laravel & React Full-Stack Developer",
    description:
      "A selected portfolio of web platforms and browser extensions built with Laravel, React, and product-minded engineering.",
    url: "https://m-usman-idrees.vercel.app/",
    siteName: "Muhammad Usman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Usman full-stack developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usman | Laravel & React Full-Stack Developer",
    description:
      "Web platforms and Chrome extensions built for useful, reliable workflows.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon1.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Usman",
  jobTitle: "Full-Stack Developer",
  url: "https://m-usman-idrees.vercel.app/",
  email: "mailto:musmanidrees08@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/musmanidrees09",
    "https://www.linkedin.com/in/muhammad-usman09-idrees/",
  ],
  knowsAbout: [
    "Laravel",
    "React",
    "Next.js",
    "SaaS development",
    "Chrome extension development",
    "PDF workflows",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
