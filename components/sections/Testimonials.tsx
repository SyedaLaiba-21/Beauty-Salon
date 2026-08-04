"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="CLIENT REVIEWS & PRAISE"
          title={
            <>
              Loved By <span className="italic text-surface-tint">Thousands</span> of Clients
            </>
          }
          subtitle="Read real experiences from our valued guests who trust us with their skincare, bridal glam, and spa relaxation."
        />

        <div className="pt-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
