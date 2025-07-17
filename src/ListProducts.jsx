import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaRocket, FaUserPlus, FaClipboardList, FaCheckCircle, FaChartLine, FaBullhorn, FaStar, FaChartBar, FaHeadset, FaChevronDown, FaChevronUp, FaBuilding } from "react-icons/fa";
import SaaSIllustration from "./assets/VendorPageImg.png"; // Replace with your own SVG or illustration
import "./listProduct.css"; // Import your styles

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
  const [showModal, setShowModal] = useState(false);
  const [phase, setPhase] = useState(1);
  const [progress, setProgress] = useState(0);
  const [vendorForm, setVendorForm] = useState({
    name: "",
    designation: "",
    email: "",
    contactNumber: "",
    companyName: "",
    category: "",
    subCategory: "",
    gstNo: "",
  });
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    features: "",
    pricingBasic: "",
    pricingPro: "",
    images: "",
    categories: "",
    integrationOptions: "",
    trialAvailable: false,
  });

  // Calculate progress
  const totalFields = phase === 1
    ? 7 // vendor fields
    : 8; // product fields
  const filledFields = phase === 1
    ? Object.values(vendorForm).filter(v => v && v !== "").length
    : Object.values(productForm).filter(v => v && v !== "").length;
  const progressPercent = Math.round((filledFields / totalFields) * 100);

  // Handle input change
  const handleChange = (e, formType) => {
    const { name, value, type, checked } = e.target;
    if (formType === "vendor") {
      setVendorForm({ ...vendorForm, [name]: value });
    } else {
      setProductForm({
        ...productForm,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // Validate mandatory fields
  const vendorMandatory = [
    "name",
    "designation",
    "email",
    "contactNumber",
    "companyName",
    "category",
  ];
  const productMandatory = ["name", "description", "features", "pricingBasic", "categories"];

  const isVendorValid = vendorMandatory.every(f => vendorForm[f]);
  const isProductValid = productMandatory.every(f => productForm[f]);

  // Submit handler (dummy)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send vendorForm & productForm to API here
    setShowModal(false);
    setPhase(1);
    setVendorForm({
      name: "",
      designation: "",
      email: "",
      contactNumber: "",
      companyName: "",
      category: "",
      subCategory: "",
      gstNo: "",
    });
    setProductForm({
      name: "",
      description: "",
      features: "",
      pricingBasic: "",
      pricingPro: "",
      images: "",
      categories: "",
      integrationOptions: "",
      trialAvailable: false,
    });
  };

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
              className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-full md:w-56 min-h-[220px] md:min-h-[260px] relative" 
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


    {/* hidden for now */}
      {/* Vendor Success Stories */}
      
        {/* Logo Bar */}

{/* 
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
      </section> */}

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
      <section  className="w-full flex flex-col items-center py-16 px-4 md:px-0 bg-gradient-to-r from-primary to-accent">
        <h2 id="register" className="text-2xl md:text-3xl font-bold text-primary mb-6">Ready to List Your SaaS Product?</h2>
        <button
          
          onClick={() => setShowModal(true)}
          className="bg-accent border-2 text-primary px-5 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition flex items-center gap-3"
        >
          <FaTrophy className="text-yellow-400 text-2xl" />
          Register as a Vendor
        </button>
      </section>

      {/* Modal Form */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-auto p-8 relative flex flex-col overflow-y-auto max-h-[90vh]" // <-- Enable vertical scrolling
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
            >
              <button
                className="absolute top-4 right-4 bg-accent text-primary px-5 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition flex items-center gap-2"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              {/* Progress Bar */}
              <div className="w-full mb-6">
                <div className="flex items-center justify-start gap-x-2 mb-2">
                  <span className="text-sm font-semibold text-primary">
                    Vendor Registration Request
                  </span>
                  <span className="text-xs text-secondary">{progressPercent}% complete</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all`}
                    style={{
                      width: `${progressPercent}%`,
                      background: "linear-gradient(90deg,#3b82f6,#7ec6f6)",
                    }}
                  />
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-primary mb-2">Vendor Registration Request Form</h3>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name *"
                  className="input"
                  value={vendorForm.name}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="designation"
                  type="text"
                  required
                  placeholder="Designation *"
                  className="input"
                  value={vendorForm.designation}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  className="input"
                  value={vendorForm.email}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="contactNumber"
                  type="tel"
                  required
                  placeholder="Contact Number *"
                  className="input"
                  value={vendorForm.contactNumber}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="companyName"
                  type="text"
                  required
                  placeholder="Company Name *"
                  className="input"
                  value={vendorForm.companyName}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="category"
                  type="text"
                  required
                  placeholder="Category *"
                  className="input"
                  value={vendorForm.category}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="subCategory"
                  type="text"
                  placeholder="Sub Category (if any)"
                  className="input"
                  value={vendorForm.subCategory}
                  onChange={e => handleChange(e, "vendor")}
                />
                <input
                  name="gstNo"
                  type="text"
                  placeholder="GST NO (optional)"
                  className="input"
                  value={vendorForm.gstNo}
                  onChange={e => handleChange(e, "vendor")}
                />
                <div className="text-secondary text-xs mt-2 mb-4">
                  Note: we will get back to you via email in next 48hrs
                </div>
                <div className="flex justify-end gap-3 mt-2">
                  <button
                    type="submit"
                    className="bg-primary text-accent px-5 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition flex items-center gap-2"
                    disabled={!isVendorValid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Add this to your CSS or Tailwind config for .input
// .input { @apply w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary transition; }