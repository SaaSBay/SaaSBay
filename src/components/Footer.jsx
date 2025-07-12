import React from "react";
import Logo from "../assets/SaasLogo.png"; // Adjust the path as needed

const quickLinks = [
  { name: "About", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Our Story", href: "#" },
  { name: "Mission", href: "#" },
  { name: "What We Do", href: "#" },
  { name: "How We Are Different", href: "#" },
  { name: "Our Vision", href: "#" },
];

const rightLinks = [
  { name: "Home", href: "#" },
  { name: "Terms and Conditions", href: "#" },
  { name: "Categories", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const social = [
  { name: "Twitter", href: "https://twitter.com", icon: "fa-brands fa-twitter" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "fa-brands fa-linkedin" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5fafd] border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: Logo & Social */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="SaaSBay Logo"
                className="h-10 w-auto"
              />
              <span className="text-primary font-extrabold text-2xl tracking-tight">
                SaaSBay
              </span>
            </div>
            <p className="text-secondary text-sm mb-4 max-w-xs text-center md:text-left">
              Discover, compare, and choose the best SaaS solutions for your business.
            </p>
            <div className="flex gap-4 justify-center md:justify-start w-full">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors text-2xl"
                  aria-label={item.name}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">Quick Links</span>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: More Links */}
          <div>
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">More</span>
            <ul className="space-y-2 text-center md:text-left">
              {rightLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-secondary">
          &copy; {new Date().getFullYear()} <span className="font-semibold">SaaSBay</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
