"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-24 md:pt-32 md:pb-32 px-6 md:px-20 flex flex-col items-center justify-center text-center overflow-hidden min-h-[620px] bg-background"
    >
      {/* Background Subtle Botanical Line Art */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat absolute top-0 left-0"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHT1Y6sW99H0ZJsZD6SmUiYsal2iy6uoIPgf4ARlfKuhgd7iunwbl_w8c0ByrnRyarBBFUuc27mSW8WYOjFT3EuhYOXdm1l3H1B0YbhbZ7LcIkDsF41uSetaIpTHxq237e6JnMJ4KOOQM-Qci365_7AY_oyjhwAIhwoML5oejTkrg4O0nxbxJl6SOZ4jVBRLZNk96qT62IWtgToWANtYObZ7zgmeCiWd7LVTUD3sa-rB9kgj9DFikYAA')",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Monogram Crest Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 border border-primary flex items-center justify-center mb-2 shadow-xs"
        >
          <span className="font-playfair text-2xl text-primary font-medium">
            B
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-primary max-w-4xl leading-[1.15] tracking-tight"
        >
          Beauty <span className="italic text-surface-tint">&amp;</span> Health
          Meet Truly <br className="hidden md:block" /> Modern Aesthetics
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-manrope text-base md:text-lg text-secondary max-w-2xl leading-relaxed mt-2"
        >
          Experience customized skincare rituals, luxury body massage therapies,
          and precision aesthetics tailored for your natural elegance.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#booking" size="lg">
            BOOK APPOINTMENT
          </Button>
          <Button href="#services" variant="outline" size="lg">
            EXPLORE SERVICES
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
