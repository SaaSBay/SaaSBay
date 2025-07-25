// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Featured Vendors</h2>
    {/* Replace with dynamic data */}
    <ul>
      <li className="mb-2"><a href="/vendors/1" className="text-primary hover:underline">Acme Cloud</a></li>
      {/* More featured vendors */}
    </ul>
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">Top Categories</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-primary-light text-xs text-accent px-2 py-0.5 rounded">Accounting</span>
        {/* More categories */}
      </div>
    </div>
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
      <input className="border rounded px-2 py-1 w-full mb-2" type="email" placeholder="Your email" />
      <button className="bg-primary text-accent px-3 py-1 rounded w-full">Subscribe</button>
    </div>
  </div>
);

export default Sidebar;
