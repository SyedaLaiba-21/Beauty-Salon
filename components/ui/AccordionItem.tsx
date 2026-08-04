"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-outline-variant/40 py-5 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-playfair text-xl md:text-2xl text-primary group-hover:text-primary-container transition-colors">
          {question}
        </span>
        <span
          className={cn(
            "p-2 text-primary transition-transform duration-300 text-xl",
            isOpen && "rotate-180 text-primary-container"
          )}
        >
          <FiChevronDown />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-manrope text-base text-on-surface-variant pt-2 pb-4 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
