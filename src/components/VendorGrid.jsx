import React from "react";
import VendorCard from "./VendorCard";
import { vendors } from "./vendors";
import { FaSearch, FaExclamationCircle } from "react-icons/fa";

const VendorGrid = ({ filters, view }) => {
  // Filtering logic
  const filtered = vendors.filter(
    (v) =>
      (!filters.category || v.categories.includes(filters.category)) &&
      (!filters.search || v.name.toLowerCase().includes(filters.search.toLowerCase()) ||
       v.description.toLowerCase().includes(filters.search.toLowerCase()))
  );

  // Sorting logic
  const sortedVendors = [...filtered].sort((a, b) => {
    switch (filters.sort) {
      case "rating":
        return (b.rating || 4.5) - (a.rating || 4.5);
      case "name":
        return a.name.localeCompare(b.name);
      case "location":
        return a.location.localeCompare(b.location);
      default:
        return 0;
    }
  });

  if (sortedVendors.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaSearch className="text-gray-400 text-3xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">No vendors found</h3>
        <p className="text-gray-600 text-lg mb-8">
          {filters.search 
            ? `No vendors match your search "${filters.search}"`
            : `No vendors found in the "${filters.category}" category`
          }
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="vendor-grid-container">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            {filters.category ? `${filters.category} Vendors` : 'All Vendors'}
          </h2>
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
            {sortedVendors.length} {sortedVendors.length === 1 ? 'vendor' : 'vendors'}
          </span>
        </div>
        
        {filters.search && (
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl border border-blue-200">
            <FaSearch className="text-sm" />
            <span className="text-sm">Searching: "{filters.search}"</span>
          </div>
        )}
      </div>

      {/* Grid/List Layout */}
      <div className={`vendor-grid ${
        view === "list" 
          ? "flex flex-col gap-6" 
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      }`}>
        {sortedVendors.map((vendor, index) => (
          <div key={vendor.id || index} className={`${view === "list" ? "w-full" : ""}`}>
            <VendorCard vendor={vendor} view={view} />
          </div>
        ))}
      </div>

      {/* Load More Section */}
      {sortedVendors.length > 12 && (
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            Load More Vendors
          </button>
        </div>
      )}
    </div>
  );
};

export default VendorGrid;
