import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="bg-surface-container-lowest p-8 md:p-10 border border-outline-variant/30 relative flex flex-col justify-between h-full shadow-sm">
      <FaQuoteLeft className="text-3xl text-outline-variant/40 mb-4" />
      <p className="font-playfair italic text-lg md:text-xl text-primary leading-relaxed mb-6 flex-1">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/20">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-playfair font-semibold text-primary">
              {testimonial.name}
            </h4>
            <p className="font-manrope text-xs text-outline">
              {testimonial.service}
            </p>
          </div>
        </div>
        <div className="flex text-amber-500 text-sm">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
