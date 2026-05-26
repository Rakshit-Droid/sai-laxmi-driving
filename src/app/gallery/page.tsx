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

type Category =
  | "all"
  | "fleet"
  | "roads"
  | "rto"
  | "students"
  | "campus";

interface Photo {
  id: number;
  src: string;
  title: string;
  caption: string;
  category: Exclude<Category, "all">;
  span?: "tall" | "wide" | "regular";
}

/**
 * Stock photography sourced from Unsplash (India-related search corpus).
 * For production launch, replace with original photos of the actual academy.
 */
const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605302845526-c2c5f1c6e0e7?auto=format&fit=crop&w=1200&q=80",
    title: "Bengaluru City Drive",
    caption: "Learner navigating MG Road peak-hour traffic.",
    category: "roads",
    span: "wide",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1597149961419-3cf4a45b14db?auto=format&fit=crop&w=900&q=80",
    title: "Auto-Rickshaw Awareness",
    caption: "Training around three-wheelers on Indian streets.",
    category: "roads",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    title: "Our Training Hatchback",
    caption: "Dual-control Maruti Swift fitted for new learners.",
    category: "fleet",
    span: "tall",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=900&q=80",
    title: "Sedan Highway Practice",
    caption: "Honda City lessons for highway entry & overtaking.",
    category: "fleet",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1542228262-3d663b306a53?auto=format&fit=crop&w=900&q=80",
    title: "RTO Test Day",
    caption: "A graduate at the regional RTO test ground.",
    category: "rto",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517941875044-cd5b53524b87?auto=format&fit=crop&w=900&q=80",
    title: "Indian National Highway",
    caption: "NH-48 long-distance driving session.",
    category: "roads",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    title: "Manual Transmission Class",
    caption: "Stick-shift training in our manual sedan.",
    category: "fleet",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1583416750470-9608b9caa0ba?auto=format&fit=crop&w=900&q=80",
    title: "Licence Day Joy",
    caption: "Priya receiving her LMV licence — first attempt pass.",
    category: "students",
    span: "wide",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
    title: "Theory Classroom",
    caption: "Indian traffic-rule lecture inside our academy.",
    category: "campus",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
    title: "Monsoon Driving Module",
    caption: "Hydroplaning & wet-grip training in the rains.",
    category: "roads",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1605164598696-25ac8e9c8ce5?auto=format&fit=crop&w=900&q=80",
    title: "Reverse Parking Drill",
    caption: "Practice in our parking-skill obstacle course.",
    category: "campus",
    span: "tall",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80",
    title: "Night Driving Cert.",
    caption: "Headlight handling and glare reduction practice.",
    category: "roads",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    title: "Highway Fleet",
    caption: "Our certified instructor cars lined up for class.",
    category: "fleet",
    span: "wide",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    title: "Mock RTO Briefing",
    caption: "Pre-test walkthrough of road-test patterns.",
    category: "rto",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=80",
    title: "Senior Refresher Group",
    caption: "Refresher batch graduates after their final session.",
    category: "students",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1591019479261-1a103585c559?auto=format&fit=crop&w=900&q=80",
    title: "Academy Reception",
    caption: "Welcome desk at our Bengaluru head campus.",
    category: "campus",
  },
];

const categoryMeta: { key: Category; label: string; icon: typeof Car }[] = [
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[60dvh] left-0 w-[400px] h-[400px] bg-amber-700/10 rounded-full blur-[100px] pointer-events-none"></div>

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
              <span>16 Featured Photos</span>
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
                    className={`group relative overflow-hidden rounded-3xl border border-amber-700/10 bg-stone-100 shadow-sm hover:shadow-xl premium-transition animate-fade-up ${spanClass}`}
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Caption */}
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="inline-block text-[9px] uppercase tracking-[0.25em] font-semibold text-amber-300 mb-1.5">
                        {photo.category}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed max-w-[42ch]">
                        {photo.caption}
                      </p>
                    </figcaption>

                    {/* Corner ornament */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Camera className="w-3.5 h-3.5 text-white" />
                    </div>
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
                    their journey at Sai Lakshmi Driving Academy.
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
          &copy; {new Date().getFullYear()} Sai Lakshmi Driving Academy. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
