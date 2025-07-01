"use client"
import React, { useRef } from "react";
import Lottie from "react-lottie";
import messageAnimation from "../../assets/animations/message2.json";

interface RippleAnimationProps {
  className?: string;
}

const MessageAnimation: React.FC<RippleAnimationProps> = ({ className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieRef = useRef<any | null>(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: messageAnimation,
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
        height={'100%'}
        width={'100%'}
        isClickToPauseDisabled={true} // Disable the default click-to-pause behavior
      />
    </div>
  );
};

export default MessageAnimation;