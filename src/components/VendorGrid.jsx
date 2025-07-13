// src/components/VendorGrid.jsx
import React from "react";
import VendorCard from "./VendorCard";
import DummyImg from "../assets/illustration-saas.jpg"; // Example import, adjust as needed

// Example vendor data (replace with real API/data)
const vendors = [
  {
    id: 1,
    name: "Acme Cloud",
    logo: { DummyImg },
    description: "Cloud accounting software for SMBs.",
    categories: ["Accounting"],
    features: ["Automated invoicing", "Expense tracking", "Multi-currency"],
    rating: 4.7,
    reviews: 120,
    badges: ["Verified", "Top Seller"],
  },
  {
    id: 2,
    name: "Zen HR",
    logo: { DummyImg },
    description: "Human resources and payroll solution.",
    categories: ["HR", "Payroll"],
    features: ["Payroll processing", "Leave management", "Employee self-service"],
    rating: 4.5,
    reviews: 95,
    badges: ["Verified"],
  },
  {
    id: 3,
    name: "MarketPro",
    logo: { DummyImg },
    description: "All-in-one marketing automation platform.",
    categories: ["Marketing"],
    features: ["Email campaigns", "Analytics", "CRM integration"],
    rating: 4.2,
    reviews: 78,
    badges: [],
  },
  {
    id: 4,
    name: "SecureIT",
    logo: { DummyImg },
    description: "Cybersecurity software for enterprises.",
    categories: ["Security"],
    features: ["Firewall", "Threat detection", "Data encryption"],
    rating: 4.8,
    reviews: 200,
    badges: ["Verified", "Editor's Choice"],
  },
  {
    id: 5,
    name: "TaskFlow",
    logo: { DummyImg },
    description: "Task and project management tool.",
    categories: ["Productivity"],
    features: ["Kanban boards", "Time tracking", "Collaboration tools"],
    rating: 4.3,
    reviews: 110,
    badges: ["Top Seller"],
  },
];


const VendorGrid = ({ filters, view }) => {
  // Filter and sort logic here (simplified for demo)
  const filtered = vendors.filter(v =>
    (!filters.category || v.categories.includes(filters.category)) &&
    (!filters.search || v.name.toLowerCase().includes(filters.search.toLowerCase()))
  );

  return (
    <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
      {filtered.map(vendor => (
        <VendorCard key={vendor.id} vendor={vendor} view={view} />
      ))}
      {filtered.length === 0 && <div>No vendors found.</div>}
    </div>
  );
};

export default VendorGrid;
