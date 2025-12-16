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
  title: "Muhammad Usman | Full-Stack Developer",
  description:
    "Junior Full-Stack Developer specializing in Laravel and MERN stack. Building scalable, production-ready web applications.",
  keywords: [
    "Muhammad Usman",
    "Full Stack Developer",
    "Laravel Developer",
    "MERN Developer",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Muhammad Usman" }],
  openGraph: {
    title: "Muhammad Usman | Full-Stack Developer",
    description:
      "Portfolio of Muhammad Usman — Laravel & MERN stack developer with real-world experience.",
    url: "https://m-usman-idrees.vercel.app/",
    siteName: "Muhammad Usman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Usman Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
