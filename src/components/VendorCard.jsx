import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaGlobe, FaStar, FaTag, FaUsers } from "react-icons/fa";

const VendorCard = ({ vendor, view }) => (
  <div className={`vendor-card bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${view === "list" ? "flex" : "flex-col"} p-6 cursor-pointer group`}>
    <div className={`vendor-image flex-shrink-0 overflow-hidden rounded-xl ${view === "list" ? "w-32 h-32 mr-6" : "w-full h-48 mb-4"} relative`}>
      <img src={vendor.logo} alt={vendor.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-3 right-3">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <FaStar className="text-xs" />
          {vendor.rating || "4.8"}
        </div>
      </div>
    </div>
    
    <div className="vendor-details flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-xl font-bold text-purple-800 hover:text-pink-600 transition-colors mb-2 group-hover:text-blue-600">
          {vendor.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{vendor.description}</p>
        
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {vendor.categories?.slice(0, 3).map((category, index) => (
            <span key={index} className="flex items-center gap-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
              <FaTag className="text-xs" />
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-pink-600" />
            <span>{vendor.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-purple-600" />
            <span>{vendor.employees || "50+"} employees</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <FaPhone className="text-pink-600" />
            <span>{vendor.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-pink-600" />
            <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-pink-600 transition font-semibold">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VendorCard;
