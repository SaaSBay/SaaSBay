import React from "react";
import { FaFilter, FaBriefcase, FaUsersCog, FaHeadset, FaCode, FaRocket, FaSearch, FaTh, FaList, FaSort } from "react-icons/fa";

const categories = [
  { name: "All", icon: <FaFilter />, color: "from-blue-500 to-cyan-600" },
  { name: "Accounting", icon: <FaBriefcase />, color: "from-green-500 to-emerald-600" },
  { name: "HR", icon: <FaUsersCog />, color: "from-pink-500 to-rose-600" },
  { name: "Support", icon: <FaHeadset />, color: "from-blue-500 to-cyan-600" },
  { name: "Development", icon: <FaCode />, color: "from-purple-500 to-violet-600" },
  { name: "Sales", icon: <FaRocket />, color: "from-orange-500 to-red-600" },
];

const VendorFilters = ({ filters, setFilters, view, setView }) => (
  <div className="vendor-filters bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-8">
    {/* Search Bar */}
    <div className="mb-6">
      <div className="flex items-center bg-gray-50 rounded-2xl border-2 border-gray-200 focus-within:border-pink-500 focus-within:bg-white transition-all duration-300 p-2">
        <FaSearch className="text-gray-400 ml-4 mr-3" />
        <input
          type="text"
          placeholder="Search vendors by name or service..."
          value={filters.search || ""}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="flex-grow px-4 py-3 bg-transparent outline-none text-base"
        />
      </div>
    </div>

    {/* Category Filters */}
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <div className="flex gap-3 flex-wrap justify-center lg:justify-start flex-grow">
        {categories.map(({ name, icon, color }) => (
          <button
            key={name}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 cursor-pointer shadow-lg ${
              filters.category === name || (name === "All" && !filters.category)
                ? `bg-gradient-to-r ${color} text-white shadow-xl transform scale-105`
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-pink-300 hover:shadow-xl hover:scale-105"
            }`}
            onClick={() => setFilters({ ...filters, category: name === "All" ? "" : name })}
          >
            <span className={`text-lg ${
              filters.category === name || (name === "All" && !filters.category) 
                ? "text-white" 
                : "text-pink-600"
            }`}>
              {icon}
            </span>
            {name}
            {name === "All" && (
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                !filters.category ? "bg-white/20" : "bg-pink-100 text-pink-600"
              }`}>
                All
              </span>
            )}
          </button>
        ))}
      </div>

      {/* View Toggle & Sort */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaSort className="text-gray-500" />
          <select 
            value={filters.sort || "relevance"} 
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            className="bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="relevance">Relevance</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
            <option value="location">Location</option>
          </select>
        </div>
        
        <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setView("grid")}
            className={`p-3 rounded-xl transition-all duration-300 ${
              view === "grid" 
                ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg" 
                : "text-gray-600 hover:bg-white hover:text-pink-600"
            }`}
            aria-label="Grid View"
          >
            <FaTh className="text-lg" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-3 rounded-xl transition-all duration-300 ${
              view === "list" 
                ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg" 
                : "text-gray-600 hover:bg-white hover:text-pink-600"
            }`}
            aria-label="List View"
          >
            <FaList className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default VendorFilters;
