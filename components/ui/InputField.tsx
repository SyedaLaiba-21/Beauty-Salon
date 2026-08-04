"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  icon?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={inputId}
          className="font-manrope text-xs font-semibold uppercase tracking-wider text-primary"
        >
          {label} {props.required && <span className="text-error">*</span>}
        </label>
        <div className="relative flex items-center">
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-surface-container-lowest border px-4 py-3 text-sm text-on-surface font-manrope placeholder:text-outline/60 focus:outline-none transition-colors duration-200",
              error
                ? "border-error focus:border-error"
                : "border-outline-variant focus:border-primary",
              icon && "pl-10",
              className
            )}
            {...props}
          />
          {icon && (
            <div className="absolute left-3 text-outline text-lg pointer-events-none">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <span className="font-manrope text-xs text-error mt-0.5">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
