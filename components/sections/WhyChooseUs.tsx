"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { INNER_PAGES_TEMPLATES } from "@/lib/constants";
import { FiCheckCircle, FiShield, FiSmile, FiAward, FiClock, FiHeart } from "react-icons/fi";

const FEATURES = [
  {
    icon: <FiShield />,
    title: "Certified Hygienic",
    desc: "Hospital-grade sterilization & single-use sanitized tools for every single appointment.",
  },
  {
    icon: <FiAward />,
    title: "Licensed Specialists",
    desc: "Internationally trained dermatologists, hair directors, and master spa therapists.",
  },
  {
    icon: <FiSmile />,
    title: "100% Organic Products",
    desc: "Dermatologist-formulated, botanical skincare free from sulfates & harsh parabens.",
  },
  {
    icon: <FiClock />,
    title: "Flexible Scheduling",
    desc: "Open 7 days a week with convenient online appointment management & instant confirmations.",
  },
  {
    icon: <FiHeart />,
    title: "Personalized Care",
    desc: "Complimentary skin diagnostic consultation before every single treatment.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Satisfaction Guarantee",
    desc: "If you aren't thoroughly delighted with your treatment, we will re-do it at zero extra charge.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-surface-container-lowest">
      {/* Inner Pages Template Grid Section from Stitch */}
      <div className="px-6 md:px-20 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl text-primary leading-tight mb-4">
            Great <span className="italic">Collection</span> of<br />Beautiful
            Predesigned Inner Page Templates
          </h2>
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-outline">
            CAREFULLY CRAFTED LAYOUTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
          {INNER_PAGES_TEMPLATES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group ${idx % 2 === 1 ? "lg:mt-12" : ""}`}
            >
              <div className="bg-surface-container border border-outline-variant/30 aspect-[4/5] mb-4 overflow-hidden relative shadow-xs">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:translate-y-[-10%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <p className="font-manrope text-base text-on-surface text-center font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Feature Pillars */}
      <div className="px-6 md:px-20 pt-12 border-t border-outline-variant/30 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="font-playfair text-3xl md:text-4xl text-primary mb-3">
            Why Discerning Clients Choose <span className="italic">Beauty & Health</span>
          </h3>
          <p className="font-manrope text-sm text-on-surface-variant">
            Setting the standard for modern aesthetics and holistic salon wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-surface border border-outline-variant/30 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-primary/10 text-primary text-2xl">
                {feat.icon}
              </div>
              <h4 className="font-playfair text-xl text-primary">
                {feat.title}
              </h4>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
