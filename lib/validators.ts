import { z } from "zod";

export const bookingFormSchema = z.object({
  user_name: z
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name must be under 50 characters"),
  user_phone: z
    .string()
    .regex(
      /^(\+92|03)[0-9]{9}$/,
      "Please enter a valid Pakistan phone number (+923XXXXXXXXX or 03XXXXXXXXX)"
    ),
  user_email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  appointment_date: z
    .string()
    .min(1, "Preferred date is required")
    .refine((dateString) => {
      const selectedDate = new Date(dateString);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Appointment date cannot be in the past"),
  appointment_time: z.string().min(1, "Preferred time is required"),
  message: z
    .string()
    .max(500, "Message cannot exceed 500 characters")
    .optional(),
});

export type BookingFormInputs = z.infer<typeof bookingFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterInputs = z.infer<typeof newsletterSchema>;
