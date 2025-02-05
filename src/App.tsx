// App.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Building2, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">PR Prabandhak</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
        </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/choose-path" className="text-gray-600 hover:text-blue-600 transition-colors">
            Choose Path
          </Link>
          <Link to="/founders" className="text-gray-600 hover:text-blue-600 transition-colors">
            Founders
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-blue-600 transition-colors">
            Register
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-white text-gray-800 py-16 border-t mt-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">PR Prabandhak</span>
          </div>
          <p className="text-gray-600">
            Connecting top brands with passionate socially-engaged audiences through our network of influencers.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
              <Linkedin className="h-5 w-5 text-blue-600" />
            </a>
            {/* Add other social icons as needed */}
          </div>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-gray-600">
                A-31, LGF, Shivalik, Malviya Nagar, New Delhi - 110017
              </span>
            </li>
            <li>
              <a href="mailto:hello@techvision.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5 text-blue-600" />
                hello@techvision.com
              </a>
            </li>
            <li>
              <a href="tel:+919669489477" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="h-5 w-5 text-blue-600" />
                +91-9669489477
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t mt-16">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          &copy; 2024 PR Prabandhak. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Add top padding so content isn’t hidden behind the fixed navbar */}
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
