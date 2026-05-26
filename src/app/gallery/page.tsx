"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Camera,
  Car,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = "all" | "fleet" | "roads" | "rto" | "students" | "campus";

interface Photo {
  id: number;
  title: string;
  caption: string;
  category: Exclude<Category, "all">;
  src: string;
  span?: "tall" | "wide" | "regular";
}

const photos: Photo[] = [
  {
    id: 1,
    title: "Hyderabad City Drive",
    caption: "Learner navigating Outer Ring Road peak-hour traffic.",
    category: "roads",
    src: "/gallery/hyderabad-city-drive.jpg",
    span: "wide",
  },
  {
    id: 2,
    title: "Auto-Rickshaw Awareness",
    caption: "Training around three-wheelers on Indian streets.",
    category: "roads",
    src: "/gallery/auto-rickshaw-awareness.jpg",
  },
  {
    id: 3,
    title: "Beginner Hatchback",
    caption: "Dual-control Maruti Alto fitted for new learners.",
    category: "fleet",
    src: "/gallery/beginner-hatchback.avif",
    span: "tall",
  },
  {
    id: 4,
    title: "Sedan Practice Sessions",
    caption: "Honda City lessons for highway entry & overtaking.",
    category: "fleet",
    src: "/gallery/sedan-practice-sessions.webp",
  },
  {
    id: 5,
    title: "RTO Test Day",
    caption: "A graduate at the regional RTO test ground.",
    category: "rto",
    src: "/gallery/rto-test-day.jpg",
  },
  {
    id: 6,
    title: "National Highway Drives",
    caption: "Long-distance highway driving sessions on NH-65.",
    category: "roads",
    src: "/gallery/national-highway-drives.jpg",
    span: "tall",
  },
  {
    id: 7,
    title: "Manual Transmission",
    caption: "Stick-shift training in our manual hatchback fleet.",
    category: "fleet",
    src: "/gallery/manual-transmission.jpg",
  },
  {
    id: 8,
    title: "Licence Day Joy",
    caption: "First-attempt RTO pass — proud graduates of our academy.",
    category: "students",
    src: "/gallery/licence-day-joy.jpg",
    span: "wide",
  },
  {
    id: 9,
    title: "Theory Classroom",
    caption: "Indian RTO traffic-rule lecture in our academy.",
    category: "campus",
    src: "/gallery/theory-classroom.jpg",
  },
  {
    id: 10,
    title: "Monsoon Driving Module",
    caption: "Hydroplaning & wet-grip training in the Hyderabad rains.",
    category: "roads",
    src: "/gallery/monsoon-driving-module.jpg",
  },
  {
    id: 11,
    title: "Reverse Parking Drill",
    caption: "Practice in our parking-skill obstacle course.",
    category: "campus",
    src: "/gallery/reverse-parking-drill.jpg",
    span: "tall",
  },
  {
    id: 12,
    title: "Night Driving Cert.",
    caption: "Headlight discipline and glare reduction practice.",
    category: "roads",
    src: "/gallery/night-driving-cert.jpg",
  },
  {
    id: 13,
    title: "Training Fleet Lineup",
    caption: "Our certified instructor cars ready for class.",
    category: "fleet",
    src: "/gallery/training-fleet-lineup.jpg",
    span: "wide",
  },
  {
    id: 14,
    title: "Mock RTO Briefing",
    caption: "Pre-test walkthrough of road-test patterns.",
    category: "rto",
    src: "/gallery/mock-rto-briefing.jpg",
  },
  {
    id: 15,
    title: "Indian Traffic Signs",
    caption: "Sign-recognition module — core to RTO theory prep.",
    category: "rto",
    src: "/gallery/indian-traffic-signs.png",
  },
];

const categoryMeta: { key: Category; label: string; icon: LucideIcon }[] = [
  { key: "all", label: "All Photos", icon: Sparkles },
  { key: "fleet", label: "Training Fleet", icon: Car },
  { key: "roads", label: "Indian Roads", icon: MapPin },
  { key: "rto", label: "RTO Prep", icon: ShieldCheck },
  { key: "students", label: "Our Students", icon: GraduationCap },
  { key: "campus", label: "Campus Life", icon: Camera },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="min-h-[100dvh] bg-stone-50 flex flex-col relative film-grain">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[60dvh] left-0 w-[400px] h-[400px] bg-amber-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* HERO */}
        <section className="pt-36 pb-12 bg-paisley-pattern relative">
          <div className="max-w-5xl mx-auto px-4 text-center animate-fade-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">
              <Camera className="w-3.5 h-3.5 text-amber-600" />
              <span>Academy Gallery</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight text-stone-900 leading-[1.05] mb-5">
              Moments from{" "}
              <span className="text-amber-600 italic">our driveway</span>
              <br />
              to your licence.
            </h1>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-[60ch] mx-auto mb-10">
              A glimpse of our training fleet, instructors, classrooms and the
              proud graduates we&apos;ve helped earn their RTO licence across
              India.
            </p>

            <div className="ornamental-divider text-[10px] uppercase tracking-[0.3em] font-semibold text-amber-700 max-w-md mx-auto">
              <span>{photos.length} Featured Photos</span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="pb-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {categoryMeta.map(({ key, label, icon: Icon }) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border premium-transition active:scale-[0.97] ${
                      isActive
                        ? "bg-stone-900 border-stone-900 text-white shadow-md"
                        : "bg-white border-amber-700/15 text-stone-700 hover:border-amber-700/40 hover:bg-amber-50/60"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* PHOTO GRID */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-5">
              {filtered.map((photo, idx) => {
                const spanClass =
                  photo.span === "tall"
                    ? "row-span-2"
                    : photo.span === "wide"
                    ? "sm:col-span-2"
                    : "";
                return (
                  <figure
                    key={photo.id}
                    className={`group relative overflow-hidden rounded-3xl border border-amber-700/10 shadow-sm hover:shadow-xl premium-transition animate-fade-up bg-stone-100 ${spanClass}`}
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Overlay gradient for caption legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/15 to-transparent"></div>

                    {/* Category chip top-left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block text-[9px] uppercase tracking-[0.25em] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm bg-white/80 text-stone-900">
                        {photo.category}
                      </span>
                    </div>

                    {/* Caption bottom */}
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white z-10">
                      <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-white/85 leading-relaxed max-w-[42ch]">
                        {photo.caption}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-stone-500 text-sm">
                No photos found in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* CTA BAND */}
        <section className="pb-28">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative p-1.5 rounded-[2.5rem] bg-gradient-to-br from-amber-500/30 via-amber-300/10 to-amber-700/20 border border-amber-600/20 shadow-xl">
              <div className="bg-white rounded-[calc(2.5rem-0.375rem)] p-10 md:p-14 text-center relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-amber-700/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative">
                  <div className="ornamental-divider text-[10px] uppercase tracking-[0.3em] font-semibold text-amber-700 max-w-xs mx-auto mb-6">
                    <span>Ready to Begin?</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-4">
                    Your story belongs in this gallery.
                  </h2>
                  <p className="text-sm text-stone-600 max-w-[50ch] mx-auto mb-8">
                    Join thousands of confident drivers across India who began
                    their journey at Sai Lakshmi Driving School.
                  </p>
                  <Link
                    href="/#scheduler"
                    className="group inline-flex items-center gap-2 px-7 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-sm font-semibold premium-transition shadow-lg active:scale-[0.98]"
                  >
                    <span>Book Your First Lesson</span>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Compact Footer */}
      <footer className="bg-stone-900 text-stone-500 py-10 text-center text-xs relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700"></div>
        <p>
          &copy; {new Date().getFullYear()} Sai Lakshmi Driving School. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
