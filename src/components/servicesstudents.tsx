import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

const trainings = [
  {
    title: "Web Design",
    description:
      "Intensive training on how to design and build modern responsive websites.",
  },
  {
    title: "Front-End Development",
    description:
      "Intensive training on creating responsive, interactive, and accessible web interfaces.",
  },
  {
    title: "Back-End Development",
    description:
      "Intensive training on building and managing the logic behind websites and apps, including API, database, and authentication systems.",
  },
  {
    title: "Software Security & Secure App Development",
    description:
      "Intensive training on securing systems and applications using access control, RBAC, rate limiting, and secure coding practices.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const TrainingSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Load EmailJS IDs from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env variables are not set!");
      setToast("❌ Email service is not configured. Please try later.");
      setTimeout(() => setToast(null), 5000);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setToast("✅ Your inquiry has been sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setToast(null), 5000);
        },
        (error) => {
          console.error(error);
          setToast(
            "❌ Something went wrong. Please try again later or email us directly."
          );
          setTimeout(() => setToast(null), 5000);
        }
      );
  };

  return (
    <section
      id="training"
      className="relative py-16 px-6 md:px-16 bg-gradient-to-b from-blue-50 to-blue-0 backdrop-blur-lg overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="max-w-3xl mx-auto mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Trainings
        </h2>
        <p className="text-blue-800 opacity-80">
          Learn web design, front-end & back-end development, and software
          security from professionals.
        </p>
      </motion.div>

      {/* Training Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {trainings.map((t, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[inset_2px_2px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_6px_rgba(0,0,0,0.1)]"
          >
            <h3 className="font-bold text-xl text-blue-900 mb-2">{t.title}</h3>
            <p className="text-blue-800 opacity-90 text-sm md:text-base">
              {t.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),_inset_0_-3px_8px_rgba(0,0,0,0.2)] max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {toast && (
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 
          bg-blue-600 text-white px-6 py-3 rounded-full 
          shadow-lg z-50 w-auto min-w-[260px] max-w-[90vw] text-center break-words"
          >
            {toast}
          </div>
        )}

        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Reach Out to Learn More
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-lg shadow-[inset_1px_1px_4px_rgba(255,255,255,0.6),inset_-1px_-1px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-lg shadow-[inset_1px_1px_4px_rgba(255,255,255,0.6),inset_-1px_-1px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-lg shadow-[inset_1px_1px_4px_rgba(255,255,255,0.6),inset_-1px_-1px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
          />

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-500 rounded-full shadow-[inset_0_2px_6px_rgba(255,255,255,0.5)] hover:bg-blue-600 hover:scale-[1.02] transition-all duration-500"
          >
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default TrainingSection;
