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
          className="pt-24 pb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
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

          {/* Quick Stats */}
          {/* <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Verified Vendors</p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <FaRocket />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Categories</p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <FaSearch />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Solutions</p>
            </motion.div>
          </div> */}
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
  );
};

export default Marketplace;
