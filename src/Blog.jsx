import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaSearch,
  FaUserCircle,
  FaCalendarAlt,
  FaTag,
  FaArrowRight,
  FaEnvelope,
  FaFire,
  FaBookOpen,
  FaBell,
  FaTradeFederation,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaEye,
  FaComment,
  FaShare,
  FaFilter,
  FaCogs,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import blogData from "./assets/blogData.json";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState(null);
  const [searchSpin, setSearchSpin] = useState(false);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const articlesRef = useRef(null);
  const articlesInView = useInView(articlesRef, { once: true });

  useEffect(() => {
    setData(blogData);
  }, []);

  if (!data)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-gray-600 text-lg">Loading amazing content...</p>
        </div>
      </div>
    );

  // ✅ SAFE DESTRUCTURING - Only after data is confirmed non-null
  const categories = data?.categories || [];
  const featuredArticle = data?.featuredArticle || {};
  const articles = data?.articles || [];
  const trending = data?.trending || [];

  // ✅ Now articles is safely available
  const filteredArticles = articles.filter(
    (a) =>
      (activeCategory === "All" || a.category === activeCategory) &&
      (search === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  console.log("Filtered Articles:", filteredArticles);
  // console.log("Active Category:", activeCategory);
  // console.log("Search Query:", search);
  console.log("All Articles:", articles);
  console.log("articlesInView:", articlesInView);

  const categoryIcons = {
    All: <FaBookOpen />,
    "SaaS Trends": <FaTradeFederation />,
    "Industry Insights": <FaLightbulb />,
    "Product Reviews": <FaStar />,
    "Startup Stories": <FaRocket />,
    "Best Practices": <FaRocket />,
    Tech: <FaCogs />, // Add this
    Productivity: <FaRocket />,
    Finance: <FaBriefcase />,
    Engineering: <FaCode />,
    "Vendor Tips": <FaLightbulb />,
  };

  const categoryColors = {
    All: "from-blue-500 to-cyan-600",
    "SaaS Trends": "from-purple-500 to-violet-600",
    "Industry Insights": "from-green-500 to-emerald-600",
    "Product Reviews": "from-yellow-500 to-orange-600",
    "Startup Stories": "from-pink-500 to-rose-600",
    "Best Practices": "from-indigo-500 to-blue-600",
    Tech: "from-green-500 to-blue-600", // Add this
    Productivity: "from-purple-500 to-pink-600",
    Finance: "from-green-500 to-emerald-600",
    Engineering: "from-blue-500 to-indigo-600",
    "Vendor Tips": "from-orange-500 to-red-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-x-hidden">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Hero Section */}
        <motion.section
          ref={heroRef}
          className="pt-24 pb-16 text-center"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl">
                <FaBookOpen />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                SaaS{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Actionable advice, industry trends, and expert insights to help
              you make
              <br className="hidden md:block" />
              smarter SaaS decisions for your business
            </p>

            {/* Enhanced Search Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100 max-w-full sm:max-w-3xl md:max-w-4xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-center bg-gray-50 rounded-2xl border-2 border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300 px-2 py-1">
                <input
                  type="text"
                  placeholder="Search for CRM insights, HR trends, marketing guides..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-grow w-full px-4 py-5 bg-transparent outline-none text-base sm:text-lg"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
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
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors flex items-center justify-center mr-2"
                  animate={searchSpin ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <FaSearch className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Enhanced Category Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat, index) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                    activeCategory === cat
                      ? `bg-gradient-to-r ${
                          categoryColors[cat] || "from-blue-500 to-purple-600"
                        } text-white shadow-xl`
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span
                    className={`text-lg ${
                      activeCategory === cat ? "text-white" : "text-blue-500"
                    }`}
                  >
                    {categoryIcons[cat] || <FaTag />}
                  </span>
                  {cat}
                  {cat === "All" && (
                    <span
                      className={`ml-1 px-2 py-1 rounded-full text-xs ${
                        activeCategory === cat
                          ? "bg-white/20"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {articles.length}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Enhanced Featured Article */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <FaFire className="text-orange-500" />
              Featured Article
            </h2>
            <p className="text-gray-600 text-lg">
              Don't miss our top pick this week
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Featured
                  </span>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={featuredArticle.avatar}
                    alt={featuredArticle.author}
                    className="w-12 h-12 rounded-full border-2 border-blue-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {featuredArticle.author}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <FaCalendarAlt />
                      <span>{featuredArticle.date}</span>
                      <FaEye />
                      <span>12.5k views</span>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700  px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 w-fit group">
                  <Link
                    to={`/blog/${featuredArticle.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    state={{ article: featuredArticle }}
                    className="flex items-center gap-2 "
                  >
                    <span className="text-white">Read Full Article</span>

                    <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Articles Grid */}
          <motion.section
            ref={articlesRef}
            className="flex-1"
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <FaBookOpen className="text-blue-500" />
                Latest Articles
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {filteredArticles.length}
                </span>
              </h2>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FaFilter />
                <span>Filter</span>
              </button>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filter
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <span
                          className={`absolute top-4 left-4 bg-gradient-to-r ${
                            categoryColors[article.category] ||
                            "from-blue-500 to-purple-600"
                          } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                        >
                          {article.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <Link
                          to={`/blog/${article.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          state={{ article }}
                          className="block"
                        >
                          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </Link>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={article.avatar}
                              alt={article.author}
                              className="w-8 h-8 rounded-full border border-gray-200"
                            />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {article.author}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <FaCalendarAlt />
                                <span>{article.date}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-gray-400">
                            <div className="flex items-center gap-1">
                              <FaEye className="text-xs" />
                              <span className="text-xs">2.1k</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaComment className="text-xs" />
                              <span className="text-xs">15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Enhanced Sidebar */}
          <aside className="xl:w-80 space-y-8">
            {/* Trending Articles */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white">
                  <FaFire />
                </div>
                Trending
              </h3>
              <div className="space-y-4">
                {trending.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-xl object-cover border border-gray-200"
                      />
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <FaEye />
                        <span>5.2k views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-3xl shadow-xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaBell className="text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm">
                  Get the latest SaaS insights delivered to your inbox
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Subscribe Now
                </button>
              </form>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                  <FaTag />
                </div>
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Load More Section */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
            Load More Articles
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
