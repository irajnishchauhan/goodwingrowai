import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Goodwin Grow AI | AI-Powered Marketing & Growth",
  description: "Goodwin Grow AI combines AI, performance marketing, automation and analytics to help businesses acquire customers, improve conversion and scale efficiently.",
  keywords: ["AI Marketing", "Growth Agency", "Performance Marketing", "AI Automation", "Lead Generation", "SEO", "Next.js"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Goodwin Grow AI | AI-Powered Marketing & Growth",
    description: "Goodwin Grow AI combines AI, performance marketing, automation and analytics to help businesses acquire customers, improve conversion and scale efficiently.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodwin Grow AI | AI-Powered Marketing & Growth",
    description: "Goodwin Grow AI combines AI, performance marketing, automation and analytics to help businesses acquire customers, improve conversion and scale efficiently.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
