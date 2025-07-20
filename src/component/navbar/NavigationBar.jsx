import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
    <nav className="bg-blue-900 shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-white font-semibold text-lg">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-300 transition">
              About Us
            </Link>
            <Link to="/service" className="hover:text-blue-300 transition">
              Services
            </Link>
            <Link to="/career" className="hover:text-blue-300 transition">
              Careers
            </Link>
            <Link to="/team" className="hover:text-blue-300 transition">
              Teams
            </Link>
            <Link to="/contact" className="hover:text-blue-300 transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center text-white">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose size={28} />
              ) : (
                <AiOutlineMenuFold size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 p-4 rounded-b-md text-white space-y-3 font-semibold">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              About Us
            </Link>
            <Link
              to="/service"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              Services
            </Link>
            <Link
              to="/career"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              Careers
            </Link>
            <Link
              to="/team"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              Teams
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
