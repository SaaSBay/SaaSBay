import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaRocket,
  FaStore,
  FaEnvelope,
  FaChevronDown,
  FaStar,
  FaGem,
} from "react-icons/fa";
import Logo from "../assets/SaasLogo.png";

const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Blog", href: "/blog", icon: <FaBlog /> },
  {
    name: "List Your Products",
    href: "/list-your-products",
    icon: <FaRocket />,
    highlight: true,
  },
  { name: "SaasHub", href: "/marketplace", icon: <FaStore /> },
  { name: "Contact Us", href: "/contact-us", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Make navbar sticky/solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop blur overlay when mobile menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isTransparent
            ? "bg-white/10 backdrop-blur-md border-white/20"
            : "bg-white/95 backdrop-blur-xl border-gray-200 shadow-lg shadow-gray-200/50"
        } border-b`}
      >
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-2">
            {/* Enhanced Logo & Brand */}
            <Link
              to="/"
              className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative ">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                <img
                  src={Logo}
                  alt="SaaSBay Logo"
                  className="w-10 h-10 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                ></img>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SaaSBay
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Discover SaaS
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative group"
                    onMouseEnter={() => setActiveHover(index)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    <div
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? link.highlight
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                          : activeHover === index
                          ? "bg-white/50 backdrop-blur-sm text-gray-900 shadow-md scale-105"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {/* Icon */}
                      <span
                        className={`text-sm transition-transform duration-300 ${
                          activeHover === index ? "scale-110" : ""
                        }`}
                      >
                        {link.icon}
                      </span>

                      {/* Text */}
                      <span className="font-medium text-sm">{link.name}</span>

                      {/* Special highlight for "List Your Products" */}
                      {link.highlight && !isActive && (
                        <>
                          <FaStar className="text-yellow-400 text-xs animate-pulse" />
                         
                        </>
                      )}

                      {/* Animated underline for active state */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full shadow-lg"></div>
                      )}
                    </div>

                    {/* Hover tooltip */}
                    {activeHover === index && !isActive && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 animate-fadeIn whitespace-nowrap">
                        {link.name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Enhanced Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  menuOpen
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-110"
                    : "bg-white/20 backdrop-blur-sm text-gray-700 hover:bg-white/40 hover:text-gray-900"
                }`}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      menuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </div>
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      menuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                    }`}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out ${
            menuOpen
              ? "max-h-[600px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl">
            <div className="flex flex-col px-6 py-6 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? link.highlight
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                        : "hover:bg-gray-100 hover:shadow-md hover:scale-102 text-gray-700"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Icon with background */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                      }`}
                    >
                      {link.icon}
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-base">
                          {link.name}
                        </span>
                        {link.highlight && (
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-sm" />
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                              HOT
                            </span>
                          </div>
                        )}
                      </div>
                      {!isActive && (
                        <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 mt-1">
                          {link.name === "Home" && "Welcome to SaaSBay"}
                          {link.name === "About" && "Learn about our mission"}
                          {link.name === "Blog" && "Latest insights & updates"}
                          {link.name === "List Your Products" &&
                            "Grow your SaaS business"}
                          {link.name === "Marketplace" &&
                            "Discover amazing tools"}
                          {link.name === "Contact Us" && "Get in touch with us"}
                        </p>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <FaChevronDown
                      className={`text-sm transition-transform duration-300 ${
                        isActive
                          ? "rotate-0 text-white"
                          : "rotate-[-90deg] text-gray-400 group-hover:text-gray-600"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Mobile CTA Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Ready to grow?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    List your SaaS and connect with buyers
                  </p>
                  <Link
                    to="/list-your-products"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaRocket />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}
