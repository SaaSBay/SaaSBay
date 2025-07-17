import React from "react";
import Logo from "../assets/SaasLogo.png"; // Adjust the path as needed

const companyLinks = [
  { name: "About", href: "/SaaSBay/about" },
  { name: "Our Story", href: "/SaaSBay/about#our-story" },
  { name: "Mission", href: "/SaaSBay/about#mission" },
  { name: "Who We Help", href: "/SaaSBay/about#who-we-help" },
  { name: "Our Vision", href: "/SaaSBay/about#vision" },
  { name: "Blogs", href: "/SaaSBay/blog" },
];

const resourcesLinks = [
  { name: "Categories", href: "/SaaSBay/#popular-categories" },
  { name: "Privacy Policy", href: "/SaaSBay/privacy-policy" },
  { name: "Terms of Use", href: "/SaaSBay/term-of-use" },
  { name: "Terms and Conditions", href: "#" },
];

const supportLinks = [
  { name: "Contact Us", href: "/SaaSBay/contact" },
];

const social = [
  { name: "Twitter", href: "https://twitter.com", icon: "fa-brands fa-twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/saasbay/", icon: "fa-brands fa-linkedin" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5fafd] border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="SaaSBay Logo"
                className="h-20 w-auto"
              />
              <span className="text-primary font-extrabold text-4xl tracking-tight">
                SaaSBay
              </span>
            </div>
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
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">Company</span>
            <ul className="space-y-2 text-center md:text-left">
              {companyLinks.map((link) => (
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

          {/* Resources */}
          <div className="px-10 md:px-10">
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">Resources</span>
            <ul className="space-y-2 text-center md:text-left">
              {resourcesLinks.map((link) => (
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

          {/* Support */}
          <div className="px-10 md:px-10">
            <span className="font-semibold text-secondary mb-3 text-lg block text-center md:text-left">Support</span>
            <ul className="space-y-2 text-center md:text-left">
              {supportLinks.map((link) => (
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
