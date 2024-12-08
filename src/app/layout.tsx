import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const mainFont = Roboto_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}