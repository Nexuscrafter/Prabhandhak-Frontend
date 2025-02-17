// App.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Building2, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import toast from 'react-hot-toast';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}
          {/* Logo - Made Bigger */}
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-orange-500" /> {/* Larger Icon */}
            <span className="text-2xl font-bold text-white">PR Prabandhak</span>
          </div>

          {/* Desktop Menu - Bigger Font */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <HashLink
              smooth
              to="/#about"
              className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
            >
              About Us
            </HashLink>
            <HashLink
              smooth
              to="/#services"
              className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
            >
              Our Services
            </HashLink>
            <Link
              to="/founders"
              className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
            >
              Founders
            </Link>
            <Link
              to="/register"
              className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button - Bigger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Bigger Text */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900 px-6 pb-6 shadow-lg"
          >
            <div className="flex flex-col gap-6">
              <Link
                to="/"
                className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <HashLink
                smooth
                to="/#about"
                className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </HashLink>
              <Link
                to="/founders"
                className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Founders
              </Link>
              <Link
                to="/register"
                className="text-lg text-gray-300 hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Footer: React.FC = () => {
  const handleSubscribeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast.success('Subscribed successfully!');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">PR Prabandhak</span>
            </div>
            <p className="text-gray-400">
              Connecting top brands with passionate, socially-engaged audiences through our network of influencers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-orange-500" />
              </a>
              {/* Add other social icons as needed */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">
                  A-31, LGF, Shivalik, Malviya Nagar, New Delhi - 110017
                </span>
              </li>
              <li>
                <a
                  href="mailto:hello@techvision.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Mail className="h-5 w-5 text-orange-500" />
                  hello@techvision.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919669489477"
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Phone className="h-5 w-5 text-orange-500" />
                  +91-9669489477
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected / Subscribe */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition-colors"
                onClick={handleSubscribeClick}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            &copy; 2024 PR Prabandhak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    // Changed bg-gray-50 to bg-gray-900 to match the dark theme and remove white space.
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      {/* The content container expands to fill available space.
          pt-20 is used to offset the fixed navbar height */}
      <div className="flex-grow pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
