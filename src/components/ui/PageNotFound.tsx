
"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const PageNotFound:React.FC = () => {
  const navigate = useRouter();
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  useEffect(() => {
    // Start the countdown
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect to home page after countdown reaches 0
    if (countdown === 0) {
      clearInterval(timer); // Stop the timer
      navigate.push('/'); // Redirect to home page
    }

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <p className="mt-2 text-gray-500">
        Redirecting to the home page in {countdown} seconds...
      </p>
    </div>
  );
};

export default PageNotFound;