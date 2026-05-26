"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Scheduler", href: "#scheduler" },
    { name: "Theory Prep", href: "#theory-prep" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center px-4 transition-all duration-500">
      <nav
        className={`w-full max-w-5xl rounded-full premium-transition ${
          scrolled 
            ? "mt-4 py-3 px-6 liquid-glass shadow-md" 
            : "mt-6 py-4 px-8 bg-transparent border-transparent"
        } flex items-center justify-between border`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)] group-hover:scale-105 premium-transition">
            <Shield className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight text-lg group-hover:text-emerald-600 premium-transition">
            Sai Lakshmi <span className="font-light text-slate-500">Driving</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#scheduler"
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium shadow-[0_10px_20px_-5px_rgba(15,23,42,0.15)] hover:bg-slate-800 hover:shadow-[0_10px_25px_-5px_rgba(15,23,42,0.25)] active:scale-[0.98] premium-transition"
          >
            <span>Book Lesson</span>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 premium-transition">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-[0.95] premium-transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-2xl md:hidden animate-fade-in flex flex-col justify-center px-8">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold text-white/95 hover:text-emerald-400 premium-transition"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#scheduler"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 mx-auto w-max group flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-base font-medium shadow-lg hover:shadow-xl active:scale-[0.98] premium-transition"
            >
              <span>Book Free Trial</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
