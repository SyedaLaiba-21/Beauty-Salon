"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { TEAM_MEMBERS } from "@/lib/constants";
import { motion } from "framer-motion";

export const Team: React.FC = () => {
  return (
    <section id="experts" className="py-24 px-6 md:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="MASTER AESTHETICIANS & ARTISTS"
          title={
            <>
              Meet Our <span className="italic text-surface-tint">Beauty</span> Specialists
            </>
          }
          subtitle="Certified international dermatologists, senior hair directors, and master spa therapists committed to perfection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
