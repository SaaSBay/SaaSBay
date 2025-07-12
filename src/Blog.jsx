import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUserCircle, FaCalendarAlt, FaTag, FaArrowRight, FaEnvelope, FaFire } from "react-icons/fa";
import "./Blog.css";

// Dummy data for demonstration
const categories = ["All", "Productivity", "Finance", "Engineering", "Vendor Tips"];
const featuredArticle = {
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  title: "The Future of SaaS: Trends Every Buyer Should Know",
  excerpt: "Explore the latest SaaS trends and how they impact your business decisions in 2025 and beyond.",
  author: "Ayesha Khan",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  date: "July 4, 2025",
};
const articles = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Productivity",
    title: "10 SaaS Tools to Boost Your Team’s Efficiency",
    excerpt: "Discover top SaaS apps that help teams collaborate and get more done.",
    author: "Rahul Mehta",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "July 2, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
    category: "Finance",
    title: "How to Choose the Right Accounting SaaS",
    excerpt: "A step-by-step guide for businesses comparing finance software.",
    author: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "June 28, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Engineering",
    title: "DevOps in the Cloud: Best SaaS Platforms",
    excerpt: "What to look for in engineering SaaS and how to evaluate your options.",
    author: "Alex Chen",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    date: "June 25, 2025",
  },
  // Add more articles as needed
];

const trending = [
  {
    title: "Why SaaS Security Matters in 2025",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
  },
  {
    title: "Top 5 SaaS for Remote Teams",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&q=80",
  },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter articles by category and search
  const filteredArticles = articles.filter(
    (a) =>
      (activeCategory === "All" || a.category === activeCategory) &&
      (a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="blog-bg min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0 relative text-center mt-10 md:mt-20">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Insights, Trends, and Guides for SaaS Buyers & Vendors
        </motion.h1>
        <motion.p
          className="text-secondary text-lg md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Actionable advice, industry news, and expert tips to help you make smarter SaaS decisions.
        </motion.p>
        {/* Search Bar */}
        <motion.div
          className="w-full max-w-xl mx-auto mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center bg-white rounded-2xl border border-gray-200 shadow px-4 py-3 transition focus-within:ring-2 focus-within:ring-primary">
            <FaSearch className="text-primary mr-3" />
            <input
              type="text"
              placeholder="Search blog articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow bg-transparent outline-none text-base"
            />
          </div>
        </motion.div>
        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tag px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-accent"
                  : "bg-gray-100 text-secondary hover:bg-accent hover:text-primary"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full flex justify-center mb-12 px-4">
        <motion.div
          className="featured-article-card bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-1/2 w-full h-64 md:h-auto overflow-hidden group relative">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{featuredArticle.title}</h2>
            <p className="text-secondary mb-4">{featuredArticle.excerpt}</p>
            <div className="flex items-center gap-3 mb-4">
              <img src={featuredArticle.avatar} alt={featuredArticle.author} className="w-9 h-9 rounded-full" />
              <span className="font-semibold text-sm text-primary">{featuredArticle.author}</span>
              <FaCalendarAlt className="text-gray-400" />
              <span className="text-xs text-gray-500">{featuredArticle.date}</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center bg-primary text-accent px-5 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition text-base w-max group"
            >
              Read More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full flex justify-center px-4">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
          {/* Articles Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-12">
                No articles found.
              </div>
            ) : (
              filteredArticles.map((a, i) => (
                <motion.div
                  key={a.title}
                  className="blog-article-card bg-white rounded-2xl shadow-md flex flex-col overflow-hidden group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(126,198,246,0.15)" }}
                >
                  <div className="w-full h-44 overflow-hidden relative">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold transition-all group-hover:bg-primary group-hover:text-accent">
                      {a.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <a href="#" className="font-bold text-lg text-primary mb-1 hover:underline transition">
                      {a.title}
                    </a>
                    <p className="text-secondary text-sm mb-3">{a.excerpt}</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <img src={a.avatar} alt={a.author} className="w-7 h-7 rounded-full" />
                      <span className="text-xs text-primary font-semibold">{a.author}</span>
                      <FaCalendarAlt className="text-gray-400" />
                      <span className="text-xs text-gray-500">{a.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
          {/* Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaTag className="text-primary" /> Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    className="px-3 py-1 rounded-full bg-accent text-primary font-medium text-xs hover:bg-primary hover:text-accent transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaFire className="text-primary" /> Trending
              </h3>
              <ul className="space-y-3">
                {trending.map((t) => (
                  <li key={t.title} className="flex items-center gap-3">
                    <img src={t.image} alt={t.title} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="text-sm text-secondary">{t.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaEnvelope className="text-primary" /> Newsletter
              </h3>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-primary transition"
                />
                <button
                  type="submit"
                  className="bg-primary text-accent px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* Load More */}
      <div className="flex justify-center py-10">
        <button className="bg-primary text-accent px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary-light transition flex items-center gap-2 ripple">
          Load More
        </button>
      </div>

      {/* Footer CTA */}
      <footer className="w-full bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7] py-10 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">Stay in the Loop</h2>
        <form className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-primary transition"
          />
          <button
            type="submit"
            className="bg-primary text-accent px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition"
          >
            Subscribe
          </button>
        </form>
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-primary text-2xl hover:rotate-12 transition"><FaEnvelope /></a>
          <a href="#" className="text-primary text-2xl hover:rotate-12 transition"><FaUserCircle /></a>
        </div>
      </footer>
    </div>
  );
}