"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MapPin } from "lucide-react";
import LocationDialog from "./LocationDialog";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Packages", href: "/#packages" },
    { name: "Scheduler", href: "/#scheduler" },
    { name: "Theory Prep", href: "/#theory-prep" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-stone-50 shadow-[0_4px_24px_-12px_rgba(28,25,23,0.18)] border-b border-stone-200/80"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between premium-transition ${
          scrolled ? "py-3 px-5 lg:px-8" : "py-4 px-5 lg:px-8"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-11 h-11 rounded-full bg-stone-900 flex items-center justify-center overflow-hidden shadow-[0_4px_14px_rgba(28,25,23,0.25)] group-hover:scale-105 premium-transition shrink-0 ring-1 ring-amber-600/30 relative">
            {logoFailed ? (
              <span className="font-serif font-bold text-amber-400 text-base tracking-tighter leading-none select-none">
                SL
              </span>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/logo.png"
                alt="Sai Lakshmi Driving School"
                className="w-full h-full object-cover"
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-semibold text-stone-900 tracking-tight text-base lg:text-lg whitespace-nowrap group-hover:text-amber-700 premium-transition">
              Sai Lakshmi
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium whitespace-nowrap">
              Driving School · Hayathnagar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-300 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setLocationOpen(true)}
            className="group flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-amber-700/20 hover:border-amber-700/50 hover:bg-amber-50/60 text-stone-800 rounded-full text-sm font-medium premium-transition active:scale-[0.98] whitespace-nowrap"
            aria-label="View academy location on Google Maps"
          >
            <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Visit Us</span>
          </button>
          <Link
            href="/#scheduler"
            className="group relative flex items-center gap-1.5 pl-4 pr-2 py-2 bg-stone-900 text-white rounded-full text-sm font-medium shadow-[0_10px_20px_-5px_rgba(28,25,23,0.18)] hover:bg-stone-800 active:scale-[0.98] premium-transition whitespace-nowrap"
          >
            <span>Book Lesson</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 premium-transition">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 active:scale-[0.95] premium-transition shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-950/97 lg:hidden animate-fade-in flex flex-col justify-center px-8">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl font-semibold text-white/95 hover:text-amber-400 premium-transition"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setLocationOpen(true);
              }}
              className="mt-2 mx-auto inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/15 premium-transition"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Our Academy</span>
            </button>
            <Link
              href="/#scheduler"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 mx-auto w-max group flex items-center gap-2 px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-base font-medium shadow-lg hover:shadow-xl active:scale-[0.98] premium-transition"
            >
              <span>Book Free Trial</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      )}

      <LocationDialog
        open={locationOpen}
        onClose={() => setLocationOpen(false)}
      />
    </header>
  );
}
