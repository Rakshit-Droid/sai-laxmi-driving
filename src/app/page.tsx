"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PackageSelector from "@/components/PackageSelector";
import BookingCalendar from "@/components/BookingCalendar";
import TheoryTest from "@/components/TheoryTest";
import LocationDialog from "@/components/LocationDialog";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Navigation,
  Award,
  Users,
  ThumbsUp,
  Star,
  MapPin,
  Car,
  Gauge,
  CircleDot,
} from "lucide-react";

export default function Home() {
  const [locationOpen, setLocationOpen] = useState(false);
  return (
    <div className="min-h-[100dvh] bg-stone-50 flex flex-col relative film-grain">
      {/* Decorative Blur Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[40dvh] left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-[100dvh] flex items-center pt-28 pb-16 relative overflow-hidden"
        >
          {/* Hero Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/hero-background.avif)" }}
            aria-hidden="true"
          ></div>
          {/* Warm cream + saffron gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50/92 via-stone-50/75 to-amber-50/82"></div>
          {/* Subtle paisley + grid pattern on top of overlay */}
          <div className="absolute inset-0 bg-grid-pattern bg-paisley-pattern opacity-70"></div>

          <div className="max-w-5xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-up">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>India&apos;s Trusted Driving Academy</span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[0.95] mb-6">
                Drive with skill.<br />
                Drive with<br />
                <span className="text-amber-600 italic">Indian wisdom.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-[52ch] mb-10">
                Traditional values, modern instruction. Expert RTO-certified
                training for beginners, adults and renewals — built around
                Indian roads, signals, and monsoon conditions.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#scheduler"
                  className="group flex items-center justify-between p-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs font-semibold premium-transition shadow-[0_10px_20px_-5px_rgba(28,25,23,0.2)] active:scale-[0.98]"
                >
                  <span className="pl-6 pr-4">Book Trial Lesson</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </a>

                <a
                  href="#theory-prep"
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-amber-700/20 bg-white hover:bg-amber-50/60 text-stone-700 rounded-full text-xs font-semibold premium-transition shadow-sm active:scale-[0.98]"
                >
                  <span>Practice RTO Mock Test</span>
                  <Navigation className="w-4 h-4 text-amber-600 rotate-90" />
                </a>
              </div>
            </div>

            {/* Hero Right Widget (Interactive Card Model - Double Bezel Architecture) */}
            <div
              className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-full max-w-sm p-1.5 rounded-[2.5rem] bg-amber-100/50 border border-amber-200/40 shadow-xl">
                {/* Double-Bezel Inner Core */}
                <div className="bg-white rounded-[calc(2.5rem-0.375rem)] p-8 shadow-sm flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                  {/* Decorative mesh background orb inside card */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/15 rounded-full blur-xl pointer-events-none"></div>

                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-stone-400">
                        Learner Progress Card
                      </span>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-ping"></div>
                    </div>

                    {/* Student Info */}
                    <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1">
                      Arjun Sharma
                    </h3>
                    <p className="text-xs text-stone-400 mb-6">
                      Enrollment: SLDA-9824-A
                    </p>

                    {/* Stats List inside Card */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <span className="text-xs text-stone-500">Instructor:</span>
                        <span className="text-xs font-bold text-stone-800">
                          Instr. Rajesh Kumar
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <span className="text-xs text-stone-500">
                          Hours Practiced:
                        </span>
                        <span className="text-xs font-bold text-stone-800">
                          14 / 20 Hours
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <span className="text-xs text-stone-500">
                          Licence Category:
                        </span>
                        <span className="text-xs font-bold text-stone-800">
                          LMV (Automatic)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar inside Card */}
                  <div className="mt-8">
                    <div className="flex justify-between items-baseline text-xs mb-2">
                      <span className="text-stone-400 font-medium">
                        RTO Readiness
                      </span>
                      <span className="font-bold text-amber-600">85% Complete</span>
                    </div>
                    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-700 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 bg-white border-y border-amber-700/10 relative">
          <div className="max-w-5xl mx-auto px-4">
            <div className="ornamental-divider mb-12 text-[10px] uppercase tracking-[0.3em] font-semibold text-amber-700">
              <span>Trusted Across India</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
                    98.7%
                  </h3>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mt-1">
                    RTO Test Pass Rate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
                    12,400+
                  </h3>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mt-1">
                    Licensed Graduates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
                    100%
                  </h3>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mt-1">
                    Satisfaction Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR FLEET / WHY CHOOSE US */}
        <section className="py-24 md:py-28 bg-stone-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mb-14 animate-fade-up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Our Training Fleet</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 leading-tight mb-4">
                Modern cars,<br />
                traditional values.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                Every learner trains on a dual-control vehicle maintained to
                showroom condition. Choose hatchback, sedan, or manual based on
                your licence goal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Maruti Suzuki Alto",
                  badge: "Beginner Hatchback",
                  desc: "Most popular learner car in India. Lightweight, easy clutch, perfect first-timer ride.",
                  specs: ["796 cc", "Petrol", "Manual / AMT"],
                  gradient:
                    "from-amber-100 via-amber-200/60 to-amber-300/40",
                  accent: "text-amber-800",
                  ring: "ring-amber-400/40",
                },
                {
                  title: "Maruti Suzuki Swift",
                  badge: "Manual Hatchback",
                  desc: "Crowd-favourite for stick-shift mastery. Gear sequencing & city navigation focus.",
                  specs: ["1197 cc", "Petrol", "5-speed Manual"],
                  gradient:
                    "from-rose-100 via-rose-200/60 to-rose-300/40",
                  accent: "text-rose-800",
                  ring: "ring-rose-400/40",
                },
                {
                  title: "Maruti Suzuki WagonR",
                  badge: "Refresher / Senior",
                  desc: "Tall-boy cabin with excellent visibility — ideal for adult and senior refresher learners.",
                  specs: ["1197 cc", "Petrol / CNG", "Manual"],
                  gradient:
                    "from-sky-100 via-sky-200/60 to-sky-300/40",
                  accent: "text-sky-800",
                  ring: "ring-sky-400/40",
                },
              ].map((car, idx) => (
                <div
                  key={car.title}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-amber-700/10 shadow-sm hover:shadow-xl premium-transition animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Illustrated header — gradient background + car icon */}
                  <div
                    className={`relative h-52 overflow-hidden bg-gradient-to-br ${car.gradient} flex items-center justify-center`}
                  >
                    {/* Decorative road stripes */}
                    <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 opacity-50">
                      <div className="h-0.5 w-6 bg-stone-700/30 rounded"></div>
                      <div className="h-0.5 w-6 bg-stone-700/30 rounded"></div>
                      <div className="h-0.5 w-6 bg-stone-700/30 rounded"></div>
                      <div className="h-0.5 w-6 bg-stone-700/30 rounded"></div>
                    </div>
                    {/* Decorative ring orbs */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full border-2 ${car.ring} pointer-events-none`}></div>
                    <div className={`absolute -bottom-12 -left-8 w-28 h-28 rounded-full border ${car.ring} pointer-events-none`}></div>

                    {/* Car icon — large, central */}
                    <Car
                      className={`w-24 h-24 ${car.accent} stroke-[1.25] relative z-10 group-hover:-translate-y-1 group-hover:scale-105 premium-transition`}
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-widest font-bold text-amber-700">
                      {car.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                      {car.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed mb-4">
                      {car.desc}
                    </p>
                    {/* Spec chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                      {car.specs.map((spec, i) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200 text-[10px] font-semibold text-stone-600"
                        >
                          {i === 0 ? (
                            <Gauge className="w-2.5 h-2.5 text-amber-600" />
                          ) : (
                            <CircleDot className="w-2.5 h-2.5 text-amber-600" />
                          )}
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGE SELECTOR */}
        <PackageSelector />

        {/* BOOKING CALENDAR */}
        <BookingCalendar />

        {/* THEORY MOCK TEST */}
        <TheoryTest />

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl mb-16 animate-fade-up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                <span>Verified Reviews</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 leading-tight mb-4">
                What our student community<br />
                has to say.
              </h2>
              <p className="text-base text-stone-500 leading-relaxed">
                Real experiences from learners across Hayathnagar, LB Nagar,
                Dilsukhnagar and greater Hyderabad who earned their licence
                with us.
              </p>
            </div>

            {/* Staggered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {[
                {
                  quote:
                    "I was incredibly nervous about city traffic and signal crossings as an adult learner. The instructor was exceptionally patient and used the dual-pedals to guide me safely until I gained full confidence.",
                  name: "Priya Menon",
                  role: "Adult Learner Program · Hayathnagar",
                  avatar:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
                  offset: "",
                },
                {
                  quote:
                    "My son completed the 20-hour package. The parent progress reports gave us complete peace of mind. He cleared his RTO driving test on the very first attempt!",
                  name: "Suresh Patel",
                  role: "Parent of Beginner Student · LB Nagar",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
                  offset: "md:translate-y-6",
                },
                {
                  quote:
                    "After not driving for six years, I needed a brush-up package before my licence renewal. The traffic navigation coaching was excellent and refreshed all my road awareness habits.",
                  name: "Vikram Nair",
                  role: "Refresher Course Graduate · Dilsukhnagar",
                  avatar:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
                  offset: "",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`p-6 rounded-3xl bg-stone-50 border border-amber-700/10 flex flex-col justify-between min-h-[240px] ${t.offset}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber-200/60 shrink-0 bg-amber-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-stone-900">
                        {t.name}
                      </h4>
                      <span className="text-[10px] text-stone-400">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 border-t border-amber-900/30 py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700"></div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-serif font-semibold text-white text-base tracking-tight">
                Sai Laxmi Motor Driving School
              </span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[35ch] mb-6">
              Licensed driver safety training. Empowers learners with road
              confidence, defensive technique, and RTO test readiness.
            </p>
            <span className="text-[10px] text-stone-600 block">
              &copy; {new Date().getFullYear()} Sai Laxmi Motor Driving
              School. All rights reserved.
            </span>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <Link href="/#home" className="hover:text-white transition-colors">
                Home Page
              </Link>
              <Link
                href="/#packages"
                className="hover:text-white transition-colors"
              >
                Lesson Programs
              </Link>
              <Link
                href="/#scheduler"
                className="hover:text-white transition-colors"
              >
                Live Scheduler
              </Link>
              <Link
                href="/#theory-prep"
                className="hover:text-white transition-colors"
              >
                RTO Practice Exam
              </Link>
              <Link
                href="/gallery"
                className="hover:text-white transition-colors"
              >
                Photo Gallery
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Contact Academy
            </h4>
            <div className="space-y-2.5 text-xs">
              <p>
                Hotline:{" "}
                <span className="text-white font-medium">+91 98765 43210</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span>Address:</span>
                <button
                  type="button"
                  onClick={() => setLocationOpen(true)}
                  className="text-left text-white font-medium hover:text-amber-300 transition-colors inline-flex items-start gap-1 group"
                >
                  <span className="underline underline-offset-4 decoration-amber-700/40 group-hover:decoration-amber-400">
                    Kuntloor Road, Hayathnagar, Hyderabad – 501505
                  </span>
                  <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-amber-400" />
                </button>
              </p>
              <p>
                Email:{" "}
                <span className="text-white font-medium">
                  contact@sailaxmimotor.in
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <LocationDialog
        open={locationOpen}
        onClose={() => setLocationOpen(false)}
      />
    </div>
  );
}
