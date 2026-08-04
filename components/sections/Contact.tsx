"use client";

import React from "react";
import { SITE_INFO } from "@/lib/constants";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info & Details */}
        <div className="flex flex-col gap-6">
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-outline">
            REACH OUT TO US
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-primary leading-tight">
            Visit Our <span className="italic text-surface-tint">Luxury</span> Salon Studio
          </h2>
          <p className="font-manrope text-base text-on-surface-variant leading-relaxed max-w-lg">
            Have questions about our signature treatments or bridal reservations?
            Contact our dedicated reception desk or drop by our studio.
          </p>

          <div className="flex flex-col gap-4 my-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary text-xl rounded-xs shrink-0">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-playfair text-lg text-primary">Location</h4>
                <p className="font-manrope text-sm text-on-surface-variant">
                  {SITE_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary text-xl rounded-xs shrink-0">
                <FiPhone />
              </div>
              <div>
                <h4 className="font-playfair text-lg text-primary">Call Us</h4>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="font-manrope text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {SITE_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary text-xl rounded-xs shrink-0">
                <FiMail />
              </div>
              <div>
                <h4 className="font-playfair text-lg text-primary">Email Us</h4>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="font-manrope text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary text-xl rounded-xs shrink-0">
                <FiClock />
              </div>
              <div>
                <h4 className="font-playfair text-lg text-primary">Business Hours</h4>
                <p className="font-manrope text-sm text-on-surface-variant">
                  Monday – Sunday: 10:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Button
              href={`https://wa.me/${SITE_INFO.whatsapp.replace("+", "")}`}
              variant="outline"
              size="md"
            >
              <span className="flex items-center gap-2">
                <FaWhatsapp className="text-emerald-600 text-lg" />
                <span>WHATSAPP US</span>
              </span>
            </Button>
            <Button href={`tel:${SITE_INFO.phone}`} size="md">
              CALL NOW
            </Button>
          </div>
        </div>

        {/* Embedded Google Maps View */}
        <div className="w-full aspect-[4/3] bg-surface-container border border-outline-variant/30 overflow-hidden relative shadow-md">
          <iframe
            title="Salon Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.160166292523!2d74.2750!3d31.4680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b8c9%3A0x4a180122e2bbd8e!2sJohar%20Town%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
