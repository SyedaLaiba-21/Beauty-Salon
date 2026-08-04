"use client";

import React from "react";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { SITE_INFO } from "@/lib/constants";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-primary text-on-primary text-xs py-2.5 px-4 font-manrope transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="bg-inverse-primary text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
            Special Offer
          </span>
          <span className="text-on-primary/90 font-medium">
            Get 20% off on your first HydraFacial & Spa Treatment!
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-on-primary/80">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-inverse-primary" />
            <span>Mon - Sun: 10:00 AM - 09:00 PM</span>
          </div>
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-on-primary transition-colors"
          >
            <FiPhoneCall className="text-inverse-primary" />
            <span>{SITE_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
