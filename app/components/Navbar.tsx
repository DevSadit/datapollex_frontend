"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
        <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
  backdrop-blur-md border-b
  ${
    scrollY > 50
      ? "bg-white/95 border-gray-200 shadow-sm dark:bg-gray-900/95 dark:border-gray-800"
      : "bg-transparent border-transparent"
  }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Nexdu
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="#features"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Reviews
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg transition-colors duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 hover:text-blue-600 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 hover:text-blue-600 transition-colors duration-200"
              >
                Reviews
              </a>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
  );
};

export default Navbar;
