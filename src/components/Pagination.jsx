import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEllipsisH } from "react-icons/fa";

const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page) => {
    setActivePage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show
    
    let startPage = Math.max(1, activePage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    
    // Adjust start page if we're near the end
    startPage = Math.max(1, endPage - showPages + 1);

    // First page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="w-12 h-12 rounded-xl font-semibold transition-all duration-300 bg-white border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg"
        >
          1
        </button>
      );
      
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="w-12 h-12 flex items-center justify-center text-gray-400">
            <FaEllipsisH />
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
            i === activePage
              ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg transform scale-110"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105"
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="w-12 h-12 flex items-center justify-center text-gray-400">
            <FaEllipsisH />
          </span>
        );
      }
      
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="w-12 h-12 rounded-xl font-semibold transition-all duration-300 bg-white border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(Math.max(1, activePage - 1))}
          disabled={activePage === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activePage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg"
          }`}
        >
          <FaChevronLeft className="text-sm" />
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          {renderPageNumbers()}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
          disabled={activePage === totalPages}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activePage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg"
          }`}
        >
          Next
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Page Info */}
      <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-xl border border-gray-200">
        Showing page <span className="font-semibold text-purple-600">{activePage}</span> of{" "}
        <span className="font-semibold text-purple-600">{totalPages}</span>
      </div>
    </div>
  );
};

export default Pagination;
