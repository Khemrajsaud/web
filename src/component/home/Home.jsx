

import "react";
import { Link } from "react-router-dom";
import IndustryData from "./IndustryData";
import { motion } from "framer-motion";
import home from "../../assets/home.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-[#eaf3fc] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 overflow-hidden">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 z-10"
        >
          <p className="text-primary font-semibold uppercase tracking-wide mb-4">
            Seinxera is a leading software
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug">
            Company in Nepal <br />
            <span className="text-blue-600">driving innovation and</span>{" "}
            digital development...!!!
          </h1>

          <p className="text-lg text-gray-600 mt-6 max-w-md">
            Since our beginning, we've been driven by innovation, guided by
            integrity, and committed to delivering value. Our multidisciplinary
            team works together to design, develop, and deliver impactful
            solutions that serve real people and real needs. !!
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md transition"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <img
            src={home}
            alt="Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>

      {/* Industry Section */}
      <IndustryData />
    </div>
  );
};

export default Home;
