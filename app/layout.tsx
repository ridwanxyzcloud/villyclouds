import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundGlow } from "@/components/background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: {
    default: "VillyClouds — Data, AI & Software Solutions",
    template: "%s — VillyClouds",
  },
  description:
    "Premium data engineering, AI, analytics, and custom software development — built for scalable growth.",
  metadataBase: new URL("https://www.villyclouds.com"),
  openGraph: {
    title: "VillyClouds — Data, AI & Software Solutions",
    description:
      "Premium data engineering, AI, analytics, and custom software development — built for scalable growth.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <BackgroundGlow />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
