"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { useNavbar } from "@/hooks/useNavbar";
import { useScrollActive } from "@/hooks/useScrollActive";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavbar();
  const activeSection = useScrollActive(NAV_LINKS.map((link) => link.href));

  return (
    <>
      <header
        className={cn(
          "w-full px-6 md:px-20 py-4 sticky top-0 z-50 transition-all duration-300 flex items-center justify-between",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : "bg-background/90 backdrop-blur-sm"
        )}
      >
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-primary hover:text-primary-container transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <FiMenu className="text-2xl" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-manrope text-xs font-semibold uppercase tracking-widest transition-colors hover:text-primary relative py-1",
                activeSection === link.href
                  ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center Brand Logo */}
        <Link
          href="#hero"
          className="font-playfair text-2xl md:text-3xl tracking-[0.2em] text-primary text-center font-normal"
        >
          BEAUTY
        </Link>

        {/* Right Desktop Nav Links + CTA Button */}
        <div className="flex items-center gap-6">
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.slice(5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-manrope text-xs font-semibold uppercase tracking-widest transition-colors hover:text-primary relative py-1",
                  activeSection === link.href
                    ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button href="#booking" size="md">
            BOOK NOW
          </Button>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-background z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30">
                  <span className="font-playfair text-2xl tracking-widest text-primary">
                    BEAUTY
                  </span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-primary hover:text-primary-container text-xl cursor-pointer"
                    aria-label="Close menu"
                  >
                    <FiX />
                  </button>
                </div>
                <nav className="flex flex-col gap-5 py-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "font-manrope text-sm font-semibold uppercase tracking-wider py-1 transition-colors",
                        activeSection === link.href
                          ? "text-primary font-bold"
                          : "text-secondary hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-outline-variant/30">
                <Button href="#booking" fullWidth onClick={closeMobileMenu}>
                  BOOK APPOINTMENT
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
