import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-white font-semibold">
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
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-black rounded-full px-5 py-2 hover:bg-gray-200 transition"
            >
              Contact Us
              <FaArrowRightFromBracket />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white ">
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
          <div className="md:hidden  bg-primary  rounded-b-md py-4 text-white space-y-3 font-semibold">
            <div className="bg-white w-full h-0.5"></div>
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
