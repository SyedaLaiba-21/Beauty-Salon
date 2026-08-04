import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left" | "right";
  className?: string;
  theme?: "light" | "dark";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = "center",
  className,
  theme = "light",
}) => {
  const alignmentClasses = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
    right: "text-right items-end ml-auto",
  };

  const titleColors = {
    light: "text-primary",
    dark: "text-on-primary",
  };

  const labelColors = {
    light: "text-outline",
    dark: "text-inverse-primary",
  };

  const subtitleColors = {
    light: "text-on-surface-variant",
    dark: "text-on-primary/80",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "font-manrope text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            labelColors[theme]
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-playfair text-3xl md:text-4xl lg:text-5xl font-normal leading-tight",
          titleColors[theme]
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-manrope text-base md:text-lg mt-4 max-w-2xl leading-relaxed",
            subtitleColors[theme]
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
