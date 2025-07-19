import { Metadata } from "next";
import AboutUs from "./components/About";
import aboutusOG from "@/assets/images/blog.jpeg";
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and the team behind Your Company Name. Discover what makes us unique and why we do what we do.',
  keywords: ['about us', 'company story', 'our team', 'mission statement', 'company values'],

  openGraph: {
    title: 'About Us ',
    description: 'Discover the story behind Your Company Name and meet the team driving our success.',
    url: 'https://omenterprisesgroup.in/about-us',
    siteName: 'OM ENTERPRISES GROUP',
    images: [
      {
        url: aboutusOG.src,
        width: 1200,
        height: 630,
        alt: 'omenterprisesgroup.in - About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | OM ENTERPRISES GROUP',
    description: 'Discover the story behind OM ENTERPRISES GROUP and meet the team driving our success.',
    images: aboutusOG.src,
    site: '@omenterprisesgroup',
    creator: '@omenterprisesgroup',
  },

  // Additional metadata
  alternates: {
    canonical: 'https://omenterprisesgroup.in/about-us',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  authors: [
    {
      name: 'OM ENTERPRISES GROUP',
      url: 'https://omenterprisesgroup.in/',
    },
  ],
  publisher: 'OM ENTERPRISES GROUP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://omenterprisesgroup.in/'),
};

export default function AboutUsPage() {
  return (
    <section>
      <AboutUs />
    </section>
  );
}