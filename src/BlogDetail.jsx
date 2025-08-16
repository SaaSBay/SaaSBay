import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowLeft,
  FaShareAlt,
  FaTags,
  FaEye,
  FaUser,
  FaClock,
  FaHeart,
  FaBookmark,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaCopy,
} from "react-icons/fa";

export default function BlogDetail() {
  const location = useLocation();
  const article = location.state?.article;

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article.title;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
      default:
        if (navigator.share) {
          navigator.share({ title: text, url: url });
        }
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaBookmark className="text-pink-500 text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Sorry, we couldn't find the article you were looking for.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white pt-16">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-10 top-24 w-16 h-16 bg-pink-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-16 top-40 w-12 h-12 bg-purple-200 rounded-full opacity-20"
          animate={{ y: [0, -18, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Banner */}
        {/* Hero Banner */}
        <motion.div
          className="w-full relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600">
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
              <div className="max-w-6xl mx-auto text-white">
                

                <motion.h1
                  className="  text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg max-w-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                 
                 <span className="text-white">{article.title}</span> 
                </motion.h1>

                <motion.div
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className="w-12 h-12 rounded-full border-2 border-white/60 shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-lg">{article.author}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm mt-1">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-sm" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaClock className="text-sm" />5 min read
                        </span>
                        <span className="flex items-center gap-2">
                          <FaEye className="text-sm" />
                          2.1k views
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Sharing Bar */}
            <div className="border-b border-gray-100 p-6 bg-gray-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FaShareAlt className="text-gray-500" />
                  <span className="text-gray-700 font-medium">
                    Share this article
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                    title="Share on Facebook"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors"
                    title="Share on Twitter"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedin />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
                    title="Copy Link"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-8 md:p-12">
              {/* Excerpt */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed italic">
                  {article.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <article
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-purple-800
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-pink-700
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-pink-700
                  prose-ul:my-6 prose-ul:ml-0 prose-li:my-2 prose-li:marker:text-pink-500
                  prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors">
                      <FaHeart />
                      Like Article
                    </button>
                  </div>

                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaArrowLeft />
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
