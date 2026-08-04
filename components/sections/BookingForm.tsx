"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema, BookingFormInputs } from "@/lib/validators";
import { useEmailJS } from "@/hooks/useEmailJS";
import { InputField } from "@/components/ui/InputField";
import { SelectField } from "@/components/ui/SelectField";
import { Button } from "@/components/ui/Button";
import { SERVICES_LIST } from "@/lib/constants";
import { FiUser, FiPhone, FiMail, FiCalendar, FiClock, FiMessageSquare } from "react-icons/fi";

const TIME_SLOTS = [
  { label: "10:00 AM - 11:30 AM", value: "10:00 AM" },
  { label: "11:30 AM - 01:00 PM", value: "11:30 AM" },
  { label: "01:00 PM - 02:30 PM", value: "01:00 PM" },
  { label: "02:30 PM - 04:00 PM", value: "02:30 PM" },
  { label: "04:00 PM - 05:30 PM", value: "04:00 PM" },
  { label: "05:30 PM - 07:00 PM", value: "05:30 PM" },
  { label: "07:00 PM - 08:30 PM", value: "07:00 PM" },
];

export const BookingForm: React.FC = () => {
  const { submitBooking, isLoading } = useEmailJS();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormInputs>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      user_name: "",
      user_phone: "",
      user_email: "",
      service: "",
      appointment_date: "",
      appointment_time: "",
      message: "",
    },
  });

  const onSubmit = (data: BookingFormInputs) => {
    submitBooking(data, () => reset());
  };

  const serviceOptions = SERVICES_LIST.map((s) => ({
    label: `${s.title} (${s.price})`,
    value: s.title,
  }));

  // Min date for date picker (today)
  const todayDateStr = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="py-24 px-6 md:px-20 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Info Column from Stitch */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="font-playfair text-3xl md:text-5xl text-primary leading-tight">
            Comes With a<br />
            Great <span className="italic text-surface-tint">Reservation</span>
            <br />
            Making Form
          </h2>
          <p className="font-manrope text-xs font-semibold uppercase tracking-wider text-outline">
            EASY APPOINTMENT BOOKING SYSTEM
          </p>
          <p className="font-manrope text-base text-on-surface-variant max-w-md leading-relaxed">
            Allow our team to prepare your bespoke treatment room. Reserve your
            desired date, time slot, and specialist effortlessly online.
          </p>
          <a
            className="inline-block mt-4 font-manrope text-xs font-semibold uppercase tracking-wider text-primary border-b border-primary pb-1 hover:text-primary-container transition-colors"
            href="#contact"
          >
            VIEW MORE
          </a>
        </div>

        {/* Right Reservation Form Container */}
        <div className="lg:w-2/3 w-full bg-surface-container-lowest p-8 md:p-12 rounded-xs border border-outline-variant/30 shadow-lg relative">
          <div className="mb-8">
            <h3 className="font-playfair text-2xl md:text-3xl text-primary mb-2">
              Book Your Salon Experience
            </h3>
            <p className="font-manrope text-sm text-on-surface-variant">
              Fill out the form below. Our reception desk will instantly confirm your reservation.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <InputField
                label="Full Name"
                placeholder="e.g. Ayesha Khan"
                required
                icon={<FiUser />}
                error={errors.user_name}
                {...register("user_name")}
              />

              {/* Phone Number */}
              <InputField
                label="Phone Number (Pakistan)"
                placeholder="+923001234567 or 03001234567"
                required
                icon={<FiPhone />}
                error={errors.user_phone}
                {...register("user_phone")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Address */}
              <InputField
                label="Email Address"
                type="email"
                placeholder="ayesha@example.com"
                required
                icon={<FiMail />}
                error={errors.user_email}
                {...register("user_email")}
              />

              {/* Service Dropdown */}
              <SelectField
                label="Select Service"
                placeholder="-- Choose a Service --"
                required
                options={serviceOptions}
                error={errors.service}
                {...register("service")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <InputField
                label="Preferred Date"
                type="date"
                min={todayDateStr}
                required
                icon={<FiCalendar />}
                error={errors.appointment_date}
                {...register("appointment_date")}
              />

              {/* Preferred Time */}
              <SelectField
                label="Preferred Time"
                placeholder="-- Choose a Time Slot --"
                required
                options={TIME_SLOTS}
                error={errors.appointment_time}
                {...register("appointment_time")}
              />
            </div>

            {/* Optional Message */}
            <div className="flex flex-col gap-1.5 w-full">
              <label
                htmlFor="message"
                className="font-manrope text-xs font-semibold uppercase tracking-wider text-primary"
              >
                Special Notes / Requests (Optional)
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Mention any skin sensitivities or specific therapist preferences..."
                  className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary p-3 text-sm font-manrope text-on-surface focus:outline-none transition-colors"
                  {...register("message")}
                />
              </div>
              {errors.message && (
                <span className="font-manrope text-xs text-error">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              fullWidth
              isLoading={isLoading}
              className="mt-4"
            >
              CONFIRM RESERVATION
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
