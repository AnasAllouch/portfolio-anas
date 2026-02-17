import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anas Allouch | AI & Cybersecurity Engineer",
  description: "Portfolio of Anas Allouch, an AI & Cybersecurity Engineer building scalable, secure, and intelligent digital systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased bg-slate-50 text-slate-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
