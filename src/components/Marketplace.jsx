// src/components/Marketplace.jsx
import React, { useState } from "react";
import VendorFilters from "./VendorFilters";
import VendorGrid from "./VendorGrid";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";

const Marketplace = () => {
  const [filters, setFilters] = useState({ category: "", search: "", sort: "relevance" });
  const [view, setView] = useState("grid"); // grid or list

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background pt-16">
      <main className="flex-1 p-4 max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-secondary mb-2">Explore SaaS Vendors</h1>
          <VendorFilters filters={filters} setFilters={setFilters} view={view} setView={setView} />
        </header>
        <VendorGrid filters={filters} view={view} />
        <Pagination />
      </main>
      <aside className="w-full md:w-80 p-4 bg-accent border-l border-gray-200">
        <Sidebar />
      </aside>
    </div>
  );
};

export default Marketplace;
