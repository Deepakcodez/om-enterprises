"use client"
import React, { useRef } from "react";
import Lottie from "react-lottie";
import aboutAnimation from "../../assets/animations/about.json";

interface FeatureAnimationProps {
  className?: string;
}

const AboutAnimation: React.FC<FeatureAnimationProps> = ({ className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieRef = useRef<any | null>(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    if (lottieRef.current) {
      // Force the animation to continue playing
      lottieRef.current.play();
    }
  };

  return (
    <div className={`${className ? className : ""}  w-full   `} onClick={handleClick}>
      <Lottie
        ref={lottieRef}
        options={defaultOptions}
        height={'100%'}
        width={'100%'}
        isClickToPauseDisabled={true} // Disable the default click-to-pause behavior
      />
    </div>
  );
};

export default AboutAnimation;