"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { motion } from "framer-motion";

const BEFORE_AFTER_DATA = [
  {
    title: "Signature HydraFacial & Skin Revitalization",
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG96E6SQodW2KWSot8yXuOmbzNC9HZNWj4B7wStCaU_LtBjxXkf54rpSv0SHRk5ZOKhzzTF8HJl7qoDzK51lX5sWkjx-Rf34Bsvw5lgC63gF8g0w0d93fVPAHpfPSVn2haQY3q5HLbWL8LF-iehVwjxpG41WnaaShhdNjm76xHepyFzW-0r5q3K94M5BJHMyW6-xXoFkTWQIdAIwzJHhJlCK4gH1R5QK2AKqbqcICbbGbPFu24ZjytAw",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1_erP-h68sG3Rhye2V81JY_rkqv-vf_JXHdFFn85Pgdi16S9UY0-Ojda24ljhAe9DZ1hIKGM37uvNs4KYxuOYCPN4jpz8DAZkY13NepvbGvLK1oop9ty9J3dVaw4Wbb9FeKiOgIW6N0Jb1u5dek5xyxs1sfaC4PpQ7u3WkihE0l0NJpPklpZR0KS--7gjplG985lyfIYgrQkkyMlmkxoNanAu3BiUC76F_LsUyZ0QvYRE1a0rWtqlQ",
  },
  {
    title: "Russian Hardware Gel Manicure & Nail Polish",
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfE2uTullGsz4_baQuRnlwqhLA2VpGMGlkV1R4en-sNd0JYGoEgQolWhqFClpVp6EYcv242Jh3CBTCFRldiND91CWLwnFMYamDQ1k_B7LicjVyntwyOo4xOpDh9_zEOoMzsDOn9yNPtOiqHmytjEziZtBfp3_FYN0hzXvuVlD1CEP6RbBy0nAQxC7KgahUXLAMYKbEzODuQ_g3dxkoM2zFuGsBg_BIWHq0KEYYyF9lFAblagD3iw_xg",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbQ_GZTAiKMQqoeGug1xlVGEzdDv0apjapA5dFNafFW9LOv_kNOIWIoiuxlZsuq3xpuxs_hmjSW8mhVIqoX7OUcqL1T1JFod9YYxn1PYkPi8Elg17G6PRBv0pvflPKx4VMcQx6sXV2IyaSp-HbKktSjnyd1pHIxLXKv_qWDYGJ8ZO1-fjpwukPwldMyot_pjWjiHh14cIDjgaS7z4UlLwcF0Z8O_YxYnybxD4POb3wBygV4WK5aJuKnQ",
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
