"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;
    const beams = beamsRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = beams.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      beams.style.setProperty("--x", `${x}px`);
      beams.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="beam-gradient"
            cx="var(--x, 50%)"
            cy="var(--y, 50%)"
            r="40%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14b8a6" stopOpacity="0.15" />
            <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#beam-gradient)" />
      </svg>
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};
