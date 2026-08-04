"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { FAQ_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-20 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="FREQUENTLY ASKED QUESTIONS"
          title={
            <>
              Got Questions? We Have <span className="italic text-surface-tint">Answers</span>
            </>
          }
          subtitle="Everything you need to know about our salon policies, appointment scheduling, and skin treatments."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col border-t border-outline-variant/40"
        >
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
