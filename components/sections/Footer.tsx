"use client";

import React from "react";
import Link from "next/link";
import { SITE_INFO } from "@/lib/constants";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center gap-8 px-6 md:px-20 py-16 w-full text-center bg-primary text-on-primary border-t border-on-primary/10">
      {/* Brand Title */}
      <Link
        href="#hero"
        className="font-playfair text-3xl md:text-4xl text-on-primary tracking-[0.25em] font-normal hover:opacity-90 transition-opacity"
      >
        BEAUTY
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 my-2">
        <Link
          href="#services"
          className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-on-primary/70 hover:text-on-primary transition-colors"
        >
          SERVICES
        </Link>
        <Link
          href="#gallery"
          className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-on-primary/70 hover:text-on-primary transition-colors"
        >
          GALLERY
        </Link>
        <Link
          href="#pricing"
          className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-on-primary/70 hover:text-on-primary transition-colors"
        >
          PRICING
        </Link>
        <Link
          href="#experts"
          className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-on-primary/70 hover:text-on-primary transition-colors"
        >
          OUR EXPERTS
        </Link>
        <Link
          href="#contact"
          className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-on-primary/70 hover:text-on-primary transition-colors"
        >
          CONTACT US
        </Link>
      </nav>

      {/* Social Media Links */}
      <div className="flex items-center gap-6 text-on-primary/80 text-lg">
        <a
          href={SITE_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-on-primary hover:scale-125 transition-all"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href={SITE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-on-primary hover:scale-125 transition-all"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href={SITE_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-on-primary hover:scale-125 transition-all"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={`https://wa.me/${SITE_INFO.whatsapp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-on-primary hover:scale-125 transition-all"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright Notice */}
      <p className="font-manrope text-xs text-on-primary/50 tracking-wider">
        © {new Date().getFullYear()} BEAUTY &amp; HEALTH MODERN AESTHETICS. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};
