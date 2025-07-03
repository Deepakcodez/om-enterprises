import React from "react";
import FeatureImage from "../../components/FeatureImage";
import FeatureContent from "../../components/FeatureContent";


const webDevelopmentCapabilities = [
  "Open Source Technologies: Expertise in PHP/MySQL for robust, scalable, and cost-effective solutions.",
  "ASP.NET Development: High-performance web applications using Microsoft’s ASP.NET framework.",

  "Modern JavaScript Frameworks: Advanced development with React.js, Next.js, and Node.js for dynamic, fast, and scalable web applications.",

  "Responsive & Mobile-First Design Development of fully responsive websites that deliver seamless experiences across all devices (desktop, tablet, and mobile).",
  "WordPress Development: Custom WordPress themes, plugins, and full-scale CMS solutions tailored to your needs.",
];
const WebDevelopmentFeatures: React.FC = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 bg-gray-100 md:p-12 p-4 rounded-lg gap-8 my-12">
      {/* Feature Image Section */}
      <div className="flex justify-center  ">
        <FeatureImage />
      </div>

      {/* Feature Content Section */}
      <div className="flex justify-center md:justify-end">
        <FeatureContent emailFeatures={webDevelopmentCapabilities} />
      </div>
    </div>
  );
};

export default WebDevelopmentFeatures;
