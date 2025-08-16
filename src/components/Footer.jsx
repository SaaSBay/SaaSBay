import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/SaasLogo.png";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Our Story", href: "/about#our-story" },
  { name: "Mission", href: "/about#mission" },
  { name: "Who We Help", href: "/about#who-we-help" },
  { name: "Our Vision", href: "/about#vision" },
  { name: "Blogs", href: "/blog" },
];

const resourcesLinks = [
  { name: "Categories", href: "/#popular-categories" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/term-of-use" },
  { name: "Terms and Conditions", href: "/terms" },
];

const supportLinks = [
  { name: "Contact Us", href: "/#contact-us" },
  { name: "FAQ", href: "/faq" },
  { name: "Help Center", href: "/help" },
];

const social = [
  { name: "Twitter", href: "https://twitter.com", icon: "fa-brands fa-twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/saasbay/", icon: "fa-brands fa-linkedin" },
  { name: "GitHub", href: "https://github.com", icon: "fa-brands fa-github" },
  { name: "Discord", href: "https://discord.com", icon: "fa-brands fa-discord" },
];

export default function Footer() {
  const location = useLocation();
  const [email, setEmail] = React.useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const renderLinks = (links) =>
    links.map((link) => {
      const isActive =
        location.pathname === link.href ||
        location.pathname.startsWith(link.href);

      if (link.href.startsWith("http")) {
        return (
          <li key={link.name} className="group">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-pink-600 transition-all duration-300 text-sm flex items-center gap-2 group-hover:translate-x-1"
            >
              {link.name}
              <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
            </a>
          </li>
        );
      }

      return (
        <li key={link.name} className="group">
          <Link
            to={link.href}
            className={`text-sm transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1 ${
              isActive
                ? "text-pink-600 font-semibold"
                : "text-purple-700 hover:text-pink-600"
            }`}
          >
            {link.name}
            <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
          </Link>
        </li>
      );
    });

  return (
    <footer className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 border-t border-pink-300/50 mt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/30 rounded-full blur-2xl transform -translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start mb-12">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            {/* Logo with subtle animation */}
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <img 
                  src={Logo} 
                  alt="SaaSBay Logo" 
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-pink-700 font-extrabold text-3xl tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                SaaSBay
              </span>
            </div>
            
            {/* Tagline with icon */}
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-compass text-pink-600 text-lg"></i>
              <p className="text-lg font-medium text-purple-700">Explore, Evaluate, Engage</p>
            </div>
            
            <p className="text-purple-700 text-base mb-6 max-w-md text-center md:text-left leading-relaxed">
              Discover, compare, and choose the best SaaS solutions for your business. 
              Join thousands of companies finding their perfect software match.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-3 justify-center md:justify-start w-full mb-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-pink-300/50 flex items-center justify-center text-purple-700 hover:text-pink-600 hover:border-pink-600/70 hover:bg-pink-200/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={item.name}
                >
                  <i className={`${item.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="w-full max-w-sm">
              <h4 className="text-purple-900 font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-envelope text-pink-600"></i>
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-pink-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane text-sm"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-6 text-lg flex items-center gap-2">
              <i className="fas fa-building text-pink-600"></i>
              Company
            </h3>
            <ul className="space-y-3">
              {renderLinks(companyLinks)}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-6 text-lg flex items-center gap-2">
              <i className="fas fa-book-open text-pink-600"></i>
              Resources
            </h3>
            <ul className="space-y-3">
              {renderLinks(resourcesLinks)}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-6 text-lg flex items-center gap-2">
              <i className="fas fa-headset text-pink-600"></i>
              Support
            </h3>
            <ul className="space-y-3">
              {renderLinks(supportLinks)}
            </ul>
            
            {/* Contact Info Card */}
            <div className="mt-8 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-pink-300/50">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <i className="fas fa-phone text-pink-600"></i>
                Quick Contact
              </h4>
              <p className="text-sm text-purple-700 mb-1">support@saasbay.com</p>
              <p className="text-sm text-purple-700">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
      <div className="border-t border-pink-300/50 pt-8 mb-8">
  <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
    <div className="flex items-center gap-2 text-sm text-purple-600">
      <i className="fas fa-map-marker-alt text-pink-500"></i>
      <span>India's First SaaS Hub</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-purple-600">
      <i className="fas fa-leaf text-blue-600"></i>
      <span>Supporting Local Innovation</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-purple-600">
      <i className="fas fa-lightbulb text-yellow-500"></i>
      <span>Empowering Businesses</span>
    </div>
  </div>
</div>


        {/* Bottom Bar */}
        <div className="border-t border-pink-300/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-purple-700 flex items-center gap-2">
            <i className="far fa-copyright"></i>
            {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              SaaSBay
            </span>
            . All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/sitemap" 
              className="text-purple-600 hover:text-pink-600 transition-colors duration-300 flex items-center gap-1"
            >
              <i className="fas fa-sitemap"></i>
              Sitemap
            </Link>
            <Link 
              to="/accessibility" 
              className="text-purple-600 hover:text-pink-600 transition-colors duration-300 flex items-center gap-1"
            >
              <i className="fas fa-universal-access"></i>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
