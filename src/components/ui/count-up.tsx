
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const countRef = useRef(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Only start the animation when the element is in view and hasn't animated yet
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;
      
      const animateCount = () => {
        const now = Date.now();
        const remaining = Math.max(endTime - now, 0);
        const progress = 1 - remaining / (duration * 1000);
        
        // Easing function for smooth animation (ease-out)
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        countRef.current = easedProgress * end;
        setCount(countRef.current);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration, hasAnimated]);

  const formattedCount = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

export default CountUp;
