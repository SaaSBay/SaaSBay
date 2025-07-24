import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactUs from "./assets/ContactUs.jpg";

// Keep only this Modal component
function Modal({ message, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <p className="text-lg font-semibold mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "",
    message: "",
  });
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData };
    try {
      console.log("Sending to API:", JSON.stringify(payload, null, 2));
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
      setModalMessage("Message sent! We'll get back to you soon.");
      setShowModal(true);
      setFormData({ name: "", email: "", intent: "", message: "" });
    } catch {
      setModalMessage("Oops, something went wrong. Please try again.");
      setShowModal(true);
    }
  };

  return (
    <motion.section
      className="w-full max-w-4xl mx-auto mt-20 mb-16 px-4 sm:px-6 rounded-2xl shadow-xl flex flex-col items-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
     
    >
      <div className="flex flex-col md:flex-row w-full bg-gradient-to-r from-blue-100 via-accent/10 to-primary/10 rounded-2xl overflow-hidden">
        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-10 py-10 bg-white">
          <div className="flex flex-col items-center mb-4">
            <svg
              className="w-10 h-10 text-accent mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2 8l10 6 10-6"
              />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
              Contact Us
            </h2>
          </div>
          <p className="text-secondary text-sm sm:text-base mb-6 text-center max-w-md">
            Have a question or want to list your SaaS? Let’s talk!
          </p>

          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Styled Radio Buttons */}
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              {[
                { value: "customer", label: "I’m a Customer" },
                { value: "vendor", label: "I’m a SaaS Vendor" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex-1 px-4 py-3 text-sm rounded-lg cursor-pointer border transition-all text-center ${
                    formData.intent === option.value
                      ? "bg-primary text-white border-primary font-semibold"
                      : "bg-white text-secondary border-gray-300 hover:border-primary"
                  }`}
                >
                  <input
                    type="radio"
                    name="intent"
                    value={option.value}
                    className="sr-only"
                    checked={formData.intent === option.value}
                    onChange={handleChange}
                    required
                  />

                  {option.label}
                </label>
              ))}
            </div>

            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary transition resize-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="bg-primary text-accent px-6 py-3 rounded-xl font-semibold shadow hover:bg-primary-light transition text-base mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Illustration - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-accent/10 to-primary/10 relative">
          <motion.img
            src={ContactUs}
            alt="Contact Illustration"
            className="w-40 h-40 md:w-64 md:h-64 object-contain mt-10 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
      </div>

      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </motion.section>
  );
}
