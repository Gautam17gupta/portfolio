import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "React & Next.js Developer",
  description:
    "Professional portfolio showcasing expertise in React, Next.js, TypeScript, and modern web development technologies.",
  generator: "v0.app",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Full Stack",
    "Portfolio",
  ],
  authors: [{ name: "Developer Portfolio" }],
  openGraph: {
    title: "React & Next.js Developer",
    description:
      "Professional portfolio showcasing expertise in React, Next.js, TypeScript, and modern web development technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
