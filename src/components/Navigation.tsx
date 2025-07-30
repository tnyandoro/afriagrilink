import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../assets/images/logo.png"; // Adjust path if needed

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "SW", "PT", "FR"];

  return (
    <nav className="bg-[#f3f2f0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 h-16">
            <img
              src={logo}
              alt="AfriAgriLink Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-[#FFA726] transition-colors">
              About
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#FFA726] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#marketplace"
              className="hover:text-[#FFA726] transition-colors"
            >
              Marketplace
            </a>
            <a
              href="#contact"
              className="hover:text-[#FFA726] transition-colors"
            >
              Contact
            </a>

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() =>
                  setLanguage(
                    languages[
                      (languages.indexOf(language) + 1) % languages.length
                    ]
                  )
                }
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-[#2196F3] hover:bg-blue-600 transition-colors"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language}</span>
              </button>
            </div>

            <button className="bg-[#4CAF50] hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition-colors">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FFA726] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#8B6F2D]">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="hover:text-[#FFA726] transition-colors"
              >
                About
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#FFA726] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#marketplace"
                className="hover:text-[#FFA726] transition-colors"
              >
                Marketplace
              </a>
              <a
                href="#contact"
                className="hover:text-[#FFA726] transition-colors"
              >
                Contact
              </a>
              <div className="flex items-center justify-between pt-4 border-t border-[#8B6F2D]">
                <button
                  onClick={() =>
                    setLanguage(
                      languages[
                        (languages.indexOf(language) + 1) % languages.length
                      ]
                    )
                  }
                  className="flex items-center space-x-1 px-3 py-1 rounded-full bg-[#2196F3] hover:bg-blue-600 transition-colors"
                >
                  <Globe size={16} />
                  <span className="text-sm font-medium">{language}</span>
                </button>
                <button className="bg-[#4CAF50] hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
