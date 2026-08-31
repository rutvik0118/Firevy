import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ value, numericValue, suffix = '+', duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue || parseInt(value, 10) || 100;
    const incrementTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, value, duration]);

  return (
    <span ref={ref} className="font-extrabold text-white tracking-tight">
      {isInView ? count : 0}{suffix}
    </span>
  );
};

export default AnimatedCounter;
