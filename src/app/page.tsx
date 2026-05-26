"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PackageSelector from "@/components/PackageSelector";
import BookingCalendar from "@/components/BookingCalendar";
import TheoryTest from "@/components/TheoryTest";
import { ArrowRight, ShieldCheck, Sparkles, Navigation, Award, Users, ThumbsUp, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col relative film-grain">
      {/* Decorative Blur Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[40dvh] left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[100dvh] flex items-center pt-28 pb-16 bg-grid-pattern relative">
          <div className="max-w-5xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-up">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Premier Driving Academy</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.9] mb-6">
                Learn safety.<br />
                Drive with<br />
                <span className="text-emerald-600">absolute control.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-[50ch] mb-10">
                Premium, modern instruction for beginner drivers, adult learners, and safety refreshers. Master parallel parking, highway entry, and defensive techniques.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#scheduler"
                  className="group flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold premium-transition shadow-[0_10px_20px_-5px_rgba(15,23,42,0.15)] active:scale-[0.98]"
                >
                  <span className="pl-6 pr-4">Book Trial Lesson</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 premium-transition">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </a>

                <a
                  href="#theory-prep"
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-full text-xs font-semibold premium-transition shadow-sm active:scale-[0.98]"
                >
                  <span>Practice Mock Test</span>
                  <Navigation className="w-4 h-4 text-slate-400 rotate-90" />
                </a>
              </div>
            </div>

            {/* Hero Right Widget (Interactive Card Model - Double Bezel Architecture) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-full max-w-sm p-1.5 rounded-[2.5rem] bg-slate-200/40 border border-slate-300/20 shadow-xl">
                {/* Double-Bezel Inner Core */}
                <div className="bg-white rounded-[calc(2.5rem-0.375rem)] p-8 shadow-sm flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                  {/* Decorative mesh background orb inside card */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>

                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-slate-400">Driver Progress Card</span>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></div>
                    </div>

                    {/* Student Info */}
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Arjun Sharma</h3>
                    <p className="text-xs text-slate-400 mb-6">Enrollment: SA-9824-A</p>

                    {/* Stats List inside Card */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs text-slate-500">Instructor:</span>
                        <span className="text-xs font-bold text-slate-800">Instr. Rajesh Kumar</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs text-slate-500">Hours Practiced:</span>
                        <span className="text-xs font-bold text-slate-800">14 / 20 Hours</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs text-slate-500">Transmission preference:</span>
                        <span className="text-xs font-bold text-slate-800">Automatic Gear</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar inside Card */}
                  <div className="mt-8">
                    <div className="flex justify-between items-baseline text-xs mb-2">
                      <span className="text-slate-400 font-medium">Road Readiness</span>
                      <span className="font-bold text-emerald-600">85% Complete</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 bg-white border-y border-slate-200/50">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">98.7%</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Official Test Pass Rate</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">12,400+</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Graduated Students</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">100%</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Satisfaction Guarantee</p>
              </div>
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>Verified Reviews</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
                What our student community has to say.
              </h2>
              <p className="text-base text-slate-500 leading-relaxed">
                Discover the actual learning experiences of real driving graduates who rebuilt their confidence on the road.
              </p>
            </div>

            {/* Staggered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Review 1 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/50 flex flex-col justify-between min-h-[220px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  &quot;I was incredibly nervous about city traffic and signal crossings as an adult learner. The instructor was exceptionally patient and used the dual-pedals to guide me safely until I gained full confidence.&quot;
                </p>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Priya Menon</h4>
                  <span className="text-[10px] text-slate-400">Adult Learner Program</span>
                </div>
              </div>

              {/* Review 2 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/50 flex flex-col justify-between min-h-[220px] md:translate-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  &quot;My son completed the 20-hour package. The parent progress reports gave us complete peace of mind. He cleared his RTO driving test on the very first attempt!&quot;
                </p>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Suresh Patel</h4>
                  <span className="text-[10px] text-slate-400">Parent of Teen Elite Student</span>
                </div>
              </div>

              {/* Review 3 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/50 flex flex-col justify-between min-h-[220px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  &quot;After not driving for six years, I needed a brush-up package before my licence renewal. The traffic navigation coaching was excellent and refreshed all my road awareness habits.&quot;
                </p>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Vikram Nair</h4>
                  <span className="text-[10px] text-slate-400">Refresher Course Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">Sai Lakshmi Driving</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[35ch] mb-6">
              Licensed driver safety training. Empowers rookie drivers with road confidence, defense mechanics, and official test readiness.
            </p>
            <span className="text-[10px] text-slate-600 block">
              &copy; {new Date().getFullYear()} Sai Lakshmi Driving Academy. All rights reserved.
            </span>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Navigation</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a href="#home" className="hover:text-white transition-colors">Home Page</a>
              <a href="#packages" className="hover:text-white transition-colors">Lesson Programs</a>
              <a href="#scheduler" className="hover:text-white transition-colors">Live Scheduler</a>
              <a href="#theory-prep" className="hover:text-white transition-colors">RTO Practice Exam</a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact Academy</h4>
            <div className="space-y-2.5 text-xs">
              <p>Hotline: <span className="text-white font-medium">+91 98765 43210</span></p>
              <p>Address: <span className="text-white font-medium">12, MG Road, Near RTO Office, Bengaluru</span></p>
              <p>Email: <span className="text-white font-medium">support@sailakshmidriving.com</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
