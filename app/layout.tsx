import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Chautari — Creative Technology Company in Kathmandu",
    template: "%s | Digital Chautari",
  },
  description:
    "Digital Chautari is a creative technology company in Kathmandu, Nepal specialising in digital marketing, content creation, and health-tech software.",
  keywords: ["digital marketing", "content creation", "health tech", "Kathmandu", "Nepal", "software development"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalchautari.com",
    siteName: "Digital Chautari",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: "var(--color-paper)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
