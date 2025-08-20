import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaSearch,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaGlobe,
  FaCogs,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaCode,
  FaHeadset,
} from "react-icons/fa";
import Banner1 from "./assets/Banner1.png";
import Banner2 from "./assets/Banner_2.png";

// Sample data (replace with your actual imports)
const bannerImages = [
  Banner1, // Replace with your Dummy1
  Banner2, // Replace with your Dummy2
];

const categories = [
  {
    name: "Accounting & Finance",
    icon: <FaChartLine />,
    color: "from-green-500 to-emerald-600",
    count: "200+",
  },
  {
    name: "Customer Support",
    icon: <FaHeadset />,
    color: "from-blue-500 to-cyan-600",
    count: "150+",
  },
  {
    name: "Development & Engineering",
    icon: <FaCode />,
    color: "from-purple-500 to-violet-600",
    count: "300+",
  },
  {
    name: "HR & People Management",
    icon: <FaUsers />,
    color: "from-pink-500 to-rose-600",
    count: "180+",
  },
  {
    name: "Sales & Marketing",
    icon: <FaRocket />,
    color: "from-orange-500 to-red-600",
    count: "250+",
  },
];

const features = [
  {
    icon: <FaSearch />,
    title: "Smart Discovery",
    description:
      "Find the perfect SaaS solution with our intelligent search and filtering system",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Reviews",
    description:
      "Make confident decisions with authentic reviews from real Indian businesses",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaHandshake />,
    title: "Direct Connect",
    description:
      "Connect directly with SaaS providers for personalized demos and pricing",
    color: "from-purple-500 to-violet-500",
  },
];

const benefits = [
  {
    icon: <FaLightbulb />,
    title: "For Businesses",
    points: [
      "Save weeks of research time",
      "Compare solutions side-by-side",
      "Get India-specific pricing",
      "Access exclusive deals",
    ],
  },
  {
    icon: <FaRocket />,
    title: "For SaaS Providers",
    points: [
      "Reach high-intent buyers",
      "Showcase your unique value",
      "Build trust through reviews",
      "Grow in the Indian market",
    ],
  },
];

const testimonials = [
  {
    quote:
      "SaaSBay is exactly what the Indian SaaS ecosystem needed. Can't wait to explore!",
    name: "Priya Sharma",
    role: "Product Manager, Bangalore",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote:
      "Finally, a platform built for Indian businesses. Looking forward to listing our product!",
    name: "Arjun Patel",
    role: "SaaS Founder, Mumbai",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];
const steps = [
  {
    step: "01",
    title: "Explore",
    description: "Browse curated SaaS categories",
  },
  {
    step: "02",
    title: "Evaluate",
    description: "Assess features and compare solutions",
  },
  {
    step: "03",
    title: "Engage",
    description: "Connect with providers and ask questions",
  },
  {
    step: "04",
    title: "Get Started",
    description: "Choose the right software and take action",
  },
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchSpin, setSearchSpin] = useState(false);
  const searchInputRef = useRef(null);

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true });

  const categoriesRef = useRef(null);
  const categoriesInView = useInView(categoriesRef, { once: true });

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white">
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

      {/* Hero Banner Carousel */}
      <section className="relative w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={bannerImages[currentSlide]}
              alt={`Banner Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* <div className="text-center text-white px-6 max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              India's First Curated
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SaaS Marketplace
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover, Compare & Connect with the right software solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                Explore Products
              </button>
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300">
                List Your SaaS
              </button>
            </motion.div>
          </div> */}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 shadow-lg hover:bg-white transition z-20"
          onClick={goToPrev}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 shadow-lg hover:bg-white transition z-20"
          onClick={goToNext}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Search Section */}
        {/* <motion.section 
          className="relative -mt-20 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Find Your Perfect SaaS Solution
              </h2>
              <p className="text-gray-600 text-lg">
                Search through thousands of curated software solutions designed for Indian businesses
              </p>
            </div>
            
            <div className="flex items-center bg-gray-50 rounded-2xl border-2 border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300 p-2">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for CRM, HR software, accounting tools..."
                className="flex-grow px-6 py-4 bg-transparent outline-none text-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setSearchSpin(true);
                    setTimeout(() => setSearchSpin(false), 700);
                  }
                }}
              />
              <motion.button
                onClick={() => {
                  setSearchSpin(true);
                  setTimeout(() => setSearchSpin(false), 700);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-colors"
                animate={searchSpin ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.7 }}
              >
                <FaSearch className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.section> */}

        {/* Categories Section */}
        {/* <motion.section
          ref={categoriesRef}
          className="mb-24"
          initial="hidden"
          animate={categoriesInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-8 py-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse software solutions across all business functions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  categoriesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {category.count} Solutions
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          className="mb-24 pt-16"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose SaaSBay?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing how Indian businesses discover and adopt
              software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center text-white text-4xl mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How SaaSBay Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to the perfect software solution in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-xl">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {benefit.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Early Adopters Testimonials */}
        {/* <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Early Community Buzz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What potential users are saying about SaaSBay
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className="text-blue-200 text-4xl mb-6" />
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Enhanced CTA Section */}
        <motion.section
          className="mb-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white text-center shadow-2xl mx-auto max-w-6xl">
            <div className="max-w-4xl mx-auto">
              {/* Responsive heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Ready to Join the Revolution?
              </h2>

              {/* Responsive description */}
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-2">
                Be among the first to experience India's most comprehensive SaaS
                marketplace. Whether you're looking for software or want to
                showcase your SaaS solution, we're here to help.
              </p>

              {/* Cards container - responsive layout */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {/* Business card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 transition-transform duration-300 hover:scale-105">
                  <FaBuilding className="text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto text-white/90" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    For Businesses
                  </h3>
                  <p className="opacity-90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Get early access to curated SaaS solutions with exclusive
                    launch benefits
                  </p>
                  <button className="w-full sm:w-auto bg-white text-blue-600 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base">
                    Join Waitlist
                  </button>
                </div>

                {/* SaaS Provider card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 transition-transform duration-300 hover:scale-105">
                  <FaRocket className="text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto text-white/90" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    For SaaS Providers
                  </h3>
                  <p className="opacity-90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    List your product and be featured among the first 50 early
                    adopters
                  </p>
                  <button className="w-full sm:w-auto bg-white text-blue-600 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base">
                    List Your SaaS
                  </button>
                </div>
              </div>

              
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
