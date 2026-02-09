import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BotOutfit - Fashion for Your Robot",
  description: "Premium apparel and accessories designed specifically for personal robots. Compatible with Tesla Optimus, Figure 01, and more.",
  keywords: "robot fashion, robot apparel, Tesla Optimus outfit, robot accessories, AI robot clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        
        {/* Main Content */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
