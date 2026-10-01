import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "where every event finds its venue",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params?: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased pt-[60px]">
        <TopMenu />
        {props.children}
      </body>
    </html>
  );
}
