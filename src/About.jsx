import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaBookOpen,
  FaBullseye,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaTools,
  FaCogs,
  FaChartBar,
  FaDatabase,
  FaShieldAlt,
  FaUserFriends,
  FaBuilding,
  FaHandshake,
  FaHeart,
  FaTags,
  FaStar,
  FaEye,
  FaArrowRight,
  FaQuoteLeft,
  FaCheckCircle,
  FaSearch,
  FaConnectdevelop,
  FaAward,
} from "react-icons/fa";
import Logo from "./assets/SaasLogo.png";

// Sample data
const stats = [
  { icon: <FaTags />, label: "SaaS Products", value: 50000 },
  { icon: <FaBuilding />, label: "Vendors", value: 5000 },
  { icon: <FaUsers />, label: "Categories", value: 20 },
  { icon: <FaStar />, label: "Verified Reviews", value: 100000 },
  { icon: <FaGlobe />, label: "Countries", value: 80 },
];

const missionPoints = [
  {
    icon: <FaSearch />,
    title: "Discover",
    description:
      "Transform how Indian businesses discover and adopt software by making the journey smarter, simpler, and more transparent",
  },
  {
    icon: <FaConnectdevelop />,
    title: "Connect",
    description:
      "Create a dedicated platform for SaaS providers to showcase their products and connect with the right audience at the right moment",
  },
  {
    icon: <FaAward />,
    title: "Empower",
    description:
      "Enable every decision maker with the clarity, confidence, and tools they need to choose the right software solutions",
  },
];

const whatWeDoData = [
  {
    title: "For Businesses",
    icon: <FaBuilding />,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Explore 20+ software categories",
      "Curated listings and side-by-side comparisons",
      "Direct access to trusted SaaS providers",
      "Clear evaluation without endless research",
    ],
  },
  {
    title: "For SaaS Providers",
    icon: <FaRocket />,
    color: "from-purple-500 to-pink-500",
    features: [
      "Showcase products to high-intent buyers",
      "Gain visibility among decision-makers",
      "Receive qualified leads from active prospects",
      "Tell your story and highlight your strengths",
    ],
  },
];

const whoWeHelpData = [
  {
    category: "For Businesses",
    icon: <FaBuilding />,
    color: "from-blue-500 to-cyan-500",
    description:
      "We help startups, SMEs, and growing enterprises across India discover the software that fits their goals, budgets, and workflows.",
    features: [
      "Marketing leads searching for automation tools",
      "HR teams exploring HRMS options",
      "Founders building their tech stack",
      "Decision makers across all departments",
    ],
  },
  {
    category: "For SaaS Providers",
    icon: <FaRocket />,
    color: "from-purple-500 to-pink-500",
    description:
      "We support product creators, tech founders, and growth teams by offering a platform to meaningfully present their solutions to the right audience.",
    features: [
      "Product creators seeking visibility",
      "Tech founders growing their reach",
      "Growth teams targeting quality leads",
      "SaaS providers wanting meaningful connections",
    ],
  },
];

const differentiators = [
  {
    icon: <FaSearch />,
    title: "Relevance & Experience",
    description:
      "Every product is thoughtfully organized, making it easy for businesses to explore, evaluate, and engage with solutions that truly match their needs",
  },
  {
    icon: <FaChartBar />,
    title: "Meaningful Journeys",
    description:
      "We go beyond showcasing software – we create meaningful journeys with intuitive product comparisons and direct provider engagement",
  },
  {
    icon: <FaHandshake />,
    title: "Trust-Focused",
    description:
      "We're building trust one discovery, one comparison, and one connection at a time, supporting informed decision-making at every step",
  },
];

// Components
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(timer);
          return value;
        }
        return prev + Math.ceil(value / 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <div
    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute -top-4 left-8">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <div className="pt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FaCogs
          className="absolute right-8 top-24 text-blue-200 text-6xl opacity-20 animate-pulse"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <FaChartBar
          className="absolute left-10 bottom-16 text-purple-200 text-6xl opacity-20"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <FaDatabase
          className="absolute left-1/2 top-4 -translate-x-1/2 text-blue-200 text-6xl opacity-20"
          style={{ animation: "float 7s ease-in-out infinite" }}
        />
        <FaShieldAlt
          className="absolute right-32 top-1/2 text-green-200 text-6xl opacity-20"
          style={{ animation: "float 9s ease-in-out infinite" }}
        />
        <FaUserFriends
          className="absolute left-1/2 bottom-8 -translate-x-1/2 text-purple-200 text-6xl opacity-20"
          style={{ animation: "float 5s ease-in-out infinite" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative z-10 py-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl shadow-lg shadow-blue-500/30">
                  <img
                    src={Logo}
                    alt="SaaSBay Logo"
                    className="w-20 h-20 shadow-blue-100 rounded-xl"
                  />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                SaaSBay
              </h1>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              India's First Curated SaaS Marketplace
            </p>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We believe that discovering the right software should be simple,
              thoughtful, and empowering. We make it easier to navigate the
              software world with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/marketplace">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg transform hover:scale-105">
                  Explore SaaS Products
                </button>
              </Link>
              <Link to="/list-your-products">
                <button className="border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                  List Your Product
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaGlobe />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Simplifying Software Discovery
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At SaasBay, we believe that discovering the right software
                  should be simple, thoughtful, and empowering. We are India's
                  first curated SaaS marketplace created to help businesses
                  explore, evaluate, and engage with the right technology
                  solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With thousands of SaaS products in the market, making
                  confident choices can often feel overwhelming. To simplify
                  this process, we built a platform that brings clarity to every
                  step of the software buying journey.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our approach is thoughtful, transparent, and designed around
                  the needs of Indian businesses. We're not just building a
                  marketplace, we're building a trusted space where software
                  discovery feels guided, not rushed.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Explore trusted tools with curated listings",
                    "Evaluate with side-by-side comparisons",
                    "Engage directly with SaaS providers",
                    "Designed specifically for Indian businesses",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-6">Our Promise</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">
                          Thoughtful, curated marketplace
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">
                          Transparent, guided discovery
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">
                          Direct vendor connections
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">
                          India-focused solutions
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">
                          Trusted, reliable platform
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaBookOpen />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-12 border border-green-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-teal-400/30 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Story"
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-80"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Born from Frustration, Built for Clarity
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The idea for SaasBay was born out of a simple but frustrating
                  experience trying to find the right SaaS product in a sea of
                  scattered information, confusing comparisons, and countless
                  browser tabs. As professionals ourselves, we realized how much
                  time and energy businesses were wasting just trying to make
                  informed decisions about the software they needed.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  There was no single place where Indian businesses could
                  explore their options, evaluate features clearly, and engage
                  with the right vendors, especially across multiple SaaS
                  categories. Most discovery processes felt like guesswork, and
                  great products often got lost in the noise.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We saw an opportunity to bring structure to the chaos. With
                  that, SaasBay was envisioned as a purpose-built SaaS
                  marketplace, one that simplifies the way businesses discover
                  software, while also supporting emerging and established SaaS
                  brands in showcasing their solutions to the right audience.
                </p>
                <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100">
                  <FaBullseye className="text-2xl text-green-600" />
                  <span className="text-lg font-semibold text-gray-900">
                    Creating a trusted space where software discovery is smarter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaBullseye />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To transform how Indian businesses discover and adopt software by
              making the journey smarter, simpler, and more transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {missionPoints.map((point, index) => (
              <FeatureCard
                key={index}
                icon={point.icon}
                title={point.title}
                description={point.description}
                delay={index * 200}
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bridging the Ecosystem
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                We're here to empower every decision maker, from marketing and
                HR managers to finance heads, product teams, revenue & growth,
                customer support and business owners, with the clarity,
                confidence, and tools they need to choose the right software
                solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                By bridging both sides of the ecosystem, SaasBay is building
                more than just a marketplace — we're enabling better decisions,
                faster connections, and a future where software adoption fuels
                business growth at every level.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaTools />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We simplify software discovery by bringing everything businesses
              need into one unified platform — curated listings, side-by-side
              comparisons, and direct access to trusted SaaS providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {whatWeDoData.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 group-hover:-translate-y-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors"
                      >
                        <FaArrowRight className="text-blue-500 text-sm flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We're Different Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaLightbulb />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                How We're Different
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that software discovery should feel clear, confident,
              and tailored, not overwhelming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {differentiators.map((diff, index) => (
              <FeatureCard
                key={index}
                icon={diff.icon}
                title={diff.title}
                description={diff.description}
                delay={index * 200}
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 border border-yellow-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Sets Us Apart
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                What sets us apart is our deep focus on relevance and
                experience. Every product listed on our platform is thoughtfully
                organized, making it easy for businesses to explore, evaluate,
                and engage with the solutions that truly match their needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                For SaaS providers, we offer more than visibility, we provide a
                platform to tell your story, highlight your strengths, and reach
                the right audience with purpose. At our core, we're building
                trust — one discovery, one comparison, and one connection at a
                time.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaUsers />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Who We Help</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SaasBay is built for both sides of the software ecosystem — the
              businesses searching for the right tools, and the SaaS providers
              building them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {whoWeHelpData.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 group-hover:-translate-y-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {category.category}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="space-y-4">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors"
                      >
                        <FaArrowRight className="text-blue-500 text-sm flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaEye />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To become the most trusted destination for SaaS discovery and
              decision-making in India.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-12 border border-indigo-100">
            <div className="text-center max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Shaping the Future of Software Discovery
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We imagine a future where every business — regardless of size or
                stage — can confidently find the right software without
                guesswork. A future where software adoption is driven by
                clarity, not clutter. Where SaaS providers of all scales have a
                fair and focused platform to grow, connect, and be discovered.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We're building more than a marketplace. We're shaping an
                ecosystem that brings transparency to software buying,
                visibility to software makers, and value to everyone involved.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                As the Indian SaaS landscape continues to grow, SaasBay aspires
                to be its most reliable guide, helping businesses and providers
                move forward, together.
              </p>

              <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
                <FaHandshake className="text-2xl text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Building India's Most Trusted SaaS Ecosystem
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-16 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Software Journey?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Join thousands of businesses and SaaS providers who trust SaaSBay
              for smarter software discovery and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/marketplace">
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg text-lg">
                  Explore Products
                </button>
              </Link>
              <Link to="/list-your-products">
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-600 transition-colors text-lg">
                  List Your SaaS
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
