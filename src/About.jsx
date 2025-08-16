import React, { useState } from "react";
import { 
  FaGlobe, FaBookOpen, FaBullseye, FaRocket, FaLightbulb, FaUsers, FaTools, 
  FaCogs, FaChartBar, FaDatabase, FaShieldAlt, FaUserFriends, FaBuilding, 
  FaHandshake, FaHeart, FaTags, FaStar, FaEye, FaArrowRight, FaQuoteLeft,
  FaCheckCircle, FaSearch, FaConnectdevelop, FaAward
} from "react-icons/fa";

// Sample data
const stats = [
  { icon: <FaTags />, label: "SaaS Products", value: 50000 },
  { icon: <FaBuilding />, label: "Vendors", value: 5000 },
  { icon: <FaUsers />, label: "Categories", value: 1500 },
  { icon: <FaStar />, label: "Verified Reviews", value: 100000 },
  { icon: <FaGlobe />, label: "Countries", value: 80 },
];

const testimonials = [
  {
    quote: "SaaSBay helped us find the perfect CRM in days, not weeks.",
    name: "Ayesha Khan",
    role: "Product Manager, Tech Startup",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    more: "The transparent reviews and side-by-side comparisons made our decision process so much easier.",
  },
  {
    quote: "Listing on SaaSBay brought us high-quality leads and valuable insights.",
    name: "Rahul Mehta",
    role: "SaaS Vendor, Marketing Tools",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    more: "We love how easy it is to manage our profile and connect with real buyers.",
  },
];

const missionPoints = [
  {
    icon: <FaSearch />,
    title: "Discover",
    description: "Transform how businesses discover software with curated, transparent listings"
  },
  {
    icon: <FaConnectdevelop />,
    title: "Connect",
    description: "Bridge the gap between SaaS providers and their ideal customers"
  },
  {
    icon: <FaAward />,
    title: "Empower",
    description: "Enable confident decision-making with comprehensive comparisons and reviews"
  }
];

const whoWeHelpData = [
  {
    category: "For Businesses",
    icon: <FaBuilding />,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Startups building their first tech stack",
      "SMEs optimizing their operations",
      "Enterprises scaling their solutions",
      "Decision makers across all departments"
    ]
  },
  {
    category: "For SaaS Providers",
    icon: <FaRocket />,
    color: "from-purple-500 to-pink-500",
    features: [
      "Product creators seeking visibility",
      "Tech founders growing their reach",
      "Growth teams targeting quality leads",
      "Established brands expanding market share"
    ]
  }
];

const visionSteps = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Platform",
    description: "Building India's most reliable SaaS discovery destination"
  },
  {
    icon: <FaLightbulb />,
    title: "Smart Discovery",
    description: "Replacing guesswork with data-driven software selection"
  },
  {
    icon: <FaHandshake />,
    title: "Unified Ecosystem",
    description: "Creating a fair marketplace for providers of all scales"
  }
];

// Components
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= value) {
          clearInterval(timer);
          return value;
        }
        return prev + Math.ceil(value / 100);
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
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
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial, isActive, onClick }) => (
  <div 
    className={`relative cursor-pointer transition-all duration-500 ${
      isActive ? 'scale-105 z-10' : 'scale-95 opacity-75'
    }`}
    onClick={onClick}
  >
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-blue-200">
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-16 h-16 rounded-full border-4 border-blue-100 mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-blue-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
      <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
        "{isActive ? testimonial.more : testimonial.quote}"
      </p>
      <div className="flex justify-end">
        <div className="flex text-yellow-400 text-lg">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FaCogs className="absolute right-8 top-24 text-blue-200 text-6xl opacity-20 animate-pulse" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <FaChartBar className="absolute left-10 bottom-16 text-purple-200 text-6xl opacity-20" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <FaDatabase className="absolute left-1/2 top-4 -translate-x-1/2 text-blue-200 text-6xl opacity-20" style={{ animation: 'float 7s ease-in-out infinite' }} />
        <FaShieldAlt className="absolute right-32 top-1/2 text-green-200 text-6xl opacity-20" style={{ animation: 'float 9s ease-in-out infinite' }} />
        <FaUserFriends className="absolute left-1/2 bottom-8 -translate-x-1/2 text-purple-200 text-6xl opacity-20" style={{ animation: 'float 5s ease-in-out infinite' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
       {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative z-10 py-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white text-3xl shadow-2xl">
                  <FaRocket />
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
              Discover, compare, and choose trusted software solutions—all in one place, 
              designed specifically for Indian businesses and their unique needs.
            </p>
            
            {/* Value Propositions */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaSearch />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discover</h3>
                <p className="text-gray-600">Find the perfect software solutions curated specifically for your business needs</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaChartBar />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare</h3>
                <p className="text-gray-600">Make informed decisions with transparent reviews and side-by-side comparisons</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
                <p className="text-gray-600">Connect directly with trusted SaaS providers and get personalized solutions</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg transform hover:scale-105">
                Explore SaaS Products
              </button>
              <button className="border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                List Your Product
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaGlobe />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">About SaaSBay</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Simplifying Software Discovery
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe that discovering the right software should be simple, thoughtful, and empowering. 
                  As India's first curated SaaS marketplace, we help businesses explore, evaluate, and engage 
                  with the right technology solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With thousands of SaaS products in the market, making confident choices can feel overwhelming. 
                  We built a platform that brings clarity to every step of the software buying journey.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Curated marketplace of trusted tools",
                    "Side-by-side product comparisons", 
                    "Direct connection with SaaS providers",
                    "Designed for Indian business needs"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-6">Our Commitment</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">Curated, high-quality SaaS listings</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">Transparent, unbiased reviews</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">Direct vendor connections</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">India-focused solutions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-300 text-xl flex-shrink-0" />
                        <span className="text-left">Always free for businesses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mission Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaBullseye />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming how Indian businesses discover and adopt software by making the journey 
              smarter, simpler, and more transparent.
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mission"
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-80"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Empowering Digital Transformation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We're creating a dedicated platform for SaaS providers to showcase their products, 
                  tell their stories, and connect with the right audience at the right moment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By bridging both sides of the ecosystem, SaaSBay enables better decisions, 
                  faster connections, and a future where software adoption fuels business growth at every level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Who We Help Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaUsers />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Who We Help</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Built for both sides of the software ecosystem — businesses searching for tools 
              and SaaS providers building them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {whoWeHelpData.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 group-hover:-translate-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                        <FaArrowRight className="text-blue-500 text-sm flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Vision Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaEye />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To become the most trusted destination for SaaS discovery and decision-making in India.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-12 border border-indigo-100">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {visionSteps.map((step, index) => (
                <FeatureCard 
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={index * 300}
                />
              ))}
            </div>
            
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Shaping the Future of Software Discovery
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We imagine a future where every business can confidently find the right software without guesswork. 
                  Where software adoption is driven by clarity, not clutter. Where SaaS providers of all scales have 
                  a fair and focused platform to grow, connect, and be discovered.
                </p>
                <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
                  <FaHandshake className="text-2xl text-blue-600" />
                  <span className="text-lg font-semibold text-gray-900">
                    Building Tomorrow's Software Ecosystem Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        {/* <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaHeart />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">What Our Community Says</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real feedback from businesses and SaaS providers who've experienced the SaaSBay difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={activeTestimonial === index}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section> */}

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
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg text-lg">
                Explore Products
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-600 transition-colors text-lg">
                List Your SaaS
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default About;