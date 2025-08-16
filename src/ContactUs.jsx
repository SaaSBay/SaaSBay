import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaUser, FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import ContactUs from "./assets/ContactUs.jpg";

// Modal Component
function Modal({ message, onClose }) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      intent: formData.intent,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_gcop268", 
        "template_ndnr2cf",
        templateParams,
        "H5r8UftRdaS5OcGre" 
      );
      setModalMessage("Thank you for reaching out! We'll get back to you within 24 hours.");
      setShowModal(true);
      setFormData({ name: "", email: "", intent: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setModalMessage("Oops! Something went wrong. Please try again or email us directly.");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-10 top-24 w-16 h-16 bg-blue-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-16 top-40 w-12 h-12 bg-purple-200 rounded-full opacity-20"
          animate={{ y: [0, -18, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your business software journey? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Contact Section */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Form Section */}
              <div className="flex-1 p-8 sm:p-12 lg:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Us</h2>
                    <p className="text-gray-600">We're here to help</p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Intent Selection */}
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      I'm contacting you as:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { value: "customer", label: "I'm a Business Looking for SaaS", icon: <FaUser /> },
                        { value: "vendor", label: "I'm a SaaS Provider", icon: <FaComments /> },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`relative flex items-center p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
                            formData.intent === option.value
                              ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 text-blue-700"
                              : "bg-gray-50 border-gray-200 hover:border-blue-200 text-gray-700"
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
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                            formData.intent === option.value 
                              ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white" 
                              : "bg-gray-300 text-gray-600"
                          }`}>
                            {option.icon}
                          </div>
                          <span className="font-medium text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Illustration Section */}
              <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 relative p-16">
                <motion.img
                  src={ContactUs}
                  alt="Contact Illustration"
                  className="w-80 h-80 object-contain mb-8"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  draggable={false}
                  style={{ userSelect: "none" }}
                />
                
                {/* Contact Info Cards */}
                <div className="space-y-4 w-full max-w-sm">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-600 text-sm">We typically respond within 2-4 hours during business days</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
                    <p className="text-gray-600 text-sm">Our team of SaaS experts is ready to help you succeed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Contact Options */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { 
              title: "Email Us", 
              content: "hello@saasbay.in", 
              icon: <FaEnvelope />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Quick Chat", 
              content: "Schedule a 15-min call", 
              icon: <FaComments />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "Follow Us", 
              content: "Stay updated on social", 
              icon: <FaUser />,
              color: "from-purple-500 to-violet-500"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  );
}
