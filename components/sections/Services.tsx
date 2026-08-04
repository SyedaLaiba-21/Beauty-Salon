"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES_LIST } from "@/lib/constants";
import { motion } from "framer-motion";

export const Services: React.FC = () => {
  const offsets = ["mt-0", "mt-0 md:mt-12", "mt-0 lg:mt-24"];

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-20 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="CURATED LUXURY TREATMENTS"
          title={
            <>
              Explore Our <span className="italic text-surface-tint">Signature</span> Beauty Services
            </>
          }
          subtitle="Designed with meticulous attention to modern aesthetics, organic formulations, and personalized client care."
        />

        {/* 6 Services Grid with Stitch exact vertical offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
            >
              <ServiceCard
                service={service}
                offsetClass={offsets[idx % 3]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
