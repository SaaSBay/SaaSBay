import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
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
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";
import VendorPageImg from "./assets/VendorPageImg.png";

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
          className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg p-6 border border-blue-100"
          custom={i}
          variants={fadeInUp}
        >
          <span className="text-primary text-4xl mb-2 drop-shadow-lg">{stat.icon}</span>
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
      <div className="flex gap-6 justify-center">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`testimonial-card ${active === i ? "flipped" : ""} transition-transform duration-500`}
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            <div className="testimonial-front flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-72 h-56 justify-center border border-blue-100">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mb-3 shadow" />
              <p className="text-secondary text-sm mb-2">"{t.quote}"</p>
              <span className="font-bold text-primary">{t.name}</span>
              <span className="text-xs text-gray-500">{t.role}</span>
            </div>
            <div className="testimonial-back flex flex-col items-center bg-primary text-accent rounded-2xl shadow-lg p-6 w-72 h-56 justify-center border border-blue-100">
              <p className="mb-4">{t.more}</p>
              <span className="font-bold">{t.name}</span>
              <span className="text-xs">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- Main Page ---

const About = () => (
  <div className="max-w-6xl mx-auto px-4 py-10 pt-16">
    {/* About Us: Fade in with floating globe */}
    <section className="w-full flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] py-12 px-4 md:px-0 relative text-center mt-10 md:mt-20">
      <FaCogs className="text-primary absolute right-8 top-24 text-4xl md:text-6xl opacity-20 animate-float z-10" />
      <FaChartBar className="text-secondary absolute left-10 bottom-16 text-4xl md:text-6xl opacity-20 animate-float-rev z-10" />
      <FaDatabase className="text-primary absolute left-1/2 top-4 -translate-x-1/2 text-4xl md:text-6xl opacity-20 animate-float z-10" />
      <FaShieldAlt className="text-secondary absolute right-16 md:right-32 top-1/2 text-4xl md:text-6xl opacity-20 animate-float z-10" />
      <FaUserFriends className="text-primary absolute left-1/2 bottom-8 -translate-x-1/2 text-4xl md:text-6xl opacity-20 animate-float-slow z-10" />
      {/* Headline and text */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-primary mb-6 relative z-20 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-secondary">SaaSBay</span>: India’s First Curated<br />
        <span className="text-secondary">SaaS Marketplace</span>
      </motion.h1>
      <motion.p
        className="text-secondary text-lg md:text-2xl max-w-2xl mb-4 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Discover, compare, and engage with trusted software solutions—<br className="hidden md:block" />
        all in one place, designed for Indian businesses.
      </motion.p>
      <motion.p
        className="text-gray-500 max-w-xl mb-8 relative z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        SaasBay brings clarity to every step of your software buying journey.<br />
        Explore curated tools, evaluate with side-by-side comparisons, and connect directly with SaaS providers—whether you’re a startup or an established company.
      </motion.p>
      {/* Subtle animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 about-gradient-bg"></div>
    </section>

    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-10 p-6 rounded-lg shadow-md bg-gray-50"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2 justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="animate-float"
          whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
        >
          <FaGlobe className="text-blue-500" />
        </motion.span>
        About Us
      </motion.h2>
      <p className="text-base md:text-lg text-secondary">
        At SaasBay, we believe that discovering the right software should be
        simple, thoughtful, and empowering.
        <br />
        <br />
        We are India’s first curated SaaS marketplace created to help businesses
        explore, evaluate, and engage with the right technology solutions. With
        thousands of SaaS products in the market, making confident choices can
        often feel overwhelming.
        <br />
        <br />
        To simplify this process, we built a platform that brings clarity to
        every step of the software buying journey.
        <br />
        <br />
        SaasBay helps you explore trusted tools, evaluate them with side-by-side
        comparisons, and engage directly with SaaS Providers all in one place.
        Whether you're a startup building your first tech stack or an
        established company refining your operations, we make it easier to
        navigate the software world with confidence.
        <br />
        <br />
        Our approach is thoughtful, transparent, and designed around the needs
        of Indian businesses. We’re not just building a marketplace, we’re
        building a trusted space where software discovery feels guided, not
        rushed.
      </p>
    </motion.section>

    {/* Our Story: Slide in from left with timeline and flipping book icon */}
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-10 p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <motion.h2
        id="our-story"
        className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2 justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="animate-float-slow"
          whileHover={{ rotateY: 180, transition: { duration: 0.5 } }}
        >
          <FaBookOpen className="text-green-500" />
        </motion.span>
        Our Story
      </motion.h2>
      <VerticalTimeline lineColor="#3b82f6">
        <VerticalTimelineElement
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          icon={<FaBookOpen />}
        >
          <h3 className="font-bold">The Frustration</h3>
          <p>
            The idea for SaasBay was born out of a simple but frustrating
            experience trying to find the right SaaS product in a sea of
            scattered information, confusing comparisons, and countless browser
            tabs. As professionals ourselves, we realized how much time and
            energy businesses were wasting just trying to make informed
            decisions about the software they needed.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fde68a", color: "#fff" }}
          icon={<FaBullseye />}
        >
          <h3 className="font-bold">The Gap</h3>
          <p>
            There was no single place where Indian businesses could explore
            their options, evaluate features clearly, and connect with the right
            vendors, especially across multiple SaaS categories. Most discovery
            processes felt like guesswork, and great products often got lost in
            the noise.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#f43f5e", color: "#fff" }}
          icon={<FaRocket />}
        >
          <h3 className="font-bold">The Opportunity</h3>
          <p>
            We saw an opportunity to bring structure to the chaos. With that,
            SaasBay was envisioned as a purpose-built SaaS marketplace, one that
            simplifies the way businesses discover software, while also
            supporting emerging and established SaaS brands in showcasing their
            solutions to the right audience.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#22c55e", color: "#fff" }}
          icon={<FaTools />}
        >
          <h3 className="font-bold">The Goal</h3>
          <p>
            From our earliest idea to our current platform, the goal has always
            been the same: To create a trusted space where software discovery is
            not just easier, but smarter, for every business, at every stage.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.section>

    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-10 p-6 rounded-lg shadow-md bg-gray-50"
    >
      {/* Centered heading above flex row */}
      <motion.h2
        id="mission"
        className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2 justify-center text-primary text-center"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="animate-float"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <FaBullseye className="text-red-500" />
        </motion.span>
        Our Mission
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={VendorPageImg}
            alt="Our Mission"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            style={{ transform: "rotate(-3deg)" }}
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-base md:text-lg text-secondary leading-relaxed text-center md:text-left">
            At SaasBay, our mission is to transform how Indian businesses discover
            and adopt software by making the journey smarter, simpler, and more
            transparent. At the same time, we’re creating a dedicated platform for
            SaaS providers to showcase their products, tell their stories, and
            connect with the right audience at the right moment.
            <br />
            <br />
            We’re here to empower every decision maker, from marketing and HR
            managers to finance heads, product teams, revenue & growth, customer
            support and business owners, with the clarity, confidence, and tools
            they need to choose the right software solutions. For SaaS providers, we
            offer a meaningful space to grow visibility, reach high-intent buyers,
            and build lasting trust in a competitive market.
            <br />
            <br />
            By bridging both sides of the ecosystem, SaasBay is building more than
            just a marketplace — we're enabling better decisions, faster
            connections, and a future where software adoption fuels business growth
            at every level.
          </p>
        </div>
      </div>
    </motion.section>

    {/* Who We Help: Image on the right, heading centered */}
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-10 p-8 rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-100 max-w-4xl mx-auto border border-blue-100"
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={VendorPageImg}
            alt="Who We Help"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            style={{ transform: "rotate(2deg)" }}
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <motion.h2
            id="who-we-help"
            className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2 justify-center text-primary text-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span className="animate-float-slow" whileHover={{ scale: 1.2 }}>
              <FaUsers className="text-purple-500" />
            </motion.span>
            Who We Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-lg text-secondary leading-relaxed text-center"
          >
            SaasBay is built for both sides of the software ecosystem — the
            businesses searching for the right tools, and the SaaS providers
            building them.
            <br />
            <br />
            <span className="font-semibold">For Businesses:</span>
            <br />
            We help startups, SMEs, and growing enterprises across India discover
            the software that fits their goals, budgets, and workflows. Whether it’s
            a marketing lead searching for automation tools, an HR team exploring
            HRMS options, or a founder building their tech stack, SaasBay makes
            software selection simpler, smarter, and more confident.
            <br />
            <br />
            <span className="font-semibold">For SaaS Providers:</span>
            <br />
            We support product creators, tech founders, and growth teams by offering
            a platform to meaningfully present their solutions to the right
            audience. From brand visibility to qualified leads, SaasBay helps SaaS
            providers grow faster by being where businesses are actively looking for
            them.
          </motion.p>
        </div>
      </div>
    </motion.section>

    {/* Our Vision: Image on the left, heading centered */}
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-10 p-8 rounded-2xl shadow-xl bg-white/90 max-w-4xl mx-auto border border-blue-100"
    >
      {/* Centered heading above flex row */}
      <motion.h2
        id="vision"
        className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2 justify-center text-primary text-center"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="animate-float-slow"
          animate={{
            textShadow: ["0 0 5px #fff", "0 0 10px #fff", "0 0 5px #fff"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaTools className="text-indigo-500" />
        </motion.span>
        Our Vision
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={VendorPageImg}
            alt="Our Vision"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            style={{ transform: "rotate(-2deg)" }}
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <p className="text-base md:text-lg text-secondary leading-relaxed text-center md:text-left">
            At SaasBay, our vision is to become the most trusted destination for
            SaaS discovery and decision-making in India.
            <br />
            <br />
            We imagine a future where every business — regardless of size or stage —
            can confidently find the right software without guesswork. A future
            where software adoption is driven by clarity, not clutter. Where SaaS
            providers of all scales have a fair and focused platform to grow,
            connect, and be discovered.
            <br />
            <br />
            We’re building more than a marketplace. We’re shaping an ecosystem that
            brings transparency to software buying, visibility to software makers,
            and value to everyone involved.
            <br />
            <br />
            As the Indian SaaS landscape continues to grow, SaasBay aspires to be
            its most reliable guide, helping businesses and providers move forward,
            together.
          </p>
        </div>
      </div>
    </motion.section>
  </div>
);

export default About;
