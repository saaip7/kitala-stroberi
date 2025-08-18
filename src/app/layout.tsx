import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AOSInit from "@/components/AOSInit";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ContactModalProvider } from "@/contexts/ContactModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitala Stroberi | Wisata Petik Stroberi Batu",
  description: "Bukan Sekadar Petik Stroberi",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        <ContactModalProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ContactModalProvider>
      </body>
    </html>
  );
}
