"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SITE_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

const INSTAGRAM_POSTS = [
  {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=90&w=1000&auto=format&fit=crop",
    alt: "Skincare glow treatment post",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=90&w=1000&auto=format&fit=crop",
    alt: "Relaxing massage spa ritual post",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=90&w=1000&auto=format&fit=crop",
    alt: "Bridal makeup transformation post",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=90&w=1000&auto=format&fit=crop",
    alt: "Nail salon Russian manicure gel art post",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512290900676-26c2a5a545c7?q=90&w=1000&auto=format&fit=crop",
    alt: "Clinical skin therapy facial post",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=90&w=1000&auto=format&fit=crop",
    alt: "Luxury organic cosmetics line post",
  },
];

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-20 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="text-center max-w-2xl mx-auto mb-12 px-6">
        <div className="inline-flex items-center gap-2 text-primary mb-2">
          <FaInstagram className="text-2xl" />
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em]">
            FOLLOW @TECH4EDGESOFFICIAL
          </span>
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl text-primary">
          Join Our Instagram Beauty Community
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
        {INSTAGRAM_POSTS.map((item, idx) => (
          <motion.a
            key={idx}
            href={SITE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative aspect-square overflow-hidden bg-surface-container block"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-on-primary text-3xl">
              <FaInstagram />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
