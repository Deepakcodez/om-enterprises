"use client";
import React, { useEffect, useRef } from "react";
import type p5Type from "p5";
import ball1 from "../../assets/images/ball_1.svg";
import ball2 from "../../assets/images/ball_2.svg";
import ball3 from "../../assets/images/ball_3.svg";
import ball4 from "../../assets/images/ball_4.svg";

const loadP5 = () => import("p5").then((mod) => mod.default);

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  isHovered: boolean;
  img: p5Type.Image;
}

const FloatingBalls: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const initP5 = async () => {
      const p5 = await loadP5();

      const sketch = (p: p5Type) => {
        let ballImages: p5Type.Image[] = [];
        const balls: Ball[] = [];

        p.preload = () => {
          ballImages = [
            p.loadImage(ball1.src),
            p.loadImage(ball2.src),
            p.loadImage(ball3.src),
            p.loadImage(ball4.src)
          ].filter(Boolean) as p5Type.Image[];
        };

        p.setup = () => {
          const container = containerRef.current;
          if (!container) return;

          const canvas = p.createCanvas(
            container.offsetWidth || 800,
            container.offsetHeight || 600
          );
          canvas.parent(container);

          for (let i = 0; i < 7; i++) {
            const randomImage = ballImages[Math.floor(p.random(ballImages.length))];
            if (!randomImage) continue;

            balls.push({
              x: p.random(p.width),
              y: p.random(p.height),
              dx: p.random(-2, 2),
              dy: p.random(-2, 2),
              radius: 30,
              isHovered: false,
              img: randomImage
            });
          }
        };

        p.draw = () => {
          p.clear();

          balls.forEach((ball) => {
            ball.x += ball.dx;
            ball.y += ball.dy;

            if (ball.x - ball.radius < 0 || ball.x + ball.radius > p.width) {
              ball.dx *= -1;
            }
            if (ball.y - ball.radius < 0 || ball.y + ball.radius > p.height) {
              ball.dy *= -1;
            }

            const distance = p.dist(p.mouseX, p.mouseY, ball.x, ball.y);
            ball.isHovered = distance < ball.radius;

            const scale = ball.isHovered ? 0.4 : 0.3;
            p.imageMode(p.CENTER);
            p.image(
              ball.img,
              ball.x,
              ball.y,
              ball.radius * 2 * scale,
              ball.radius * 2 * scale
            );
          });
        };

        p.windowResized = () => {
          const container = containerRef.current;
          if (!container) return;
          
          p.resizeCanvas(
            container.offsetWidth || 800,
            container.offsetHeight || 600
          );
        };
      };

      new p5(sketch);
    };

    initP5();

    return () => {
      // Cleanup handled by p5's internal mechanisms
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="floating-balls-container w-full h-full"
    />
  );
};

export default FloatingBalls;