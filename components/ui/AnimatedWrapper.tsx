"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any)?.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
