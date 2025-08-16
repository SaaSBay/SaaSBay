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
  { name: "Contact Us", href: "/contact" },
];

const social = [
  { name: "Twitter", href: "https://twitter.com", icon: "fa-brands fa-twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/saasbay/", icon: "fa-brands fa-linkedin" },
];

export default function Footer() {
  const location = useLocation();

  const renderLinks = (links) =>
    links.map((link) => {
      const isActive =
        location.pathname === link.href ||
        location.pathname.startsWith(link.href); // handles /blog/123 etc.

      // external links (http, https)
      if (link.href.startsWith("http")) {
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors text-base"
            >
              {link.name}
            </a>
          </li>
        );
      }

      // internal links (react-router)
      return (
        <li key={link.name}>
          <Link
            to={link.href}
            className={`text-base transition-colors ${
              isActive
                ? "text-primary font-semibold"
                : "text-secondary hover:text-primary"
            }`}
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <footer className="bg-[#f5fafd] border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="SaaSBay Logo" className="h-20 w-auto" />
              <span className="text-primary font-extrabold text-4xl tracking-tight">
                SaaSBay
              </span>
            </div>
            <p>Explore, Evaluate, Engage</p>
            <p className="text-secondary text-lgx mb-4 max-w-xs text-center md:text-left">
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

          {/* Company */}
          <div className="px-10 md:px-20">
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">
              Company
            </span>
            <ul className="space-y-2 text-center md:text-left">
              {renderLinks(companyLinks)}
            </ul>
          </div>

          {/* Resources */}
          <div className="px-10 md:px-10">
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">
              Resources
            </span>
            <ul className="space-y-2 text-center md:text-left">
              {renderLinks(resourcesLinks)}
            </ul>
          </div>

          {/* Support */}
          <div className="px-10 md:px-10">
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">
              Support
            </span>
            <ul className="space-y-2 text-center md:text-left">
              {renderLinks(supportLinks)}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-secondary">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">SaaSBay</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
