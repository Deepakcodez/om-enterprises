// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutSelector from "./LayoutSelector";
import QueryProvider from "@/utills/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
   default: "Om Enterprises",
    template: "%s | OM Enterprises" ,

  },
  description:
    "OM Enterprises provides bulk SMS services and comprehensive digital marketing solutions.",
  keywords: ["bulk sms", "digital marketing", "sms services"],
  //  twitter: {
  //   card: 'summary_large_image',
  //   title: 'About Us ',
  //   description: 'Discover the story behind Your Company Name and meet the team driving our success.',
  //   images: "../assets/icons/favicon.ico",
  //   site: '@yourcompany',
  //   creator: '@yourcompany',
  // },

};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider >
          <LayoutSelector>{children}</LayoutSelector>
        </QueryProvider>
      </body>
    </html>
  );
}
