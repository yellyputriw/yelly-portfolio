import type { Metadata } from "next";
import "./globals.css";
import { Spicy_Rice, Pompiere } from "next/font/google";

const spicyRice = Spicy_Rice({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-spicy-rice",
});

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-pompiere",
});

export const metadata: Metadata = {
  title: "Yelly Putri",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spicyRice.variable} ${pompiere.variable}`}>
        {children}
      </body>
    </html>
  );
}
