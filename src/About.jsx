import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUsers, FaTags,FaRocket, FaBuilding, FaStar, FaGlobe, FaHeart, FaHandshake, FaLightbulb, FaUserFriends, FaCogs, FaChartBar, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css"; // Create this for custom styles/animations

// --- Data ---

const stats = [
  { icon: <FaTags />, label: "SaaS Products", value: 50000 },
  { icon: <FaBuilding />, label: "Vendors", value: 5000 },
  { icon: <FaUsers />, label: "Categories", value: 1500 },
  { icon: <FaStar />, label: "Verified Reviews", value: 100000 },
  { icon: <FaGlobe />, label: "Countries", value: 80 },
];

const timeline = [
  {
    year: "2025",
    title: "Founded",
    icon: <FaRocket />,
    desc: "SaaSBay was born from a simple question: Why can’t buying software be as transparent as booking a flight?",
  },
  {
    year: "2026",
    title: "First 10,000 Users",
    icon: <FaUserFriends />,
    desc: "Our community grew rapidly, validating the need for real, peer-driven SaaS reviews.",
  },
  {
    year: "2027",
    title: "Global Expansion",
    icon: <FaGlobe />,
    desc: "SaaSBay reached users in 80+ countries, empowering businesses worldwide.",
  },
  {
    year: "2028",
    title: "Giving Back",
    icon: <FaHeart />,
    desc: "Launched our tech education pledge: every review helps fund STEM learning for underrepresented communities.",
  },
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

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

// --- Components ---

function AnimatedStats() {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center bg-white/80 rounded-2xl shadow p-5"
          custom={i}
          variants={fadeInUp}
        >
          <span className="text-primary text-3xl mb-2">{stat.icon}</span>
          <CountUp
            end={stat.value}
            duration={2}
            separator=","
            className="font-bold text-2xl md:text-3xl text-secondary"
          />
          <span className="text-xs md:text-base text-gray-600 mt-1">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function AboutTimeline() {
  return (
    <VerticalTimeline lineColor="#7ec6f6">
      {timeline.map((item, i) => (
        <VerticalTimelineElement
          key={i}
          date={item.year}
          icon={item.icon}
          iconStyle={{ background: "#7ec6f6", color: "#fff" }}
          contentStyle={{ background: "#f5fafd", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid #e3f1fa" }}
        >
          <h3 className="font-bold text-primary">{item.title}</h3>
          <p className="text-secondary">{item.desc}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

function TestimonialCarousel() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="flex gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`testimonial-card ${active === i ? "flipped" : ""}`}
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            <div className="testimonial-front flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-64 h-56 justify-center">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mb-3" />
              <p className="text-secondary text-sm mb-2">"{t.quote}"</p>
              <span className="font-bold text-primary">{t.name}</span>
              <span className="text-xs text-gray-500">{t.role}</span>
            </div>
            <div className="testimonial-back flex flex-col items-center bg-primary text-accent rounded-2xl shadow-lg p-6 w-64 h-56 justify-center">
              <p className="mb-4">{t.more}</p>
              <span className="font-bold">{t.name}</span>
              <span className="text-xs">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${active === i ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main Page ---

export default function About() {
  return (
    <div className="about-bg min-h-screen w-full overflow-x-hidden" >
      {/* Hero / Intro */}
      <section className="w-full flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] py-12 px-4 md:px-0 relative text-center mt-10 md:mt-20">
        <FaCogs className="text-primary absolute right-8 top-24 text-3xl md:text-5xl opacity-20 animate-float z-10" />
        <FaChartBar className="text-secondary absolute left-10 bottom-16 text-3xl md:text-5xl opacity-20 animate-float-rev z-10" />
        <FaDatabase className="text-primary absolute left-1/2 top-4 -translate-x-1/2 text-3xl md:text-5xl opacity-20 animate-float z-10" />
        <FaShieldAlt className="text-secondary absolute right-16 md:right-32 top-1/2 text-3xl md:text-5xl opacity-20 animate-float z-10" />
        <FaUserFriends className="text-primary absolute left-1/2 bottom-8 -translate-x-1/2 text-3xl md:text-5xl opacity-20 animate-float-slow z-10" />
        {/* Headline and text */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-primary mb-6 relative z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary">SaaSBay</span>: The <span className="text-secondary">Largest</span>,<br />
          Most <span className="text-secondary">Trusted</span> SaaS Marketplace
        </motion.h1>
        <motion.p
          className="text-secondary text-lg md:text-2xl max-w-2xl mb-4 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Helping professionals and businesses make smarter software decisions<br className="hidden md:block" />
          through authentic peer reviews.
        </motion.p>
        <motion.p
          className="text-gray-500 max-w-xl mb-8 relative z-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Thousands of professionals rely on SaaSBay’s real user reviews to make confident software decisions.
        </motion.p>
        {/* Subtle animated background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 about-gradient-bg"></div>
      </section>

      {/* Mission */}
      <section className="w-full flex flex-col items-center py-10 px-4 md:px-0">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-primary mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Mission & What Sets Us Apart
        </motion.h2>
        <motion.p
          className="text-secondary text-center max-w-2xl mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We’re democratizing the way businesses find software, replacing outdated analyst reports with the real voices of users. At SaaSBay, your experience drives smarter, more transparent software choices.
        </motion.p>
        <motion.p
          className="text-gray-500 text-center max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Building trust through authentic voices and verified reviews.
        </motion.p>
      </section>

      {/* Timeline / Our Story */}
      <section className="w-full py-10 px-0 md:px-0 bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7]">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">Our Story</h2>
        <AboutTimeline />
      </section>

      {/* By the Numbers */}
      <section className="w-full flex flex-col items-center py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">By the Numbers</h2>
        <AnimatedStats />
      </section>

      {/* How SaaSBay Works */}
      <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 py-10 px-4 md:px-0">
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <FaUsers className="text-primary text-3xl mb-2" />
          <h3 className="font-bold text-lg mb-2">For Buyers</h3>
          <ul className="text-secondary text-center space-y-1 text-sm">
            <li>Discover, compare, and review SaaS products</li>
            <li>Use filters and side-by-side comparisons</li>
            <li>Read authentic, peer-driven reviews</li>
          </ul>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <FaBuilding className="text-primary text-3xl mb-2" />
          <h3 className="font-bold text-lg mb-2">For Vendors</h3>
          <ul className="text-secondary text-center space-y-1 text-sm">
            <li>List your SaaS and manage your profile</li>
            <li>Collect reviews and build reputation</li>
            <li>Reach a global audience of high-intent buyers</li>
          </ul>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-10 px-4 md:px-0 bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7]">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">Customer Voices</h2>
        <TestimonialCarousel />
      </section>

      {/* Culture & Values */}
      <section className="w-full flex flex-col items-center py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Culture & Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaRocket className="text-primary text-3xl mb-2" />
            <span className="font-bold">Performance</span>
            <span className="text-xs text-secondary text-center">We celebrate results and thoughtful work.</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-primary text-3xl mb-2" />
            <span className="font-bold">Entrepreneurship</span>
            <span className="text-xs text-secondary text-center">Grit and innovation drive us forward.</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHandshake className="text-primary text-3xl mb-2" />
            <span className="font-bold">Authenticity</span>
            <span className="text-xs text-secondary text-center">Real people, real reviews, real impact.</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart className="text-primary text-3xl mb-2" />
            <span className="font-bold">Kindness</span>
            <span className="text-xs text-secondary text-center">Compassion and empathy in everything we do.</span>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="w-full flex flex-col items-center py-10 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Giving Back</h2>
        <p className="text-secondary text-center max-w-xl">
          SaaSBay is committed to giving back. For every verified review, we donate to tech education for underrepresented communities.
        </p>
      </section>

      {/* Call to Action */}
      <section className="w-full flex flex-col items-center py-12 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to join the SaaSBay community?</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="/list-your-products" className="bg-primary text-accent px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary-light transition text-base text-center">
            List your SaaS
          </a>
          <a href="/leave-review" className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/10 transition text-base text-center">
            Leave a Review
          </a>
          <a href="/contact" className="bg-white border border-primary text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/10 transition text-base text-center">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}