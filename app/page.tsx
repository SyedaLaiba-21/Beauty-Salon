import React from "react";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { FeaturedTreatments } from "@/components/sections/FeaturedTreatments";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Pricing } from "@/components/sections/Pricing";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { BookingForm } from "@/components/sections/BookingForm";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <FeaturedTreatments />
        <WhyChooseUs />
        <BeforeAfter />
        <Pricing />
        <Team />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <Contact />
        <BookingForm />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
