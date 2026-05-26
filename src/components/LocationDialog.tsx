"use client";

import { useEffect } from "react";
import { X, MapPin, Phone, Navigation2, ExternalLink } from "lucide-react";

interface LocationDialogProps {
  open: boolean;
  onClose: () => void;
}

const BUSINESS_NAME = "Sai Lakshmi Driving School";
const ADDRESS = "Kuntloor Road, Hayathnagar, Hyderabad – 501505";
const PHONE = "+91 98765 43210"; // TODO: replace with verified number

const MAPS_QUERY = encodeURIComponent(
  `${BUSINESS_NAME}, Kuntloor Road, Hayathnagar, Hyderabad`
);
const EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const VIEW_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

export default function LocationDialog({ open, onClose }: LocationDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-dialog-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close location dialog"
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-md cursor-default"
      ></button>

      {/* Dialog Card */}
      <div className="relative w-full max-w-3xl p-1.5 rounded-[2rem] bg-gradient-to-br from-amber-500/40 via-amber-300/15 to-amber-700/30 border border-amber-600/30 shadow-2xl">
        <div className="bg-stone-50 rounded-[calc(2rem-0.375rem)] overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between p-6 md:p-7 border-b border-amber-700/10">
            <div className="flex items-start gap-3 pr-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="inline-block text-[9px] uppercase tracking-[0.25em] font-bold text-amber-700 mb-1">
                  Visit Our Academy
                </span>
                <h2
                  id="location-dialog-title"
                  className="font-serif text-xl md:text-2xl font-semibold text-stone-900 leading-tight"
                >
                  {BUSINESS_NAME}
                </h2>
                <p className="text-xs text-stone-600 mt-1">{ADDRESS}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 transition-colors active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Embedded Map */}
          <div className="relative h-[300px] md:h-[380px] bg-stone-100">
            <iframe
              title={`${BUSINESS_NAME} on Google Maps`}
              src={EMBED_URL}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Actions */}
          <div className="p-6 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-3">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs font-semibold premium-transition shadow-md active:scale-[0.98]"
            >
              <span className="pl-3">Get Directions</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                <Navigation2 className="w-3.5 h-3.5" />
              </div>
            </a>

            <a
              href={VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 bg-white border border-amber-700/20 hover:border-amber-700/50 hover:bg-amber-50/60 text-stone-800 rounded-full text-xs font-semibold premium-transition active:scale-[0.98]"
            >
              <span className="pl-3">Open in Google Maps</span>
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
              </div>
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="group flex items-center justify-between p-3.5 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-xs font-semibold premium-transition shadow-md active:scale-[0.98]"
            >
              <span className="pl-3 truncate">{PHONE}</span>
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                <Phone className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
