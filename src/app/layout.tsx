import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "my-project",
  description: "Hyperfunded landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <Script id="hf-theme-init" strategy="beforeInteractive">{`
try {
  const theme = localStorage.getItem("hf-theme");
  if (theme === "light") document.documentElement.classList.remove("dark");
  if (theme === "dark") document.documentElement.classList.add("dark");
} catch {}
        `}</Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
