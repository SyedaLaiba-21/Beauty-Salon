import { useState } from "react";
import { toast } from "react-hot-toast";
import { BookingFormData } from "@/types";
import { sendBookingEmail } from "@/lib/emailjs";

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitBooking = async (
    data: BookingFormData,
    onSuccess?: () => void
  ) => {
    setIsLoading(true);
    try {
      await sendBookingEmail(data);
      toast.success(
        "✨ Appointment Request Received! We will confirm your booking shortly.",
        { duration: 5000 }
      );
      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Failed to send reservation request. Please try calling us directly.",
        { duration: 5000 }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { submitBooking, isLoading };
};
