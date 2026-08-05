import {
  ServiceItem,
  PricingTier,
  TeamMember,
  Testimonial,
  BlogPost,
  FAQItem,
} from "@/types";

export const SITE_INFO = {
  name: "Beauty & Health",
  tagline: "Modern Luxury Aesthetics & Wellness Center",
  phone: "03374005515",
  whatsapp: "923374005515",
  email: "info@tech4edges.com",
  address: "Office No 322 (A) Block D, 3rd Floor Sami Tower, Ring Road Peshawar",
  googleMapsUrl: "https://maps.google.com/?q=Sami+Tower+Ring+Road+Peshawar",
  facebookUrl: "https://www.facebook.com/share/1857BNt9zY/",
  instagramUrl: "https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv",
  linkedinUrl: "https://www.linkedin.com/company/tech4edges/",
  tiktokUrl: "https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Treatments", href: "#treatments" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Experts", href: "#experts" },
  { name: "Tips", href: "#blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "beauty-care",
    title: "Beauty Care Home",
    category: "Skin & Aesthetics",
    description:
      "Advanced organic facial therapies, deep pore extractions, micro-dermabrasion, and rejuvenating anti-aging routines.",
    price: "From PKR 4,500",
    duration: "60 Min",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=90&w=1600&auto=format&fit=crop",
    alt: "Skincare and beauty care treatment aesthetic mockup",
  },
  {
    id: "spa-center",
    title: "Spa Center Home",
    category: "Massage & Wellness",
    description:
      "Hot stone aromatherapy, deep tissue relaxation rituals, herbal body scrubs, and revitalizing bath hydrotherapy.",
    price: "From PKR 6,000",
    duration: "90 Min",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=90&w=1600&auto=format&fit=crop",
    alt: "Spa massage and wellness center visual",
  },
  {
    id: "makeup-artist",
    title: "Makeup Artist Home",
    category: "Bridal & Glamour",
    description:
      "High-definition airbrush bridal glow, soft glam event makeover, party makeover, and editorial beauty styling.",
    price: "From PKR 8,000",
    duration: "75 Min",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=90&w=1600&auto=format&fit=crop",
    alt: "Professional makeup artist portfolio and glam preview",
  },
  {
    id: "nail-salon",
    title: "Nail Salon Home",
    category: "Nails & Pedicure",
    description:
      "Luxury Russian manicures, gel extensions, custom nail art, organic paraffins, and therapeutic spa pedicures.",
    price: "From PKR 3,000",
    duration: "45 Min",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=90&w=1600&auto=format&fit=crop",
    alt: "Nail salon luxury manicure and gel art mockup",
  },
  {
    id: "dermatology-clinic",
    title: "Dermatology Clinic Home",
    category: "Clinical Skincare",
    description:
      "Targeted laser skin tightening, LED light therapy, clinical acne scar revision, and vitamin infusion drips.",
    price: "From PKR 10,000",
    duration: "60 Min",
    image:
      "https://images.unsplash.com/photo-1512290900676-26c2a5a545c7?q=90&w=1600&auto=format&fit=crop",
    alt: "Dermatology clinical skincare facial preview",
  },
  {
    id: "cosmetics-store",
    title: "Cosmetics Store Home",
    category: "Boutique Products",
    description:
      "Curated organic skincare serums, dermatologist-approved sunscreens, artisan fragrance oils, and hair elixirs.",
    price: "From PKR 2,500",
    duration: "Instant",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=90&w=1600&auto=format&fit=crop",
    alt: "Luxury beauty products boutique collection preview",
  },
];

export const INNER_PAGES_TEMPLATES = [
  {
    title: "About Us",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=90&w=1600&auto=format&fit=crop",
    alt: "About Us luxury page mockup",
  },
  {
    title: "Our Team",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=90&w=1600&auto=format&fit=crop",
    alt: "Our Team beauty experts template mockup",
  },
  {
    title: "Our Services",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=90&w=1600&auto=format&fit=crop",
    alt: "Our Services inner page menu mockup",
  },
  {
    title: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=90&w=1600&auto=format&fit=crop",
    alt: "Coming Soon template mockup",
  },
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    id: "essential-glow",
    title: "Essential Glow",
    subtitle: "Ideal for monthly skin hydration & routine maintenance",
    price: "PKR 5,500",
    features: [
      "Deep Cleansing & Steam",
      "Hydrating Organic Sheet Mask",
      "Head & Shoulder Stress Relief",
      "Basic Manicure or Eyebrow Threading",
      "Complimentary Herbal Tea",
    ],
    isPopular: false,
    ctaText: "BOOK ESSENTIAL",
  },
  {
    id: "signature-radiance",
    title: "Signature Radiance",
    subtitle: "Our most coveted luxury beauty package",
    price: "PKR 12,000",
    features: [
      "Custom Medical Grade HydraFacial",
      "Full Russian Gel Manicure & Pedicure",
      "Aromatherapy Swedish Back Massage (45m)",
      "Keratin Hair Wash & Blow-Dry Polish",
      "Complimentary Skin Consultation",
    ],
    isPopular: true,
    ctaText: "BOOK SIGNATURE",
  },
  {
    id: "royal-empress-spa",
    title: "Royal Empress Spa",
    subtitle: "Complete top-to-toe pampering & bridal indulgence",
    price: "PKR 25,000",
    features: [
      "Diamond Microdermabrasion & LED Therapy",
      "Full Body Hot Stone Massage (90m)",
      "Luxury Paraffin Hand & Foot Treatment",
      "Glossing Hair Spa & Deep Hair Mask",
      "Full Body Herbal Polish Scrub",
      "VIP Private Suite Reservation",
    ],
    isPopular: false,
    ctaText: "BOOK ROYAL",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-aliza",
    name: "Dr. Aliza Hassan",
    role: "Lead Dermatologist & Aesthetician",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=90&w=1000&auto=format&fit=crop",
    bio: "12+ years experience in clinical skincare, anti-aging therapies, and precision laser aesthetics.",
    socials: { instagram: "https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv", facebook: "https://www.facebook.com/share/1857BNt9zY/" },
  },
  {
    id: "zara-khan",
    name: "Zara Khan",
    role: "Senior Bridal & Glam Artist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=90&w=1000&auto=format&fit=crop",
    bio: "Celebrity makeup artist specializing in soft glam, airbrush bridal perfection, and modern trends.",
    socials: { instagram: "https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv", facebook: "https://www.facebook.com/share/1857BNt9zY/" },
  },
  {
    id: "sophia-malik",
    name: "Sophia Malik",
    role: "Master Spa Therapist",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=90&w=1000&auto=format&fit=crop",
    bio: "Certified holistic wellness practitioner specializing in hot stone massage and aromatherapy detox.",
    socials: { instagram: "https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv", facebook: "https://www.facebook.com/share/1857BNt9zY/" },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Senior Nail & Art Specialist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=90&w=1000&auto=format&fit=crop",
    bio: "Expert in Russian hardware manicures, sculptured acrylics, and minimalist aesthetic nail art.",
    socials: { instagram: "https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv", facebook: "https://www.facebook.com/share/1857BNt9zY/" },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Mariam Tariq",
    role: "Bridal Client",
    service: "Signature Bridal Glow & Glam",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=90&w=600&auto=format&fit=crop",
    rating: 5,
    comment:
      "The bridal package at Beauty & Health was an unforgettable experience. My makeup stayed flawless all night and my skin was literally glowing. The staff is so respectful and professional!",
  },
  {
    id: "test-2",
    name: "Dr. Hina Usman",
    role: "Regular Member",
    service: "HydraFacial & Russian Manicure",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=90&w=600&auto=format&fit=crop",
    rating: 5,
    comment:
      "As a physician, hygiene and skin safety are my top priorities. Beauty & Health exceeds every clinical cleanliness standard while delivering pure luxury.",
  },
  {
    id: "test-3",
    name: "Sobia Ahmed",
    role: "Spa Enthusiast",
    service: "Hot Stone Aromatherapy Spa",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=90&w=600&auto=format&fit=crop",
    rating: 5,
    comment:
      "The hot stone massage melted away months of stress. The serene ambiance, warm lighting, and therapeutic oils make this salon my absolute sanctuary.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "10 Skincare Rituals for Lasting Summer Radiance",
    category: "Skin Care Tips",
    date: "August 2, 2026",
    excerpt:
      "Discover dermatologist-approved steps to shield your skin from summer UV heat while maintaining a dewy, hydrated complexion.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=90&w=1600&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "post-2",
    title: "Why Russian Hardware Manicures Are Superior for Nail Health",
    category: "Nail Care",
    date: "July 28, 2026",
    excerpt:
      "Explore how dry cuticle care promotes longer nail retention, zero irritation, and flawless gel application.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=90&w=1600&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "post-3",
    title: "The Ultimate Guide to Selecting Your Ideal Facial Treatment",
    category: "Aesthetics",
    date: "July 15, 2026",
    excerpt:
      "Whether fighting hyperpigmentation or fine lines, learn which facial technology matches your exact skin type.",
    image:
      "https://images.unsplash.com/photo-1512290900676-26c2a5a545c7?q=90&w=1600&auto=format&fit=crop",
    readTime: "6 min read",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How far in advance should I book my appointment?",
    answer:
      "We recommend booking at least 48 hours in advance for weekday slots, and 1 to 2 weeks ahead for weekends and bridal packages to secure your preferred specialist.",
  },
  {
    question: "What is your cancellation or rescheduling policy?",
    answer:
      "You can reschedule or cancel your reservation free of charge up to 24 hours before your scheduled appointment. Late cancellations may incur a 20% rescheduling fee.",
  },
  {
    question: "Are your beauty and facial products cruelty-free & organic?",
    answer:
      "Yes! 100% of our skincare, hair, and spa formulations are dermatologist-certified, cruelty-free, paraben-free, and formulated with natural botanicals.",
  },
  {
    question: "Do you offer private VIP rooms for bridal parties?",
    answer:
      "Absolutely. We feature luxury private suites equipped with complimentary refreshments, private changing lounges, and dedicated beauty teams for groups.",
  },
  {
    question: "Can I consult with a dermatologist before choosing a facial?",
    answer:
      "Yes, every skin facial starts with a complimentary 15-minute diagnostic skin analysis to customize products to your exact skin sensitivity and concerns.",
  },
  {
    question: "What payment methods do you accept at the salon?",
    answer:
      "We accept Cash, major Credit/Debit Cards, JazzCash, EasyPaisa, and Direct Bank Transfers.",
  },
];
