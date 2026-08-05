"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { motion } from "framer-motion";

const BEFORE_AFTER_DATA = [
  {
    title: "Signature HydraFacial & Skin Revitalization",
    beforeImage:
      "https://images.unsplash.com/photo-1512290900676-26c2a5a545c7?q=90&w=1200&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "Russian Hardware Gel Manicure & Nail Polish",
    beforeImage:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=90&w=1200&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=90&w=1200&auto=format&fit=crop",
  },
];

export const BeforeAfter: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="REAL CLIENT TRANSFORMATIONS"
          title={
            <>
              Before <span className="italic text-surface-tint">&amp;</span> After Results
            </>
          }
          subtitle="Slide across to witness immediate visible improvements in skin clarity, tone, and nail aesthetics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
