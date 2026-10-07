import type { Metadata } from "next";
import { Fraunces, Inter, Manrope, Nunito_Sans, Corben } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const corben = Corben({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-corben",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isaac Cohen — Full-stack developer",
  description:
    "Isaac Cohen is an 18-year-old full-stack developer in Miami. Portfolio: a WhatsApp-first marketplace, a live algorithmic trading platform, and a mobile SAT prep app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${nunitoSans.variable} ${manrope.variable} ${corben.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
