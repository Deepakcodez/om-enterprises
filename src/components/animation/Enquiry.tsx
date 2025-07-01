"use client"
import React, { useRef } from "react";
import Lottie from "react-lottie";
import rippleAnimation from "../../assets/animations/enquiry.json";



interface RippleAnimationProps {
    className?: string;
  }

const EnquiryAnimation: React.FC<RippleAnimationProps> = ({ className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieRef = useRef<any | null>(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rippleAnimation,
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
    <div className={`${className ? className : ""}`} onClick={handleClick}>
      <Lottie
        ref={lottieRef}
        options={defaultOptions}
        height={450}
        width={450}
        isClickToPauseDisabled={true} // Disable the default click-to-pause behavior
      />
    </div>
  );
};

export default EnquiryAnimation;
