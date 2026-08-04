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
  phone: "+92 300 1234567",
  whatsapp: "+923001234567",
  email: "contact@beautysalon.com",
  address: "Block H3, Johar Town, Lahore, Pakistan",
  googleMapsUrl: "https://maps.google.com/?q=Lahore+Pakistan",
  facebookUrl: "https://facebook.com/beautysalon.official",
  instagramUrl: "https://instagram.com/beautysalon.official",
  tiktokUrl: "https://tiktok.com/@beautysalon.official",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG96E6SQodW2KWSot8yXuOmbzNC9HZNWj4B7wStCaU_LtBjxXkf54rpSv0SHRk5ZOKhzzTF8HJl7qoDzK51lX5sWkjx-Rf34Bsvw5lgC63gF8g0w0d93fVPAHpfPSVn2haQY3q5HLbWL8LF-iehVwjxpG41WnaaShhdNjm76xHepyFzW-0r5q3K94M5BJHMyW6-xXoFkTWQIdAIwzJHhJlCK4gH1R5QK2AKqbqcICbbGbPFu24ZjytAw",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiSovcWHfSP0T7Czc9CK6ZLDTPXGrMXGHBtzupq_OdXBPULPJ638p34CFZcobsRikpzpZePeU4FmI-pE__JCOQIdIlSm1Ny0tEJPxhiRCkrHuskCS7rmOQ1nJOiQtYzxyU9zZClmWZ16jWoIDTcPhXZDpmOG7v5om9_xmENS9JS3i9x0UToVaPfVOhCEiM4mGb0I712cCWzlnHbpvy8vrp4qG4xTPgrPOn_eoRihQgafxPEOfLBj79Bg",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9Ty6ut9DyY1_pt-iTxiauRzjm1bJuarV4_x59VSndzeJZoJA7A46L44FyR73X-786v8N7yQwTUu7ToIi_u7pMUDFZ82pa5_zBYvD8O8lK9X62IEMSru0INXk6nNl_h_CsEZDpNNee45vUo01CCXgZFPuKghhRfDKDWeaIcY3X5E8V2oOMd6LfzuwDFKn8zg_eATpozbipf9zPfvOTBhck68x19PXXeZrlqVVQthh33xXAjQHhzSlfQ",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfE2uTullGsz4_baQuRnlwqhLA2VpGMGlkV1R4en-sNd0JYGoEgQolWhqFClpVp6EYcv242Jh3CBTCFRldiND91CWLwnFMYamDQ1k_B7LicjVyntwyOo4xOpDh9_zEOoMzsDOn9yNPtOiqHmytjEziZtBfp3_FYN0hzXvuVlD1CEP6RbBy0nAQxC7KgahUXLAMYKbEzODuQ_g3dxkoM2zFuGsBg_BIWHq0KEYYyF9lFAblagD3iw_xg",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1_erP-h68sG3Rhye2V81JY_rkqv-vf_JXHdFFn85Pgdi16S9UY0-Ojda24ljhAe9DZ1hIKGM37uvNs4KYxuOYCPN4jpz8DAZkY13NepvbGvLK1oop9ty9J3dVaw4Wbb9FeKiOgIW6N0Jb1u5dek5xyxs1sfaC4PpQ7u3WkihE0l0NJpPklpZR0KS--7gjplG985lyfIYgrQkkyMlmkxoNanAu3BiUC76F_LsUyZ0QvYRE1a0rWtqlQ",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbQ_GZTAiKMQqoeGug1xlVGEzdDv0apjapA5dFNafFW9LOv_kNOIWIoiuxlZsuq3xpuxs_hmjSW8mhVIqoX7OUcqL1T1JFod9YYxn1PYkPi8Elg17G6PRBv0pvflPKx4VMcQx6sXV2IyaSp-HbKktSjnyd1pHIxLXKv_qWDYGJ8ZO1-fjpwukPwldMyot_pjWjiHh14cIDjgaS7z4UlLwcF0Z8O_YxYnybxD4POb3wBygV4WK5aJuKnQ",
    alt: "Luxury beauty products boutique collection preview",
  },
];

export const INNER_PAGES_TEMPLATES = [
  {
    title: "About Us",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN1VIJqmq3weDBGdWdGV0-i3EeCvhMIS9mB-EVy-riDlMF-c6CuSs5jg6ifo0o7RPBeywCWpd_3ezURj1GCXzS1c9zjRpA_QBA0Z46msIAng_sJeGZC54JeNYULAf_gOT-Ed3-JCzyOqDQ0mkIxcNBgMbRXoevBngdMJaNf7a_duyY44bMmCbzDuVW6fL0vM02ODZms7R5rvR5ObfvHlc9fddtxmqW9Dafn-rqwM3rR69MFni7BBbnPw",
    alt: "About Us luxury page mockup",
  },
  {
    title: "Our Team",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEQRYbWofjTLSjQjAPUmx7YYRmlsLzozPGFAIYqBwFPvM6OFWQiyaoMnTdbfk7EJMNXEMnnNfgkW3b5-7rnwnDIZtEjMck-vOudL1QONIzKMl-5E7c4avVtoUZ2sjfX1GChis3tA5rAWSiegmznhAbWOkxAbukA30sicwHjdoqtgjK_fAstcUVNsUT3R3zPtXJOvoxG0zW2qWr1fhqi0LViglVrdER8ysH-Z7ebnLBQPllQT1YaFcS1A",
    alt: "Our Team beauty experts template mockup",
  },
  {
    title: "Our Services",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxxvavI2DMR_yLX097D79AFNxEWzVxC3-kR-TcAEe1Yq5DZEEB3RBmyxof1IncYImeqKm83h58PbMVL6GS6eP29p__jDNVWL9jz4xkc3Et9I6radOVis8hMLYVZxFhR4DHwRuFB-gmkPh045b1eauuD-_hgjRJ7MeEh26lqLZMdG2AzSdFfdJR-0ouQQzS1tr4_j0oDZVd4qx0pccC--dVoPWaP4tAdRCyDbUGTChlBhY8oWb6phS9Cg",
    alt: "Our Services inner page menu mockup",
  },
  {
    title: "Coming Soon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2aHFjtNqs4nWbVTQQe4WU1utuM0IEswkhwFkkitQvJqFgTuYIHjgbpQjaQqrqOQPCwx4X8XoSy4eL6VyDuAV0HL0HhiCXdV3ra3bHQfKtKJ8GMixKon0jt8hMaWKV6u7tmo_J4KKz3Y8MY4AvPab6S42puC4XLYw2hESG7fJLftcuM4fbFmrXF4XEW9GcWnvGE7EnHNNd8DAHMD_qiLbl9cvNhuv9jA-eaFDY2CVTi0-DnKJEHxMHdA",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1_erP-h68sG3Rhye2V81JY_rkqv-vf_JXHdFFn85Pgdi16S9UY0-Ojda24ljhAe9DZ1hIKGM37uvNs4KYxuOYCPN4jpz8DAZkY13NepvbGvLK1oop9ty9J3dVaw4Wbb9FeKiOgIW6N0Jb1u5dek5xyxs1sfaC4PpQ7u3WkihE0l0NJpPklpZR0KS--7gjplG985lyfIYgrQkkyMlmkxoNanAu3BiUC76F_LsUyZ0QvYRE1a0rWtqlQ",
    bio: "12+ years experience in clinical skincare, anti-aging therapies, and precision laser aesthetics.",
    socials: { instagram: "#", facebook: "#" },
  },
  {
    id: "zara-khan",
    name: "Zara Khan",
    role: "Senior Bridal & Glam Artist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9Ty6ut9DyY1_pt-iTxiauRzjm1bJuarV4_x59VSndzeJZoJA7A46L44FyR73X-786v8N7yQwTUu7ToIi_u7pMUDFZ82pa5_zBYvD8O8lK9X62IEMSru0INXk6nNl_h_CsEZDpNNee45vUo01CCXgZFPuKghhRfDKDWeaIcY3X5E8V2oOMd6LfzuwDFKn8zg_eATpozbipf9zPfvOTBhck68x19PXXeZrlqVVQthh33xXAjQHhzSlfQ",
    bio: "Celebrity makeup artist specializing in soft glam, airbrush bridal perfection, and modern trends.",
    socials: { instagram: "#", facebook: "#" },
  },
  {
    id: "sophia-malik",
    name: "Sophia Malik",
    role: "Master Spa Therapist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiSovcWHfSP0T7Czc9CK6ZLDTPXGrMXGHBtzupq_OdXBPULPJ638p34CFZcobsRikpzpZePeU4FmI-pE__JCOQIdIlSm1Ny0tEJPxhiRCkrHuskCS7rmOQ1nJOiQtYzxyU9zZClmWZ16jWoIDTcPhXZDpmOG7v5om9_xmENS9JS3i9x0UToVaPfVOhCEiM4mGb0I712cCWzlnHbpvy8vrp4qG4xTPgrPOn_eoRihQgafxPEOfLBj79Bg",
    bio: "Certified holistic wellness practitioner specializing in hot stone massage and aromatherapy detox.",
    socials: { instagram: "#", facebook: "#" },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Senior Nail & Art Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfE2uTullGsz4_baQuRnlwqhLA2VpGMGlkV1R4en-sNd0JYGoEgQolWhqFClpVp6EYcv242Jh3CBTCFRldiND91CWLwnFMYamDQ1k_B7LicjVyntwyOo4xOpDh9_zEOoMzsDOn9yNPtOiqHmytjEziZtBfp3_FYN0hzXvuVlD1CEP6RbBy0nAQxC7KgahUXLAMYKbEzODuQ_g3dxkoM2zFuGsBg_BIWHq0KEYYyF9lFAblagD3iw_xg",
    bio: "Expert in Russian hardware manicures, sculptured acrylics, and minimalist aesthetic nail art.",
    socials: { instagram: "#", facebook: "#" },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Mariam Tariq",
    role: "Bridal Client",
    service: "Signature Bridal Glow & Glam",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG96E6SQodW2KWSot8yXuOmbzNC9HZNWj4B7wStCaU_LtBjxXkf54rpSv0SHRk5ZOKhzzTF8HJl7qoDzK51lX5sWkjx-Rf34Bsvw5lgC63gF8g0w0d93fVPAHpfPSVn2haQY3q5HLbWL8LF-iehVwjxpG41WnaaShhdNjm76xHepyFzW-0r5q3K94M5BJHMyW6-xXoFkTWQIdAIwzJHhJlCK4gH1R5QK2AKqbqcICbbGbPFu24ZjytAw",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfE2uTullGsz4_baQuRnlwqhLA2VpGMGlkV1R4en-sNd0JYGoEgQolWhqFClpVp6EYcv242Jh3CBTCFRldiND91CWLwnFMYamDQ1k_B7LicjVyntwyOo4xOpDh9_zEOoMzsDOn9yNPtOiqHmytjEziZtBfp3_FYN0hzXvuVlD1CEP6RbBy0nAQxC7KgahUXLAMYKbEzODuQ_g3dxkoM2zFuGsBg_BIWHq0KEYYyF9lFAblagD3iw_xg",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1_erP-h68sG3Rhye2V81JY_rkqv-vf_JXHdFFn85Pgdi16S9UY0-Ojda24ljhAe9DZ1hIKGM37uvNs4KYxuOYCPN4jpz8DAZkY13NepvbGvLK1oop9ty9J3dVaw4Wbb9FeKiOgIW6N0Jb1u5dek5xyxs1sfaC4PpQ7u3WkihE0l0NJpPklpZR0KS--7gjplG985lyfIYgrQkkyMlmkxoNanAu3BiUC76F_LsUyZ0QvYRE1a0rWtqlQ",
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
