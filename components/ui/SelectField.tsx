"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: FieldError;
  placeholder?: string;
}

export const SelectField = React.forwardRef<
  HTMLSelectElement,
  SelectFieldProps
>(({ label, options, error, placeholder, className, id, ...props }, ref) => {
  const selectId = id || props.name;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={selectId}
        className="font-manrope text-xs font-semibold uppercase tracking-wider text-primary"
      >
        {label} {props.required && <span className="text-error">*</span>}
      </label>
      <select
        id={selectId}
        ref={ref}
        className={cn(
          "w-full bg-surface-container-lowest border px-4 py-3 text-sm text-on-surface font-manrope focus:outline-none transition-colors duration-200 cursor-pointer",
          error
            ? "border-error focus:border-error"
            : "border-outline-variant focus:border-primary",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="font-manrope text-xs text-error mt-0.5">
          {error.message}
        </span>
      )}
    </div>
  );
});

SelectField.displayName = "SelectField";
