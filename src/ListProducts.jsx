import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import {
  FaRocket,
  FaUserPlus,
  FaClipboardList,
  FaCheckCircle,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaBrain,
  FaBolt,
  FaCompass,
  FaBullseye,
  FaShieldAlt,
  FaStar,
  FaGem,
  FaCrown,
  FaFire,
  FaLightbulb,
  FaUsers,
  FaEye,
  FaHeart,
  FaGlobe,
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaUserPlus className="text-4xl mb-3" />,
    title: "Register as a Vendor",
    desc: "Get started in seconds create your profile and introduce your brand to a community eager for innovation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaClipboardList className="text-4xl mb-3" />,
    title: "Select Your Annual Plan",
    desc: "Choose the tier that powers your growth unlock features designed for where you want to be next.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaRocket className="text-4xl mb-3" />,
    title: "Add Your Products",
    desc: "Bring your offerings to life with vivid descriptions, stunning visuals, and engaging videos (where applicable).",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <FaCheckCircle className="text-4xl mb-3" />,
    title: "Review & Submit",
    desc: "Give your listing the final polish, then send it off our team will have you live within 48 hours.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaChartLine className="text-4xl mb-3" />,
    title: "Receive Leads & Grow",
    desc: "Sit back and watch qualified inquiries flow in turn curiosity into conversations and scale your pipeline.",
    color: "from-indigo-500 to-purple-500",
  },
];

const benefits = [
  {
    icon: <FaBolt className="text-4xl mb-4" />,
    title: "High-Intent Leads",
    desc: "Reach Indian businesses actively searching for SaaS solutions, across industries, sizes, and roles. Just qualified buyers with real intent, ready to evaluate and engage.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
  },
  {
    icon: <FaCompass className="text-4xl mb-4" />,
    title: "Curated Positioning",
    desc: "Your product deserves more than just a logo and a link. Tell your story with structured listings, rich visuals, feature highlights, and messaging that converts interest into action.",
    color: "from-blue-500 to-purple-500",
    bgColor: "from-blue-50 to-purple-50",
  },
  {
    icon: <FaBullseye className="text-4xl mb-4" />,
    title: "Targeted Exposure",
    desc: "Your product appears in filtered searches by function, industry, and category—right when decision-makers are evaluating tools.",
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-50 to-teal-50",
  },
  {
    icon: <FaShieldAlt className="text-4xl mb-4" />,
    title: "Credibility by Design",
    desc: "Build trust before the first conversation. With our 'SaaS Approved' badge and premium visibility placements, your product earns instant credibility where it counts—on the first impression.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    icon: <FaRocket className="text-4xl mb-4" />,
    title: "Simple, Fast, and Focused",
    desc: "Get listed in minutes. Go live within 48 hours. No clutter, no complexity—just a clean path from signup to visibility, so you can focus on what matters: building and growing.",
    color: "from-pink-500 to-red-500",
    bgColor: "from-pink-50 to-red-50",
  },
  {
    icon: <FaBrain className="text-4xl mb-4" />,
    title: "Built for Indian SaaS",
    desc: "Designed for the Indian SaaS ecosystem—from pricing logic to founder-led GTM strategies, SaaSBay is built to amplify what makes Indian SaaS strong.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
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
    q: "Can I list my SaaS product for free?",
    a: "Yes! SaaSBay offers a Launchpad Listing that is completely free. It's ideal for early-stage or bootstrapped SaaS products. As part of our limited-time launch offer, the first 50 vendors will receive 1 year of Pro Access absolutely free.",
  },
  {
    q: "How many payment plans do you offer?",
    a: "We offer tiered listing plans designed to match your stage of growth and visibility needs. While our free plan is always available, our paid plans offer enhanced exposure, lead access, and branding features.",
  },
  {
    q: "Do you offer monthly payment options?",
    a: "No. All paid plans are available on an annual basis only, allowing for sustained exposure and consistent lead engagement throughout the year.",
  },
  {
    q: "How long does it take for my product to go live?",
    a: "Once you submit your product, our team conducts a quick review to ensure quality and relevance. Listings typically go live within 24–48 hours after submission.",
  },
  {
    q: "How can I stand out against other listings?",
    a: "To increase your visibility:\n- Upgrade to a premium plan for featured placement\n- Use high-quality visuals (screenshots, explainer videos, logos)\n- Earn the 'SaaS Approved' badge (available in our top-tier plan)\n- Maintain an up-to-date, benefit-focused listing",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade at any time through your Vendor Dashboard. All premium features will be unlocked immediately upon upgrade.",
  },
  {
    q: "Can I downgrade my plan?",
    a: "Yes. You can downgrade your plan before your next renewal cycle. Downgrading will remove access to features exclusive to higher-tier plans, but your listing will remain active.",
  },
  {
    q: "How can I get more views on my listing?",
    a: "Here are a few ways to boost visibility:\n- Add engaging visuals and product demos\n- Write clear, benefit-led descriptions\n- Upgrade to a Pro plan for homepage or featured visibility\n- Be among the first — early listings get prioritized placement",
  },
  {
    q: "Are there assured monthly leads?",
    a: "We do not offer guaranteed lead volumes. However, Pro and Spotlight plans significantly boost your visibility to high-intent B2B buyers. Engagement depends on listing quality, clarity, and positioning.",
  },
  {
    q: "Is my data secure on SaaSBay?",
    a: "Yes. We follow best-in-class security practices to protect all vendor data, product details, and user activity. Your data is never shared or sold without explicit consent.",
  },
  {
    q: "Can I list more than one product?",
    a: "Absolutely. You can list multiple SaaS products under one vendor account. Each product gets a dedicated page, lead funnel, and media slots.",
  },
  {
    q: "Will I get analytics or insights on my listing?",
    a: "Yes. All vendors get a basic performance dashboard showing impressions and clicks. Higher-tier plans include deeper insights like traffic source, engagement patterns, and buyer actions.",
  },
  {
    q: "Can I remove my listing from SaaSBay?",
    a: "Yes. If you wish to permanently remove your listing, you can do so from your dashboard or by contacting our support team. Once removed, your data will no longer be publicly visible.",
  },
  {
    q: "Do you help with onboarding or listing optimization?",
    a: "Yes. We offer onboarding guidance, listing best practices, and optimization support for Pro users — including how to present your SaaS effectively and improve buyer engagement.",
  },
];

export default function ListProducts() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [phase, setPhase] = useState(1);
  const [progress, setProgress] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [vendorForm, setVendorForm] = useState({
    name: "",
    designation: "",
    email: "",
    contactNumber: "",
    companyName: "",
    category: "",
    subCategory: "",
    gstNo: "",
    plan: "Standard",
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
  const totalFields = phase === 1 ? 8 : 8; // Updated to 8 for vendor fields
  const filledFields = phase === 1
    ? Object.values(vendorForm).filter((v) => v && v !== "").length
    : Object.values(productForm).filter((v) => v && v !== "").length;
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
  const vendorMandatory = ["name", "designation", "email", "contactNumber", "companyName", "category"];
  const productMandatory = ["name", "description", "features", "pricingBasic", "categories"];

  const isVendorValid = vendorMandatory.every((f) => vendorForm[f]);
  const isProductValid = productMandatory.every((f) => productForm[f]);

  // Submit handler (dummy)
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setPhase(1);
    setVendorForm({
      name: "", designation: "", email: "", contactNumber: "",
      companyName: "", category: "", subCategory: "", gstNo: "", plan: "Standard",
    });
    setProductForm({
      name: "", description: "", features: "", pricingBasic: "",
      pricingPro: "", images: "", categories: "", integrationOptions: "", trialAvailable: false,
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-4 sm:px-8 md:px-16 py-16 mt-10 md:mt-20 z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-3xl"></div>
        
        {/* Left Side: Content */}
        <motion.div
          className="relative flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaRocket className="animate-bounce" />
            <span>Launch Your SaaS Today</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            From Discovery to Demo
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Grow Your SaaS on SaaSBay
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            List your SaaS product now and open the door to discovery by your next potential customers.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-lg">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/50">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Active Buyers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/50">
              <div className="text-2xl font-bold text-purple-600">48hrs</div>
              <div className="text-sm text-gray-600">Go Live</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/50">
              <div className="text-2xl font-bold text-green-600">Higher</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full sm:w-auto">
            <a
              href="#register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center group"
            >
              <span className="flex items-center justify-center  text-white gap-2">
                Get Started Free
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#how-it-works"
              className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 w-full sm:w-auto text-center"
            >
              See How It Works
            </a>
          </div>
        </motion.div>


      </section>

      {/* Pricing Plans Section */}
      <section className="relative w-full flex flex-col items-center py-16 px-4 md:px-0 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaGem />
            <span>Flexible Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Listing Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start with the basics or go premium for the spotlight. Plans crafted for every stage of your SaaS journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Basic Plan */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute -top-4 left-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaStar />
              </div>
            </div>
            
            <div className="pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-500 mb-4">Launchpad Listing</p>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ₹0<span className="text-lg font-normal text-gray-500">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "List up to 4 products",
                  "2 images per product", 
                  "Standard lead access (after 48 hrs)",
                  "Homepage banner",
                  "SaaS Approved badge"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span className="text-gray-400">No video uploads</span>
                </li>
              </ul>

              <button className="w-full bg-gray-200 text-gray-500 py-4 rounded-2xl font-bold cursor-not-allowed transition-all duration-300">
                Coming Soon
              </button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-500 hover:shadow-3xl transition-all duration-500 group hover:-translate-y-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
            </div>
            
            <div className="absolute -top-4 left-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaGem />
              </div>
            </div>
            
            <div className="pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-500 mb-4">Growth Catalyst</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  ₹23,999<span className="text-lg font-normal text-gray-500">/year</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "List up to 7 products",
                  "4 images per product",
                  "1 video per product",
                  "Early lead access (48 hrs before)",
                  "49-hr Homepage banner",
                  "SAAS Approved badge"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Join Waitlist
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute -top-4 left-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaCrown />
              </div>
            </div>
            
            <div className="pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-500 mb-4">Spotlight Nexus</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  ₹29,999<span className="text-lg font-normal text-gray-500">/year</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "List up to 12 products",
                  "6 images per product",
                  "1 video per product", 
                  "Immediate lead access",
                  "120 Hours visibility",
                  "SaaS Approved badge"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative w-full flex flex-col items-center py-16 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaLightbulb />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Listing Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From registration to revenue - follow our streamlined process to get your SaaS discovered
          </p>
        </div>

        <div className="relative max-w-6xl w-full">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}>
                    {i + 1}
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why List With Us */}
      <section className="relative w-full flex flex-col items-center py-16 px-4 md:px-0 bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaFire />
            <span>Why Choose SaaSBay</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why List Your SaaS on SaaSBay?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join the platform that's revolutionizing how SaaS products get discovered in India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className={`relative bg-gradient-to-br ${benefit.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-white/50`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="absolute -top-4 left-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
              </div>
              
              <div className="pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full flex flex-col items-center py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaUsers />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about listing your SaaS on our platform
          </p>
        </div>

        <div className="w-full max-w-4xl space-y-4">
          {(showAllFaqs ? faqs : faqs.slice(0, 5)).map((faq, i) => (
            <motion.div
              key={faq.q}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 border border-white/50 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 text-left text-gray-900 font-semibold focus:outline-none hover:bg-white/50 rounded-2xl transition-colors group"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <span className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mt-1 transition-transform duration-300 ${openFAQ === i ? "rotate-180" : ""}`}>
                    {openFAQ === i ? "-" : "+"}
                  </div>
                  <span className="group-hover:text-blue-600 transition-colors">{faq.q}</span>
                </span>
              </button>

              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-14 pb-6">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {faqs.length > 5 && (
          <div className="mt-8">
            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              {showAllFaqs ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </section>

      {/* Final CTA */}
      <section className="relative w-full flex flex-col items-center py-20 px-4 md:px-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <FaTrophy className="text-yellow-300" />
            <span>Start Your Journey</span>
          </div>
          
          <h2 id="register" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to List Your SaaS Product?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join hundreds of successful SaaS companies already growing their business on SaaSBay
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg"
            >
              <FaChartLine className="text-yellow-500" />
              Register as a Vendor
            </button>
            <div className="text-white/80 text-sm">
              <FaCheckCircle className="inline mr-2" />
              Free to start • Go live in 48 hours • No hidden fees
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal Form */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-auto p-8 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <FaTimes className="text-gray-600" />
              </button>

              {/* Enhanced Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-3xl shadow-lg mx-auto mb-4">
                  <FaRocket />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join SaaSBay as a Vendor
                </h3>
                <p className="text-gray-600">
                  Start your journey to connect with qualified buyers
                </p>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">
                    Registration Progress
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    {progressPercent}% Complete
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      value={vendorForm.name}
                      onChange={(e) => handleChange(e, "vendor")}
                    />
                  </div>
                  <div className="relative">
                    <input
                      name="designation"
                      type="text"
                      required
                      placeholder="Designation *"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      value={vendorForm.designation}
                      onChange={(e) => handleChange(e, "vendor")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    value={vendorForm.email}
                    onChange={(e) => handleChange(e, "vendor")}
                  />
                  <input
                    name="contactNumber"
                    type="tel"
                    required
                    placeholder="Contact Number *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    value={vendorForm.contactNumber}
                    onChange={(e) => handleChange(e, "vendor")}
                  />
                </div>

                <input
                  name="companyName"
                  type="text"
                  required
                  placeholder="Company Name *"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  value={vendorForm.companyName}
                  onChange={(e) => handleChange(e, "vendor")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="category"
                    type="text"
                    required
                    placeholder="Product Category *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    value={vendorForm.category}
                    onChange={(e) => handleChange(e, "vendor")}
                  />
                  <select
                    name="plan"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    value={vendorForm.plan}
                    onChange={(e) => handleChange(e, "vendor")}
                  >
                    <option value="Standard">Basic Plan</option>
                    <option value="Pro">Pro Plan</option>
                    <option value="Premium">Premium Plan</option>
                  </select>
                </div>

                <input
                  name="gstNo"
                  type="text"
                  placeholder="GST Number (Optional)"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  value={vendorForm.gstNo}
                  onChange={(e) => handleChange(e, "vendor")}
                />

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <FaEye className="text-blue-500 mt-1 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">What happens next?</p>
                      <p>We'll review your application and get back to you via email within 48 hours with next steps and onboarding details.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={!isVendorValid}
                  >
                    Submit Application
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