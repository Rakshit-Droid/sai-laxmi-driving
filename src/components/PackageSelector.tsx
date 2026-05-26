"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Star, Clock, ShieldCheck, BadgePercent } from "lucide-react";

interface Package {
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  tag: string;
}

export default function PackageSelector() {
  const [activeTab, setActiveTab] = useState<"teens" | "adults" | "renewals">("teens");

  const packagesData: Record<"teens" | "adults" | "renewals", Package[]> = {
    teens: [
      {
        name: "Beginner Starter",
        price: 5999,
        duration: "10 Hours",
        description: "Perfect introduction to road basics and dual-control confidence.",
        features: [
          "Dual-controlled automatic/manual vehicles",
          "Parent progress reports after each session",
          "RTO mock theory test simulator access",
          "Pick-up and drop-off service included",
        ],
        tag: "Recommended for beginners",
      },
      {
        name: "Elite LMV Champion",
        price: 11999,
        duration: "20 Hours",
        description: "Comprehensive package from zero experience to RTO licence ready.",
        features: [
          "Complete RTO road test blueprint training",
          "Highway & night driving certification",
          "3 Mock road tests with certified instructors",
          "Use of academy car for RTO road test",
          "Defensive driving core module",
        ],
        popular: true,
        tag: "Best value",
      },
    ],
    adults: [
      {
        name: "Adult Fast-Track",
        price: 4999,
        duration: "8 Hours",
        description: "Designed for busy professionals needing focused practice slots.",
        features: [
          "Flexible early morning & late evening slots",
          "Nervous-driver desensitization coaching",
          "City traffic, signals & intersection mastery",
          "Parallel parking and reverse parking focus",
        ],
        tag: "Efficient & focused",
      },
      {
        name: "Adult Complete Safety",
        price: 9999,
        duration: "16 Hours",
        description: "Deep dive road mastery ensuring full control and defensive driving skills.",
        features: [
          "Highway entry/exit and overtaking practice",
          "Monsoon & night driving techniques",
          "Mock RTO road test simulator analysis",
          "Use of academy car for official RTO test",
          "Lifetime safe driving guidebook",
        ],
        popular: true,
        tag: "Most popular",
      },
    ],
    renewals: [
      {
        name: "Quick Refresher",
        price: 2499,
        duration: "3 Hours",
        description: "Quick tuning for returning drivers or licence renewal brush-ups.",
        features: [
          "Updated Indian traffic laws briefing",
          "Parking review and manoeuvre test",
          "Standard hazard prevention assessment",
        ],
        tag: "Fast brush-up",
      },
      {
        name: "Senior Confidence",
        price: 4499,
        duration: "6 Hours",
        description: "Gentle pacing designed to restore full driving ease and control.",
        features: [
          "Modern driver-assist tech walkthrough",
          "Low-stress city navigation coaching",
          "Vision and reflex adaptation tips",
          "Defensive manoeuvres review",
        ],
        popular: true,
        tag: "Rebuild ease",
      },
    ],
  };

  const currentPackages = packagesData[activeTab];

  return (
    <section id="packages" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="max-w-2xl mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
            <BadgePercent className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pricing Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Curated plans tailored to your specific road goals.
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Choose your profile below to reveal structured curricula built around your current experience level. No surprise charges.
          </p>
        </div>

        {/* Tab Selector Button Container using Double-Bezel Architecture */}
        <div className="w-full max-w-md mx-auto mb-16 p-1.5 rounded-full bg-slate-200/50 border border-slate-300/30 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
          {(["teens", "adults", "renewals"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center text-xs font-semibold rounded-full uppercase tracking-wider transition-all duration-300 active:scale-[0.96] ${
                activeTab === tab
                  ? "bg-white text-slate-950 shadow-sm border border-slate-200/60"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {tab === "teens" && "Beginners"}
              {tab === "adults" && "Adults"}
              {tab === "renewals" && "Renewal"}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {currentPackages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-1.5 rounded-[2rem] premium-transition ${
                pkg.popular 
                  ? "bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 shadow-lg shadow-emerald-500/5" 
                  : "bg-slate-200/40 border border-slate-300/20"
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Double-Bezel Inner Core */}
              <div className="flex-1 bg-white rounded-[calc(2rem-0.375rem)] p-8 md:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] uppercase tracking-widest font-bold py-1.5 px-4 rounded-bl-xl flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Popular Selection</span>
                  </div>
                )}

                <div>
                  {/* Category Label */}
                  <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest block mb-2">
                    {pkg.tag}
                  </span>

                  {/* Package Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{pkg.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">₹{pkg.price.toLocaleString("en-IN")}</span>
                    <span className="text-slate-400 text-sm font-medium">/ complete pack</span>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-slate-100 w-full mb-8"></div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">What is included</p>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <a
                  href="#scheduler"
                  className={`group w-full flex items-center justify-between p-3.5 rounded-full text-xs font-semibold premium-transition active:scale-[0.98] ${
                    pkg.popular
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                  }`}
                >
                  <span className="pl-4">Enlist in Program</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center premium-transition ${
                    pkg.popular ? "bg-white/10 group-hover:translate-x-1" : "bg-slate-200/50 group-hover:translate-x-1"
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Assurance Banner */}
        <div className="mt-16 max-w-3xl mx-auto rounded-3xl p-6 bg-emerald-600/5 border border-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need a customized learning program?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Talk to our lead safety advisor to build a personal driving curriculum matching your schedule.</p>
            </div>
          </div>
          <a href="#scheduler" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-4 shrink-0 transition-colors">
            Consult Safety Instructor
          </a>
        </div>
      </div>
    </section>
  );
}
