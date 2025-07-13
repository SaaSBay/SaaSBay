import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/src/assets/SaasLogo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // Add more routes as you implement them
  { name: "Blog", href: "/blog" },
  // { name: "Categories", href: "/categories" },
  { name: "List Your Products", href: "/list-your-products" },
  { name: "Marketplace", href: "/marketplace" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-accent shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/">
              <img
                src={Logo}
                alt="SaaSBay Logo"
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <span className="text-primary font-bold text-2xl sm:text-3xl tracking-tight">
              SaaSBay
            </span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 sm:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-secondary hover:text-primary font-medium transition-colors text-base sm:text-lg ${
                  location.pathname === link.href ? "text-primary font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-accent shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block text-secondary hover:text-primary font-medium py-2 transition-colors ${
                  location.pathname === link.href ? "text-primary font-bold" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}