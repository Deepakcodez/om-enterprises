"use client"
import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import featureAnimation from "../../assets/animations/features.json";

interface FeatureAnimationProps {
  className?: string;
}

const FeatureAnimation: React.FC<FeatureAnimationProps> = ({ className }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = () => {
    lottieRef.current?.play();
  };

  return (
    <div className={className || "object-cover"} onClick={handleClick}>
      <Lottie
        lottieRef={lottieRef}
        animationData={featureAnimation}
        loop
        autoplay
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default FeatureAnimation;
