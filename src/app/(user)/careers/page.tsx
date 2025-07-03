
import { Metadata } from "next";
import Career from "./components/Career";
// import { Job } from "./components/Job";


  export const metadata: Metadata = {
  title: 'Career',
  description: 'Careers at Omenterprises | Digital marketing, Web Development, and Design Jobs , mobile app development, and more.',
  openGraph: {
    title: 'Career at Omenterprises',
    description: 'Careers at Omenterprises | Digital marketing, Web Development, and Design Jobs , mobile app development, and more.',
    url: 'https://omenterprises.com/careers',
    siteName: 'Omenterprises',
    images: [
      {
        url: '/career.jpeg',
        width: 1200,
        height: 630,
        alt: 'Omenterprises Careers',
      },
    ],
    locale: 'en_US',
  },
}



export default async function CareerPage() {


  return (
    <main>
      <Career  />
    </main>
  );
}