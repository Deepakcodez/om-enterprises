import React from 'react';
import FeatureContent from './FeatureContent';
import FeatureImage from './FeatureImage';


const emailFeatures = [
    "SPAM FREE Emails, 90% Inbox Delivery",
    "Easily create Newsletters",
    "Manage Group/Lists",
    "Manage Email IDs",
    "Sender Name – Unlimited (FREE)",
    "Reply email: End User set reply email at their end.",
    "View Sent Report by Date Search",
    "Viewer Report: In this section, we can track, how many users view promotional emails. With incoming IP address details.",
    "Email Id Database also available (All over INDIA) – Complimentary Available",
    "Validity – Unlimited",
    "Bulk Email Software: FREE (You have to only purchase credits of email)",
  ];

const Features: React.FC = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 bg-gray-100 md:p-12 p-4 rounded-lg gap-8 my-12'>
      {/* Feature Image Section */}
      <div className='flex justify-center  '>
        <FeatureImage />
      </div>

      {/* Feature Content Section */}
      <div className='flex justify-center md:justify-end'>             
        <FeatureContent emailFeatures={emailFeatures} />
      </div>
    </div>
  );
};

export default Features;