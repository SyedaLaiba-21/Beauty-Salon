"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, NewsletterInputs } from "@/lib/validators";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { FiMail } from "react-icons/fi";

export const Newsletter: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInputs>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubscribe = (data: NewsletterInputs) => {
    toast.success("✨ Thank you for subscribing! Check your inbox for exclusive VIP beauty offers.");
    reset();
  };

  return (
    <section className="bg-primary text-on-primary py-24 px-6 md:px-20 text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl leading-snug">
          To Create Modern Websites<br className="hidden sm:block" />
          Dedicated to Beauty.
        </h2>
        <p className="font-manrope text-xs font-semibold uppercase text-inverse-primary tracking-[0.2em]">
          MODERN BEAUTY SALON &amp; STORE
        </p>

        {/* VIP Newsletter Subscription Form */}
        <form
          onSubmit={handleSubmit(onSubscribe)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto w-full"
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full bg-white/10 border border-on-primary/30 px-4 py-3.5 pl-11 text-sm text-on-primary placeholder:text-on-primary/50 font-manrope focus:outline-none focus:border-on-primary transition-colors"
              {...register("email")}
            />
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-primary/60 text-lg" />
          </div>
          <Button
            type="submit"
            variant="outline"
            size="md"
            isLoading={isSubmitting}
            className="w-full sm:w-auto shrink-0 border-on-primary text-on-primary hover:bg-on-primary hover:text-primary"
          >
            SUBSCRIBE
          </Button>
        </form>
        {errors.email && (
          <span className="font-manrope text-xs text-inverse-primary block mt-1">
            {errors.email.message}
          </span>
        )}
      </div>
    </section>
  );
};
