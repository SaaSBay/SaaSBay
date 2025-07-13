// src/components/VendorFilters.jsx
import React from "react";

const categories = ["All", "Accounting", "HR", "Support", "Development", "Sales"];

const VendorFilters = ({ filters, setFilters, view, setView }) => (
  <div className="flex flex-wrap gap-3 items-center mb-4">
    <select
      className="border rounded px-2 py-1"
      value={filters.category}
      onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}
    >
      {categories.map(cat => (
        <option key={cat} value={cat === "All" ? "" : cat}>{cat}</option>
      ))}
    </select>
    <input
      className="border rounded px-2 py-1"
      type="text"
      placeholder="Search vendors..."
      value={filters.search}
      onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
    />
    <select
      className="border rounded px-2 py-1"
      value={filters.sort}
      onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}
    >
      <option value="relevance">Relevance</option>
      <option value="rating">Rating</option>
      <option value="newest">Newest</option>
      <option value="popular">Most Popular</option>
    </select>
    <button
      className={`px-3 py-1 rounded ${view === "grid" ? "bg-primary text-accent" : "bg-accent text-primary"} border`}
      onClick={() => setView("grid")}
    >
      Grid
    </button>
    <button
      className={`px-3 py-1 rounded ${view === "list" ? "bg-primary text-accent" : "bg-accent text-primary"} border`}
      onClick={() => setView("list")}
    >
      List
    </button>
  </div>
);

export default VendorFilters;
