import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AnimatedBackground = () => {
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 100% at 50% 0%, #020617 50%, ${color})
  `;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 -z-10 bg-gray-950 bg-blend-overlay"
    />
  );
};

export default AnimatedBackground;
