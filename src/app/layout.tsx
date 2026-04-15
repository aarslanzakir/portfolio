import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ali Arslan Zakir | Full-Stack Developer",
  description:
    "Senior Full-Stack Developer with 7+ years of experience building scalable web applications. Expert in Next.js, React, Node.js, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Ali Arslan Zakir",
  ],
  openGraph: {
    title: "Ali Arslan Zakir | Full-Stack Developer",
    description:
      "Senior Full-Stack Developer with 7+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
