import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutSelector from "./LayoutSelector";
import QueryProvider from "@/utills/QueryProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omtel.ae"),
  title: {
    default: "Om Enterprises",
    template: "%s | OM Enterprises",

  },
  description:
    "OM Enterprises provides bulk SMS services and comprehensive digital marketing solutions.",
  keywords: ["bulk sms", "digital marketing", "sms services"],
  twitter: {
    card: 'summary_large_image',
    title: 'OM Enterprises',
    description: 'Discover the story behind OM Enterprises and meet the team driving our success.',
    images: "../assets/images/fullllogo.png",
    site: '@omenterprises',
    creator: '@omenterprises',
  },

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
          <Toaster position="bottom-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
  