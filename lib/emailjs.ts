import emailjs from "@emailjs/browser";
import { BookingFormData } from "@/types";

export const sendBookingEmail = async (formData: BookingFormData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  if (!serviceId || serviceId.includes("YOUR_SERVICE_ID")) {
    console.warn("EmailJS credentials not configured yet. Simulating email submission.");
    // Simulate network delay for mock submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { status: 200, text: "Simulation success: EmailJS credentials pending." };
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      user_name: formData.user_name,
      user_email: formData.user_email,
      user_phone: formData.user_phone,
      service: formData.service,
      appointment_date: formData.appointment_date,
      appointment_time: formData.appointment_time,
      message: formData.message || "N/A",
    },
    publicKey
  );
};
