"use client";

import React from "react";
import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

const STATS_DATA = [
  { value: "15K+", label: "HAPPY CLIENTS" },
  { value: "98%", label: "SATISFACTION RATE" },
  { value: "12+", label: "EXPERT AESTHETICIANS" },
  { value: "250+", label: "FIVE-STAR REVIEWS" },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {STATS_DATA.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex flex-col">
              <span className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-2">
                {stat.value}
              </span>
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-outline">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
