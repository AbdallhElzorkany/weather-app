import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description:
    "This Weather Website is a user-friendly web application that provides accurate and up-to-date weather information for any location worldwide. It allows users to search for cities and view current weather conditions, including temperature, humidity, wind speed, and weather descriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} antialiased text-white bg-neutral-900 min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
