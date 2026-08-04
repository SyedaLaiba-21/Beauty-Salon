"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-manrope font-semibold uppercase tracking-widest transition-all duration-300 btn-ripple cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-on-primary hover:bg-primary-container active:scale-[0.98]",
      secondary:
        "bg-secondary text-on-secondary hover:bg-opacity-90 active:scale-[0.98]",
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary hover:text-on-primary active:scale-[0.98]",
      ghost:
        "text-primary hover:bg-primary/10 bg-transparent active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-[10px] px-4 py-2 tracking-[0.1em]",
      md: "text-xs px-6 py-3 tracking-[0.1em]",
      lg: "text-xs md:text-sm px-8 py-4 tracking-[0.12em]",
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <CgSpinner className="animate-spin text-lg" />
            <span>Processing...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
