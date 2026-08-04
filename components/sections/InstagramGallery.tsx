"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SITE_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

const INSTAGRAM_POSTS = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG96E6SQodW2KWSot8yXuOmbzNC9HZNWj4B7wStCaU_LtBjxXkf54rpSv0SHRk5ZOKhzzTF8HJl7qoDzK51lX5sWkjx-Rf34Bsvw5lgC63gF8g0w0d93fVPAHpfPSVn2haQY3q5HLbWL8LF-iehVwjxpG41WnaaShhdNjm76xHepyFzW-0r5q3K94M5BJHMyW6-xXoFkTWQIdAIwzJHhJlCK4gH1R5QK2AKqbqcICbbGbPFu24ZjytAw",
    alt: "Skincare glow treatment post",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiSovcWHfSP0T7Czc9CK6ZLDTPXGrMXGHBtzupq_OdXBPULPJ638p34CFZcobsRikpzpZePeU4FmI-pE__JCOQIdIlSm1Ny0tEJPxhiRCkrHuskCS7rmOQ1nJOiQtYzxyU9zZClmWZ16jWoIDTcPhXZDpmOG7v5om9_xmENS9JS3i9x0UToVaPfVOhCEiM4mGb0I712cCWzlnHbpvy8vrp4qG4xTPgrPOn_eoRihQgafxPEOfLBj79Bg",
    alt: "Relaxing massage spa ritual post",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9Ty6ut9DyY1_pt-iTxiauRzjm1bJuarV4_x59VSndzeJZoJA7A46L44FyR73X-786v8N7yQwTUu7ToIi_u7pMUDFZ82pa5_zBYvD8O8lK9X62IEMSru0INXk6nNl_h_CsEZDpNNee45vUo01CCXgZFPuKghhRfDKDWeaIcY3X5E8V2oOMd6LfzuwDFKn8zg_eATpozbipf9zPfvOTBhck68x19PXXeZrlqVVQthh33xXAjQHhzSlfQ",
    alt: "Bridal makeup transformation post",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfE2uTullGsz4_baQuRnlwqhLA2VpGMGlkV1R4en-sNd0JYGoEgQolWhqFClpVp6EYcv242Jh3CBTCFRldiND91CWLwnFMYamDQ1k_B7LicjVyntwyOo4xOpDh9_zEOoMzsDOn9yNPtOiqHmytjEziZtBfp3_FYN0hzXvuVlD1CEP6RbBy0nAQxC7KgahUXLAMYKbEzODuQ_g3dxkoM2zFuGsBg_BIWHq0KEYYyF9lFAblagD3iw_xg",
    alt: "Nail salon Russian manicure gel art post",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1_erP-h68sG3Rhye2V81JY_rkqv-vf_JXHdFFn85Pgdi16S9UY0-Ojda24ljhAe9DZ1hIKGM37uvNs4KYxuOYCPN4jpz8DAZkY13NepvbGvLK1oop9ty9J3dVaw4Wbb9FeKiOgIW6N0Jb1u5dek5xyxs1sfaC4PpQ7u3WkihE0l0NJpPklpZR0KS--7gjplG985lyfIYgrQkkyMlmkxoNanAu3BiUC76F_LsUyZ0QvYRE1a0rWtqlQ",
    alt: "Clinical skin therapy facial post",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbQ_GZTAiKMQqoeGug1xlVGEzdDv0apjapA5dFNafFW9LOv_kNOIWIoiuxlZsuq3xpuxs_hmjSW8mhVIqoX7OUcqL1T1JFod9YYxn1PYkPi8Elg17G6PRBv0pvflPKx4VMcQx6sXV2IyaSp-HbKktSjnyd1pHIxLXKv_qWDYGJ8ZO1-fjpwukPwldMyot_pjWjiHh14cIDjgaS7z4UlLwcF0Z8O_YxYnybxD4POb3wBygV4WK5aJuKnQ",
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
            FOLLOW @BEAUTYSALON.OFFICIAL
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
