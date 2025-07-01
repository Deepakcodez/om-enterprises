import React from "react";

interface GlowProps {
  height?: number;
  width?: number;
  color?: string;
  blur?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  z?: number;
  opacity?: number;
}

const Glow: React.FC<GlowProps> = ({
  height = 12,
  width = 12,
  color = "#9b59b6",
  blur = 12,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  z = 1,
  opacity = 1,
}) => {
  return (
    <div
      className="absolute rounded-full  "
      style={{
        height: `${height}rem`,
        width: `${width}rem`,
        top: `${top}rem`,
        bottom: `${bottom}rem`,
        left: `${left}rem`,
        right: `${right}rem`,
        filter: `blur(${blur}px)`,
        backgroundColor: color,
        zIndex: z,
        opacity: opacity,
      }}
    ></div>
  );
};

export default Glow;