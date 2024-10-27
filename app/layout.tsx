import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bagosTrial = localFont({
  src: "./fonts/BagossTRIAL.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JuiceBox | Dharma Wiguna",
  description: "JuiceBox | Dharma Wiguna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bagosTrial.variable} antialiased`}>{children}</body>
    </html>
  );
}
