import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import ClientLayout from "./client";
import { Suspense } from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imadanbhat.vercel.app"),
  title: "Madan Bhat | Junior Software Engineer",
  description:
    "Portfolio of Madan Bhat, a Junior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
  keywords: [
    "Madan Bhat",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Madan Bhat" }],
  creator: "Madan Bhat",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imadanbhat.vercel.app",
    title: "Madan Bhat | Junior Software Engineer",
    description:
      "Portfolio of Madan Bhat, a Junior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    siteName: "Madan Bhat Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Madan Bhat Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madan Bhat | Junior Software Engineer",
    description:
      "Portfolio of Madan Bhat, a Junior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    creator: "@imadanbhat",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-mono antialiased", fontSans.variable)}>
        <Suspense>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
