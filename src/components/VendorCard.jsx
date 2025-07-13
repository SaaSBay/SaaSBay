// src/components/VendorCard.jsx
import React from "react";

const VendorCard = ({ vendor, view }) => (
  <div
    className={`bg-white rounded-lg shadow-md p-4 flex ${view === "list" ? "flex-row" : "flex-col"} items-start hover:shadow-xl transition-shadow duration-200`}
  >
    <img src={vendor.logo} alt={vendor.name} className="w-16 h-16 object-contain mb-2 mr-4" loading="lazy" />
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <a href={`/vendors/${vendor.id}`} className="text-lg font-semibold text-primary hover:underline">{vendor.name}</a>
        {vendor.badges?.map(badge => (
          <span key={badge} className="bg-primary-light text-xs text-accent px-2 py-0.5 rounded ml-1">{badge}</span>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        {vendor.categories.map(cat => (
          <span key={cat} className="bg-background text-secondary text-xs px-2 py-0.5 rounded">{cat}</span>
        ))}
      </div>
      <p className="text-sm mt-2">{vendor.description}</p>
      <ul className="list-disc ml-5 mt-2 text-xs text-secondary">
        {vendor.features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="flex items-center mt-3 gap-2">
        <span className="text-yellow-500">⭐ {vendor.rating}</span>
        <span className="text-xs text-gray-500">({vendor.reviews} reviews)</span>
        <a href={`/vendors/${vendor.id}`} className="ml-auto bg-primary text-accent px-3 py-1 rounded hover:bg-primary-light text-sm">View Details</a>
      </div>
    </div>
  </div>
);

export default VendorCard;
