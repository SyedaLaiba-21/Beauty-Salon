"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { BLOG_POSTS } from "@/lib/constants";
import { motion } from "framer-motion";

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 md:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="AESTHETIC KNOWLEDGE & INSIGHTS"
          title={
            <>
              Latest Beauty <span className="italic text-surface-tint">&amp;</span> Skincare Tips
            </>
          }
          subtitle="Dermatologist advice, home regimen secrets, and modern beauty trend guides."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
