import React from "react";
import { PricingTier } from "@/types";
import { Button } from "./Button";
import { FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, className }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 md:p-10 border transition-all duration-300 bg-surface-container-lowest",
        tier.isPopular
          ? "border-primary shadow-xl scale-105 z-10"
          : "border-outline-variant/40 hover:border-primary/50 shadow-sm",
        className
      )}
    >
      {tier.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-manrope text-[10px] uppercase font-bold tracking-widest px-4 py-1">
          MOST POPULAR
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-playfair text-2xl text-primary mb-2">
          {tier.title}
        </h3>
        <p className="font-manrope text-xs text-outline tracking-wider max-w-xs mx-auto">
          {tier.subtitle}
        </p>
        <div className="mt-6">
          <span className="font-playfair text-3xl md:text-4xl text-primary font-normal">
            {tier.price}
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-4 mb-8 flex-1 border-t border-b border-outline-variant/20 py-6">
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span className="text-primary text-sm shrink-0">
              <FiCheck />
            </span>
            <span className="font-manrope text-sm text-on-surface-variant">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="#booking"
        variant={tier.isPopular ? "primary" : "outline"}
        fullWidth
      >
        {tier.ctaText}
      </Button>
    </div>
  );
};
