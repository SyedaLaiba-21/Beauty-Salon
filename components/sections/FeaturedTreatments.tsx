"use client";

import React from "react";
import { motion } from "framer-motion";

export const FeaturedTreatments: React.FC = () => {
  return (
    <div id="treatments">
      {/* Banner 1: Made For You */}
      <section className="relative h-[480px] md:h-[650px] w-full overflow-hidden flex items-center justify-center my-12">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=90&w=1920&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center w-full px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-6xl sm:text-7xl md:text-[120px] lg:text-[140px] text-on-primary/90 leading-none tracking-tighter mix-blend-overlay"
          >
            Made For You
          </motion.h2>
        </div>
      </section>

      {/* Banner 2: All a Beauty Center Can Need */}
      <section className="relative py-24 w-full overflow-hidden flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=90&w=1920&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center w-full px-6 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl text-on-primary leading-tight"
          >
            All a <span className="italic text-inverse-primary">Beauty Center</span> Can Need
          </motion.h2>
        </div>
      </section>
    </div>
  );
};
