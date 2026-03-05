"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Reach us at",
      value: "G-106, Sector-63, Noida",
      desc: "Uttar Pradesh - 201301",
      href: "https://maps.google.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call us at",
      value: "+91 80923-23805",
      desc: "Mon-Sat, 10am - 7pm",
      href: "tel:+918092323805",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Us",
      value: "info@chillcloud.in",
      desc: "Response within 24 hours",
      href: "mailto:contact@chillcloud.in",
    },
  ];

  return (
    <div className="bg-[#12100E] text-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
                            Contact
                        </span> */}
            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Connect with{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto] pr-2">
                Us
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
              Got a question or looking to partner? Drop us a line—we&apos;d
              love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="p-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Address
              </h2>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-start gap-6 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#D4AF37]/30 hover:bg-white/[0.08] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
                      {info.label}
                    </p>
                    <p className="text-xl font-bold mb-1 text-white group-hover:text-[#D4AF37] transition-colors">
                      {info.value}
                    </p>
                    {/* <p className="text-sm text-gray-500 mt-1">{info.desc}</p> */}
                  </div>
                </a>
              ))}

              {/* <div className="p-8 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/10 rounded-[2rem] mt-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-white">Office Hours</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                                    <div>
                                        <p className="text-white/60 mb-1">Mon - Sat</p>
                                        <p className="text-white font-medium">10:00 AM - 07:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 mb-1">Sunday</p>
                                        <p className="text-white font-medium">By Appointment</p>
                                    </div>
                                </div>
                            </div> */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7 bg-white/5 border border-white/5 rounded-[2rem] p-5 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-bl-[100%] pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6">
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Write to us
                  </h3>
                  <p className="text-gray-500">
                    Fill out the form below, and a Chillcloud representative
                    will reach out to you within 12–24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Message */}
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "p-4 rounded-2xl flex items-center gap-3",
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-500"
                          : "bg-red-500/10 border border-red-500/20 text-red-500"
                      )}
                    >
                      {submitStatus.type === "success" && (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+91"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">
                      Inquiry Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="How can we assist you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] text-black font-bold py-5 rounded-2xl transition-all hover:shadow-[0_20px_40px_-5px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        PROCEED WITH INQUIRY
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-white/5 relative group"
          >
            <iframe
              title="Chillcloud India Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4154.603106292702!2d77.3877752760161!3d28.616165784822638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaab56c845dbb3ec3%3A0x52f5e89140477826!2sChillcloud%20India%20LLP!5e1!3m2!1sen!2sin!4v1771009607321!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            // className="grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay to catch initial clicks/scrolls if desired, or just styling */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>
      </section>

      {/* Decorative Branding - Infinite Scroll */}
      {/* <Branding /> */}
    </div>
  );
}
