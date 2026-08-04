export interface BookingFormData {
  user_name: string;
  user_phone: string;
  user_email: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  message?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  alt: string;
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
