"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_PACKAGES } from "@/lib/constants";
import { motion } from "framer-motion";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="TRANSPARENT VALUE PACKAGES"
          title={
            <>
              Beauty <span className="italic text-surface-tint">&amp;</span> Wellness Pricing
            </>
          }
          subtitle="All-inclusive pampering packages designed for individual beauty goals, bridal prep, and routine wellness."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-6">
          {PRICING_PACKAGES.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
