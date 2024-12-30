"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 250,
  gradientColor = "#f6f2f1",
  gradientOpacity = 0.1,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [isMounted, setIsMounted] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    setIsMounted(true);

    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseOut = () => handleMouseOut();

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseout", handleGlobalMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseout", handleGlobalMouseOut);
    };
  }, [handleMouseMove, handleMouseOut]);

  const background = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
  `;
  const gradient = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom}, 
      ${gradientTo}, 
      transparent 100%
    )
  `;

  return (
    <div
      ref={cardRef}
      className={cn("group relative flex size-full rounded-xl", className)}
    >
      <div className="absolute inset-px z-10 rounded-xl bg-neutral-100 dark:bg-neutral-900" />
      <div className="relative z-30">{children}</div>
      
      {/* Render empty divs on SSR, replace with motion divs after mount */}
      <div
        className="pointer-events-none absolute inset-px z-10 rounded-xl"
        style={{ opacity: 0 }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl" />

      {isMounted && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background,
              opacity: gradientOpacity,
            }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl duration-300 group-hover:opacity-100"
            style={{
              background: gradient,
            }}
          />
        </>
      )}
    </div>
  );
}
