import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import StructuredData from "./components/StructuredData";
import SkipToContent from "./components/SkipToContent";

export const metadata: Metadata = {
  metadataBase: new URL('https://botoutfit.com'),
  title: {
    default: "BotOutfit - Premium Fashion for Personal Robots",
    template: "%s | BotOutfit"
  },
  description: "Model-specific premium apparel for Tesla Optimus, Figure 01, and Unitree G1. First-mover advantage in the $2B+ robot fashion market. Q4 2026 launch.",
  keywords: ["robot fashion", "robot apparel", "Tesla Optimus outfit", "Figure 01 clothing", "Unitree G1 fashion", "robot accessories", "personal robot clothing", "humanoid robot fashion"],
  authors: [{ name: "BotOutfit" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://botoutfit.com",
    siteName: "BotOutfit",
    title: "BotOutfit - Premium Fashion for Personal Robots",
    description: "Model-specific premium apparel for Tesla Optimus, Figure 01, and Unitree G1. Q4 2026 launch.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "BotOutfit - Premium Apparel for Personal Robots"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BotOutfit - Premium Fashion for Personal Robots",
    description: "Model-specific premium apparel for Tesla Optimus, Figure 01, and Unitree G1. Q4 2026 launch.",
    images: ["/og-image.svg"],
    creator: "@botoutfit"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased font-body bg-[#050505] text-white">
        <SkipToContent />
        <CursorGlow />
        <ScrollProgress />
        <Navigation />
        <BackToTop />

        <main id="main-content" className="pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
