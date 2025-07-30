import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "About AfriAgriLink", href: "#about" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Marketplace", href: "#marketplace" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "SADC Alignment", href: "#sadc" },
    ],
    services: [
      { name: "For Farmers", href: "#farmers" },
      { name: "For Logistics", href: "#logistics" },
      { name: "For Buyers", href: "#buyers" },
      { name: "Mobile App", href: "#mobile" },
      { name: "API Integration", href: "#api" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Documentation", href: "#docs" },
      { name: "Community Forum", href: "#forum" },
      { name: "Training Resources", href: "#training" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Data Protection", href: "#data" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-[#6B4F1D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFA726] to-[#4CAF50] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AL</span>
                </div>
                <span className="text-2xl font-bold">AfriAgriLink</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting Africa's farmers to global markets through innovative
                digital platforms, sustainable logistics, and transparent trade
                practices.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-[#FFA726]" />
                  <span className="text-gray-300">info@afriagrilink.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-[#FFA726]" />
                  <span className="text-gray-300">+254 700 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-[#FFA726]" />
                  <span className="text-gray-300">Harare, Zimbabwe</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-300 ${social.color} transition-colors p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#FFA726]">
                Platform
              </h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#4CAF50]">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#2196F3]">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-[#8B6F2D] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 leading-relaxed">
                Get the latest updates on market prices, new features, and
                success stories from the AfriAgriLink community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              />
              <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#8B6F2D] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-center md:text-left">
              <p>&copy; {currentYear} AfriAgriLink. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language/Region */}
            <div className="flex items-center space-x-2 text-gray-300">
              <Globe size={16} />
              <span className="text-sm">English (Africa)</span>
            </div>
          </div>
        </div>

        {/* SADC Footer Badge */}
        <div className="border-t border-[#8B6F2D] py-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] px-4 py-2 rounded-full">
              <span className="text-sm font-medium">
                🌍 Proudly serving all 15 SADC countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
