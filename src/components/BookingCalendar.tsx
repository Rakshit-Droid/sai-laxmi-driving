"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, ChevronRight, User, Mail, Phone, Car, CheckCircle } from "lucide-react";

interface Slot {
  id: string;
  time: string;
  available: boolean;
}

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<number>(0); // 0-6 index
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [transmission, setTransmission] = useState<"auto" | "manual">("auto");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Generate next 7 days starting from tomorrow
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      dayName: d.toLocaleDateString("en-IN", { weekday: "short" }),
      dayNumber: d.getDate(),
      month: d.toLocaleDateString("en-IN", { month: "short" }),
      formatted: d.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" }),
    };
  });

  const timeSlots: Slot[] = [
    { id: "s1", time: "09:00 AM", available: true },
    { id: "s2", time: "11:00 AM", available: true },
    { id: "s3", time: "02:00 PM", available: true },
    { id: "s4", time: "04:30 PM", available: false }, // Mocking one unavailable slot
    { id: "s5", time: "06:30 PM", available: true },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!selectedTime) {
      newErrors.time = "Please select a time slot.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <section id="scheduler" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Information Column (Left) */}
          <div className="lg:col-span-5 animate-fade-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
              <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>Realtime Scheduler</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Lock in your first session in seconds.
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              Select your preferred day, hour, and car preference. Our digital scheduling engine syncs directly with available vehicles and certified safety instructors in your area.
            </p>

            {/* Structured details checklist */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Choose Dual-Control Car</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Learn in modern sedans fitted with state-of-the-art dual pedals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Flexible 24-Hour Rescheduling</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Cancel or move sessions up to 24 hours prior without cancellation fees.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Calendar Card Column (Right) */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              /* Success State with spring animate entry */
              <div className="bg-slate-50 border border-amber-500/10 rounded-[2.5rem] p-8 md:p-12 text-center diffused-shadow transition-all duration-700 animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Lesson Slot Requested!</h3>
                <p className="text-sm text-slate-500 max-w-[40ch] mx-auto mb-8">
                  We have reserved your slot for **{days[selectedDate].formatted}** at **{selectedTime}** ({transmission === "auto" ? "Automatic" : "Manual"}).
                </p>

                {/* Simulated live status card */}
                <div className="bg-white rounded-2xl p-6 text-left max-w-sm mx-auto shadow-sm border border-slate-200/50 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Reservation Status</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-bold uppercase tracking-wider animate-pulse">
                      Processing
                    </span>
                  </div>
                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Student:</span>
                      <span className="font-semibold text-slate-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Date:</span>
                      <span className="font-semibold text-slate-900">{days[selectedDate].dayName}, {days[selectedDate].month} {days[selectedDate].dayNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Time:</span>
                      <span className="font-semibold text-slate-900">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gear:</span>
                      <span className="font-semibold text-slate-900">{transmission === "auto" ? "Automatic Transmission" : "Manual Transmission"}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Our head coordinator will call your phone number **{formData.phone}** within 10 minutes to verify details.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setSelectedTime("");
                    setFormData({ name: "", email: "", phone: "" });
                  }}
                  className="mt-8 text-xs font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
                >
                  Schedule Another Lesson
                </button>
              </div>
            ) : (
              /* Booking Scheduler Form */
              <div className="p-1 bg-slate-200/40 border border-slate-300/20 rounded-[2.5rem] diffused-shadow">
                <div className="bg-white rounded-[calc(2.5rem-0.25rem)] p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Step 1: Select Day */}
                    <div className="space-y-4">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                        1. Select Calendar Date
                      </label>
                      <div className="grid grid-cols-7 gap-2">
                        {days.map((day, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedDate(index)}
                            className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 active:scale-[0.95] ${
                              selectedDate === index
                                ? "bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-500/10"
                                : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800"
                            }`}
                          >
                            <span className={`text-[10px] uppercase font-semibold ${selectedDate === index ? "text-amber-100" : "text-slate-400"}`}>
                              {day.dayName}
                            </span>
                            <span className="text-base font-extrabold mt-1">{day.dayNumber}</span>
                            <span className={`text-[9px] uppercase mt-0.5 ${selectedDate === index ? "text-amber-200" : "text-slate-400"}`}>
                              {day.month}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Select Time */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                          2. Select Time Slot
                        </label>
                        {errors.time && <span className="text-xs text-red-500">{errors.time}</span>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.id}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => {
                              setSelectedTime(slot.time);
                              if (errors.time) setErrors((prev) => ({ ...prev, time: "" }));
                            }}
                            className={`px-5 py-3 rounded-full text-xs font-semibold border transition-all duration-300 active:scale-[0.96] ${
                              !slot.available
                                ? "bg-slate-100 border-slate-100 text-slate-300 cursor-not-allowed"
                                : selectedTime === slot.time
                                ? "bg-slate-900 border-slate-900 text-white"
                                : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Choose Transmission */}
                    <div className="space-y-4">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                        3. Transmission Type
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setTransmission("auto")}
                          className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-300 active:scale-[0.97] ${
                            transmission === "auto"
                              ? "border-amber-600 bg-amber-500/5 text-slate-950"
                              : "border-slate-200 bg-white hover:border-slate-300 text-slate-600"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            transmission === "auto" ? "border-amber-600 bg-amber-600 text-white" : "border-slate-300"
                          }`}>
                            {transmission === "auto" && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className="text-sm font-bold block">Automatic</span>
                            <span className="text-[10px] text-slate-400">Easy learning curve</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setTransmission("manual")}
                          className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-300 active:scale-[0.97] ${
                            transmission === "manual"
                              ? "border-amber-600 bg-amber-500/5 text-slate-950"
                              : "border-slate-200 bg-white hover:border-slate-300 text-slate-600"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            transmission === "manual" ? "border-amber-600 bg-amber-600 text-white" : "border-slate-300"
                          }`}>
                            {transmission === "manual" && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className="text-sm font-bold block">Manual (Stick Shift)</span>
                            <span className="text-[10px] text-slate-400">Complete vehicle mastery</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Step 4: User Info Form */}
                    <div className="space-y-5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                        4. Contact Details
                      </label>

                      {/* Full Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-700">Full Name</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-full text-sm outline-none transition-all ${
                              errors.name ? "border-red-500 focus:bg-red-500/5" : "border-slate-200 focus:border-slate-400 focus:bg-white"
                            }`}
                          />
                        </div>
                        {errors.name && <span className="text-xs text-red-500 font-medium pl-1">{errors.name}</span>}
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-full text-sm outline-none transition-all ${
                              errors.email ? "border-red-500 focus:bg-red-500/5" : "border-slate-200 focus:border-slate-400 focus:bg-white"
                            }`}
                          />
                        </div>
                        {errors.email && <span className="text-xs text-red-500 font-medium pl-1">{errors.email}</span>}
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-semibold text-slate-700">Phone Number</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-full text-sm outline-none transition-all ${
                              errors.phone ? "border-red-500 focus:bg-red-500/5" : "border-slate-200 focus:border-slate-400 focus:bg-white"
                            }`}
                          />
                        </div>
                        {errors.phone && <span className="text-xs text-red-500 font-medium pl-1">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full flex items-center justify-between p-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                      <span className="pl-4">{loading ? "Validating Reservation..." : "Submit Reservation"}</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
