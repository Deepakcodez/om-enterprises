import React from "react";
import FeatureImage from "./FeatureImage";
import FeatureContent from "./FeatureContent";

const emailFeatures = [
  "UI/UX Design: Creating visually appealing and user-friendly interfaces that enhance user engagement and satisfaction.",
  "Responsive Design: Designing websites that adapt seamlessly to all devices, including desktops, tablets, and mobile phones.",
  "Wireframing & Prototyping: Developing detailed wireframes and interactive prototypes to visualize the final product before development.",
  "Responsive & Mobile-First Design: Development of fully responsive websites that deliver seamless experiences across all devices (desktop, tablet, and mobile).",
  "Custom Graphics & Illustrations: Crafting unique graphics, icons, and illustrations that align with your brand identity.",
  "Branding Integration: Ensuring your website design reflects your brand’s personality, values, and messaging.",
  "Cutting-Edge Tools: Using the latest design tools and technologies, including Figma, Adobe XD, Sketch, and Photoshop.",
  "Proven Track Record: Experience working with a diverse range of clients, including individuals, businesses, NGOs, and government organizations.",
];

const WebDesignfeatures: React.FC = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 bg-gray-100 md:p-12 p-4 rounded-lg gap-8 my-12">
      {/* Feature Image Section */}
      <div className="flex justify-center  ">
        <FeatureImage />
      </div>

      {/* Feature Content Section */}
      <div className="flex justify-center md:justify-end">
        <FeatureContent emailFeatures={emailFeatures} />
      </div>
    </div>
  );
};

export default WebDesignfeatures;
