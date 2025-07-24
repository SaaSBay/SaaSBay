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
} from "react-icons/fa";
import SaaSIllustration from "./assets/VendorPageImg.png"; // Replace with your own SVG or illustration
import "./listProduct.css"; // Import your styles

const processSteps = [
  {
    icon: <FaUserPlus className="text-primary text-3xl mb-2" />,
    title: "Register as a Vendor",
    desc: "Get started in seconds—create your profile and introduce your brand to a community eager for innovation.",
  },
  {
    icon: <FaClipboardList className="text-primary text-3xl mb-2" />,
    title: "Select Your Annual Plan",
    desc: "Choose the tier that powers your growth—unlock features designed for where you want to be next.",
  },
  {
    icon: <FaRocket className="text-primary text-3xl mb-2" />,
    title: "Add Your Products",
    desc: "Bring your offerings to life with vivid descriptions, stunning visuals, and engaging videos (where applicable).",
  },
  {
    icon: <FaCheckCircle className="text-primary text-3xl mb-2" />,
    title: "Review & Submit",
    desc: "Give your listing the final polish, then send it off—our team will have you live within 48 hours.",
  },
  {
    icon: <FaChartLine className="text-primary text-3xl mb-2" />,
    title: "Receive Leads & Grow",
    desc: "Sit back and watch qualified inquiries flow in—turn curiosity into conversations and scale your pipeline.",
  },
];

const benefits = [
  {
    icon: <FaBolt className="text-primary text-3xl mb-2" />,
    title: "High-Intent Leads",
    desc: "Reach Indian businesses actively searching for SaaS solutions, across industries, sizes, and roles. Just qualified buyers with real intent, ready to evaluate and engage.",
  },
  {
    icon: <FaCompass className="text-primary text-3xl mb-2" />,
    title: "Curated Positioning",
    desc: "Your product deserves more than just a logo and a link. Tell your story with structured listings, rich visuals, feature highlights, and messaging that converts interest into action.",
  },
  {
    icon: <FaBullseye className="text-primary text-3xl mb-2" />,
    title: "Targeted Exposure",
    desc: "Your product appears in filtered searches by function, industry, and category—right when decision-makers are evaluating tools.",
  },
  {
    icon: <FaShieldAlt className="text-primary text-3xl mb-2" />,
    title: "Credibility by Design",
    desc: "Build trust before the first conversation. With our “SaaS Approved” badge and premium visibility placements, your product earns instant credibility where it counts—on the first impression.",
  },
  {
    icon: <FaRocket className="text-primary text-3xl mb-2" />,
    title: "Simple, Fast, and Focused",
    desc: "Get listed in minutes. Go live within 48 hours. No clutter, no complexity—just a clean path from signup to visibility, so you can focus on what matters: building and growing.",
  },
  {
    icon: <FaBrain className="text-primary text-3xl mb-2" />,
    title: "Built for Indian SaaS",
    desc: "Designed for the Indian SaaS ecosystem—from pricing logic to founder-led GTM strategies, SaaSBay is built to amplify what makes Indian SaaS strong.",
  },
];

const testimonials = [
  {
    quote:
      "Listing on SaaSBay increased our qualified leads by 40% in just three months.",
    name: "Priya Sharma",
    company: "FinTechPro",
    logo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "The review system helped us build trust with new customers quickly.",
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
    q: "Is it really free to list my SaaS?",
    a: "Yes, listing your product on SaaSBay is completely free. We also offer optional premium placements and visibility upgrades if you're looking to scale faster.",
  },
  {
    q: "Who sees my listing?",
    a: "Your listing is seen by high-intent Indian buyers, including startup founders, SMB teams, and enterprise decision-makers actively evaluating SaaS tools.",
  },
  {
    q: "How do I stand out from other products?",
    a: "You can stand out with strong visuals, clear feature breakdowns, and a compelling pitch. SaaSBay also supports reviews, highlights, and badges to boost visibility.",
  },
  {
    q: "How soon will my listing go live?",
    a: "Listings are typically reviewed and approved within 24–48 hours. You'll get a confirmation as soon as it's live.",
  },
  {
    q: "Can I edit or update my listing after it's live?",
    a: "Absolutely. You can update product features, pricing, images, and other details anytime from your vendor dashboard.",
  },
  {
    q: "How can I get more reviews on my listing?",
    a: "Once you're live, you’ll get a unique listing link you can share with users and customers to collect verified reviews.",
  },
  {
    q: "Do you promote listings externally?",
    a: "Yes! High-quality listings are eligible for inclusion in newsletters, category roundups, and targeted promotional campaigns.",
  },
  {
    q: "What kind of support do you offer vendors?",
    a: "Our vendor success team is available via email and live chat to help with onboarding, listing optimization, and visibility strategies.",
  },
  {
    q: "Is SaaSBay only for Indian SaaS companies?",
    a: "We’re built for Indian SaaS—but international companies targeting Indian buyers are welcome too. We localize discovery for maximum relevance.",
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
  const totalFields =
    phase === 1
      ? 7 // vendor fields
      : 8; // product fields
  const filledFields =
    phase === 1
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
  const vendorMandatory = [
    "name",
    "designation",
    "email",
    "contactNumber",
    "companyName",
    "category",
  ];
  const productMandatory = [
    "name",
    "description",
    "features",
    "pricingBasic",
    "categories",
  ];

  const isVendorValid = vendorMandatory.every((f) => vendorForm[f]);
  const isProductValid = productMandatory.every((f) => productForm[f]);

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
   <section className="w-full flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-4 sm:px-8 md:px-16 py-16 bg-gradient-to-r from-primary to-accent relative overflow-hidden mt-10 md:mt-20">
  {/* Left Side: Content */}
  <motion.div
    className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
      From Discovery to Demo
      <span className="block">
        Grow Your SaaS on <span className="text-primary">SaaSBay</span>
      </span>
    </h1>
    <p className="text-primary text-base sm:text-lg md:text-2xl mb-8 max-w-xl">
      List your SaaS product now and open the door to discovery by your next potential customers.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full sm:w-auto">
      <a
        href="#register"
        className="bg-white text-primary px-6 py-3 rounded-lg font-bold shadow hover:bg-accent hover:text-primary transition text-base animate-bounce-slow w-full sm:w-auto text-center"
      >
        Get Started
      </a>
      <a
        href="#how-it-works"
        className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-primary transition text-base w-full sm:w-auto text-center"
      >
        See How It Works
      </a>
    </div>
  </motion.div>

  {/* Right Side: Illustration */}
  <motion.div
    className="flex-1 flex items-center justify-center relative mt-12 md:mt-0 w-full"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <img
      src={SaaSIllustration}
      alt="SaaS Illustration"
      className="w-full max-w-[500px] md:max-w-[590px] drop-shadow-xl animate-float"
      style={{ pointerEvents: "none" }}
    />
  </motion.div>
</section>


      {/* Pricing Plans Section */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-0 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">
          Choose Your Listing Plan
        </h2>
        <p className="text-secondary text-base md:text-lg mb-10 text-center max-w-2xl">
          Start with the basics or go premium for the spotlight. Plans crafted
          for every stage of your SaaS journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Basic Plan */}
          <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 items-center border border-gray-200">
            <span className="text-xl font-semibold text-primary mb-1">
              Basic
            </span>
            <span className="text-sm text-secondary mb-4">
              Launchpad Listing
            </span>
            <span className="text-3xl font-bold text-primary mb-2">
              ₹0<span className="text-base font-normal">/month</span>
            </span>
            <ul className="text-sm text-secondary mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> List up to 4 products
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 2 images per product
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">✖</span> No video uploads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Standard lead access
                (after 48 hrs)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Homepage banner
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> SaaS Approved badge
              </li>
            </ul>
            <button
              className="bg-gray-200 text-gray-500 px-6 py-2 rounded-lg font-semibold cursor-not-allowed w-full"
              disabled
            >
              Coming Soon
            </button>
          </div>
          {/* Pro Plan */}
          <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 items-center border-2 border-blue-500 relative">
            <span className="absolute -top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              Most Popular
            </span>
            <span className="text-xl font-semibold text-primary mb-1">Pro</span>
            <span className="text-sm text-secondary mb-4">Growth Catalyst</span>
            <span className="text-3xl font-bold text-primary mb-2">
              ₹1,999<span className="text-base font-normal">/mo</span>
            </span>
            <ul className="text-sm text-secondary mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> List up to 7 products
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 4 images per product
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 1 video per product
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Early lead access (48
                hrs before)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 49-hr Homepage banner
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> SAAS Approved badge
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition w-full">
              Join Waitlist
            </button>
          </div>
          {/* Premium Plan */}
          <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 items-center border border-gray-200">
            <span className="text-xl font-semibold text-primary mb-1">
              Premium
            </span>
            <span className="text-sm text-secondary mb-4">Spotlight Nexus</span>
            <span className="text-3xl font-bold text-primary mb-2">
              ₹4,999<span className="text-base font-normal">/mo</span>
            </span>
            <ul className="text-sm text-secondary mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> List up to 12 products
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 6 images per product
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 1 video per product
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> Immediate lead access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> 120 Hours visibility
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> SaaS Approved badge
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition w-full">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="w-full flex flex-col items-center py-16 px-4 md:px-0"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          How Listing Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-center justify-center">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-full md:w-56 min-h-[240px] md:min-h-[260px] relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <div className="mb-2">{step.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-primary text-center">
                {step.title}
              </h3>
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
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">
          Why List Your SaaS on SaaSBay?
        </h2>
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
  <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
    Frequently Asked Questions
  </h2>
  <div className="w-full max-w-3xl space-y-4">
   {faqs.map((faq, i) => (
  <motion.div
    key={faq.q}
    className="bg-primary/90 rounded-xl shadow transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
  >
    <button
      className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium focus:outline-none hover:bg-primary/80 rounded-xl transition-colors"
      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
    >
      <span className="flex items-start gap-2">
        <FaChevronDown
          className={`mt-1 transition-transform duration-300 ${
            openFAQ === i ? "rotate-180" : ""
          }`}
        />
        <span>{faq.q}</span>
      </span>
      <span>
        {openFAQ === i ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </span>
    </button>

    {/* Answer content */}
    {openFAQ === i && (
      <div className="px-10 pb-5">
        <p className="text-black text-sm leading-relaxed">{faq.a}</p>
      </div>
    )}
  </motion.div>
))}

  </div>
</section>

      {/* Final CTA */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-0 bg-gradient-to-r from-primary to-accent">
        <h2
          id="register"
          className="text-2xl md:text-3xl font-bold text-primary mb-6"
        >
          Ready to List Your SaaS Product?
        </h2>
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
                  <span className="text-xs text-secondary">
                    {progressPercent}% complete
                  </span>
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
                <h3 className="text-lg font-bold text-primary mb-2">
                  Vendor Registration Request Form
                </h3>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name *"
                  className="input"
                  value={vendorForm.name}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="designation"
                  type="text"
                  required
                  placeholder="Designation *"
                  className="input"
                  value={vendorForm.designation}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  className="input"
                  value={vendorForm.email}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="contactNumber"
                  type="tel"
                  required
                  placeholder="Contact Number *"
                  className="input"
                  value={vendorForm.contactNumber}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="companyName"
                  type="text"
                  required
                  placeholder="Company Name *"
                  className="input"
                  value={vendorForm.companyName}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="category"
                  type="text"
                  required
                  placeholder="Category *"
                  className="input"
                  value={vendorForm.category}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="subCategory"
                  type="text"
                  placeholder="Sub Category (if any)"
                  className="input"
                  value={vendorForm.subCategory}
                  onChange={(e) => handleChange(e, "vendor")}
                />
                <input
                  name="gstNo"
                  type="text"
                  placeholder="GST NO (optional)"
                  className="input"
                  value={vendorForm.gstNo}
                  onChange={(e) => handleChange(e, "vendor")}
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
