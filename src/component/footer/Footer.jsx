import "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <Logo />
              </div>
              <span className="text-xl font-light">Seinxera</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-light leading-tight max-w-xs">
              Take the first step towards a digitally engineered tomorrow
            </h2>

            {/* CTA Button */}
            <Link to='/contact' className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
              <span>Get In Touch</span>
              <HiArrowRight className="w-5 h-5" />
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                to="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">NAVIGATION</h3>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-orange-400 hover:text-orange-300 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/service"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to="/career"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/team"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Teams
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* What We Do Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">WHAT WE DO</h3>
            <nav className="space-y-3">
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Application Services
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Cloud & Infrastructure
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Cybersecurity
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Data & Analytics
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Digital Engineering Services
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Intelligent Automation
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Quality Engineering
              </Link>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">LEGAL</h3>
            <nav className="space-y-3">
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Seinxera IT Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
