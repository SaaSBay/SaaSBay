import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUserPlus, FaClipboardList, FaCheckCircle, FaChartLine, FaBullhorn, FaStar, FaChartBar, FaHeadset, FaTrophy, FaChevronDown, FaChevronUp, FaBuilding } from "react-icons/fa";
import SaaSIllustration from "./assets/VendorPageImg.png"; // Replace with your own SVG or illustration

const processSteps = [
  {
    icon: <FaUserPlus className="text-primary text-3xl mb-2" />,
    title: "Register as a Vendor",
    desc: "Create your free account and join the SaaSBay vendor community.",
  },
  {
    icon: <FaClipboardList className="text-primary text-3xl mb-2" />,
    title: "Submit Your SaaS Product",
    desc: "Add product details, features, and pricing to showcase your solution.",
  },
  {
    icon: <FaCheckCircle className="text-primary text-3xl mb-2" />,
    title: "Get Verified",
    desc: "Our team reviews your submission for quality and accuracy.",
  },
  {
    icon: <FaRocket className="text-primary text-3xl mb-2" />,
    title: "Go Live",
    desc: "Your product is discoverable by thousands of SaaS buyers.",
  },
  {
    icon: <FaChartLine className="text-primary text-3xl mb-2" />,
    title: "Grow with Analytics",
    desc: "Track leads, reviews, and performance in your vendor dashboard.",
  },
];

const benefits = [
  {
    icon: <FaBuilding className="text-primary text-3xl mb-2" />,
    title: "Access a Targeted B2B Audience",
    desc: "Connect with businesses actively searching for SaaS solutions.",
  },
  {
    icon: <FaStar className="text-primary text-3xl mb-2" />,
    title: "Collect Real User Reviews",
    desc: "Build trust and credibility with authentic customer feedback.",
  },
  {
    icon: <FaChartBar className="text-primary text-3xl mb-2" />,
    title: "Analytics Dashboard",
    desc: "Monitor your listing’s performance and optimize your strategy.",
  },
  {
    icon: <FaHeadset className="text-primary text-3xl mb-2" />,
    title: "Dedicated Vendor Support",
    desc: "Get help from our team whenever you need it.",
  },
  {
    icon: <FaBullhorn className="text-primary text-3xl mb-2" />,
    title: "Marketing Opportunities",
    desc: "Get featured in categories and promotions to boost visibility.",
  },
];

const testimonials = [
  {
    quote: "Listing on SaaSBay increased our qualified leads by 40% in just three months.",
    name: "Priya Sharma",
    company: "FinTechPro",
    logo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "The review system helped us build trust with new customers quickly.",
    name: "Alex Chen",
    company: "DevOpsHub",
    logo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
];

const vendorLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

const faqs = [
  {
    q: "How much does it cost to list my SaaS?",
    a: "Listing your SaaS on SaaSBay is free. We offer premium options for additional visibility.",
  },
  {
    q: "How long does approval take?",
    a: "Most listings are reviewed within 2 business days.",
  },
  {
    q: "Can I update my listing anytime?",
    a: "Yes, you can edit your product details, pricing, and features at any time from your dashboard.",
  },
  {
    q: "How do I get more reviews?",
    a: "Encourage your users to leave reviews by sharing your SaaSBay listing link.",
  },
  {
    q: "Is there support for vendors?",
    a: "Absolutely! Our vendor support team is here to help you succeed.",
  },
];

export default function ListProducts() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7]">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between min-h-[60vh] md:min-h-[70vh] px-4 md:px-16 py-16 bg-gradient-to-r from-primary to-accent relative overflow-hidden mt-10 md:mt-20">
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Grow Your SaaS Business with <span className="text-primary">SaaSBay</span>
          </h1>
          <p className="text-primary text-lg md:text-2xl mb-8 max-w-xl">
            Reach thousands of businesses looking for the right software. List your SaaS application and start getting high-quality leads today.
          </p>
          <div className="flex gap-4">
            <a
              href="#register"
              className="bg-white text-primary px-6 py-3 rounded-lg font-bold shadow hover:bg-accent hover:text-primary transition text-base animate-bounce-slow"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-primary transition text-base"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center relative mt-12 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={SaaSIllustration}
            alt="SaaS Illustration"
            className="w-100 md:w-[590px] drop-shadow-xl animate-float"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full flex flex-col items-center py-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">How Listing Works</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-center justify-center">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-full md:w-56 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <div className="mb-2">{step.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
              <p className="text-secondary text-center text-sm">{step.desc}</p>
              {i < processSteps.length - 1 && (
                <span className="hidden md:block absolute right-[-32px] top-1/2 -translate-y-1/2 w-8 h-1 bg-accent rounded-full"></span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why List With Us */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-0 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">Why List Your SaaS on SaaSBay?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="flex flex-col items-center bg-accent rounded-2xl shadow p-6 hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {b.icon}
              <h3 className="font-bold text-lg mb-2 text-primary">{b.title}</h3>
              <p className="text-secondary text-center text-sm">{b.desc}</p>
            </motion.div>
          ))}
          {/* Testimonial Card */}
          {/* <motion.div
            className="col-span-full flex flex-col items-center bg-gradient-to-r from-primary to-accent rounded-2xl shadow-lg p-8 mt-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <img src={testimonials[0].logo} alt={testimonials[0].company} className="w-14 h-14 rounded-full mb-3" />
            <p className="text-accent text-lg font-semibold mb-2">"{testimonials[0].quote}"</p>
            <span className="font-bold text-white">{testimonials[0].name}</span>
            <span className="text-xs text-accent">{testimonials[0].company}</span>
          </motion.div> */}
        </div>
      </section>

      {/* Vendor Success Stories */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">Vendor Success Stories</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full items-center justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-full md:w-96"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <img src={t.logo} alt={t.company} className="w-12 h-12 rounded-full mb-3" />
              <p className="text-secondary text-center mb-2">"{t.quote}"</p>
              <span className="font-bold text-primary">{t.name}</span>
              <span className="text-xs text-gray-500">{t.company}</span>
            </motion.div>
          ))}
        </div>
        {/* Logo Bar */}
        <div className="flex gap-8 mt-10 items-center justify-center flex-wrap">
          {vendorLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Vendor Logo"
              className="h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              style={{ maxWidth: 120 }}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-0 bg-accent">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
        <div className="w-full max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="bg-primary rounded-xl shadow mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <span className="flex items-center gap-2 text-white font-semibold">
                  <FaChevronDown className={`transition-transform duration-300 ${openFAQ === i ? "rotate-180" : ""}`} />
                  {faq.q}
                </span>
                <span>
                  {openFAQ === i ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
                </span>
              </button>
              {openFAQ === i && (
                <div className="px-6 pb-4 text-white text-sm">{faq.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-0 bg-gradient-to-r from-primary to-accent">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Ready to List Your SaaS Product?</h2>
        <a
          id="register"
          href="#"
          className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-accent hover:text-primary transition text-lg flex items-center gap-3"
        >
          <FaTrophy className="text-yellow-400 text-2xl" />
          Register as a Vendor
        </a>
      </section>
    </div>
  );
}