import React, { useState } from "react";
import { motion } from "framer-motion";
import VendorFilters from "./VendorFilters";
import VendorGrid from "./VendorGrid";
import Pagination from "./Pagination";
import { FaStore, FaSearch, FaUsers, FaRocket } from "react-icons/fa";

const Marketplace = () => {
  const [filters, setFilters] = useState({
    category: "",
    search: "",
    sort: "relevance",
  });
  const [view, setView] = useState("grid");

  // Modal state (always open for now)
  const [showModal] = useState(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-x-hidden">
      {/* Modal Overlay - covers only Marketplace content */}
      {showModal && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-4 max-w-md w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          >
            {/* Illustration */}
            <div className="mb-6">
              <div className="relative mx-auto w-24 h-24 mb-4">
                {/* Construction/Work Icon */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚧
                </motion.div>
                {/* Animated dots */}
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-0 -left-3 w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Work in Progress
            </h2>
            {/* Description */}
            <p className="text-gray-600 text-lg mb-6">
              We're building something amazing! This feature will be available soon.
            </p>
            {/* Loading Animation */}
            <div className="flex justify-center items-center gap-2 mb-6">
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }}
              />
              <motion.div
                className="w-2 h-2 bg-pink-500 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
              />
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-gray-500">75% Complete</p>
          </motion.div>
        </div>
      )}

      {/* Blur the background content when modal is open */}
      <div className={showModal ? "pointer-events-none filter blur-sm select-none" : ""}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Enhanced Hero Section */}
          <motion.section
            className="pt-24 pb-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl">
                <FaStore />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                SaaS{" "}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Hub
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover and connect with India's leading SaaS vendors
              <br className="hidden md:block" />
              Find the perfect software solutions for your business
            </p>
          </motion.section>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <VendorFilters
              filters={filters}
              setFilters={setFilters}
              view={view}
              setView={setView}
            />
          </motion.div>

          {/* Vendor Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <VendorGrid filters={filters} view={view} />
          </motion.div>

          {/* Pagination */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Pagination />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
