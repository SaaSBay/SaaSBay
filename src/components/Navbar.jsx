import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import Logo from "/src/assets/SaasLogo.png";

// If location.pathname doesn’t match exactly (e.g., paths with params like /blog/123), you'll want to adjust it to:

// const isActive = location.pathname.startsWith(link.href);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "List Your Products", href: "/list-your-products" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Contact Us", href: "/contact" },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
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
                className="h-10 w-auto sm:h-12"
              />
            </Link>
            <span className="text-primary font-bold text-xl sm:text-2xl">
              SaaSBay
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-base sm:text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.name}
                  {/* Underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-accent shadow-md`}
      >
        <div className="flex flex-col px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-primary font-bold underline underline-offset-4"
                    : "text-secondary hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
