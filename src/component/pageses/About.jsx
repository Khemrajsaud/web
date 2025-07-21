import React from "react";
import aboutImage from "../../assets/home.png"; // Use your own image path
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mission from "../../assets/mission.png";

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
      {/* Title */}
      <motion.div  
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering ideas through technology. We are a passionate team
          delivering innovative digital solutions.
        </p>
      </motion.div>

      {/* Image + Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div className=""
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Who We Are</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Seinxera is a leading software company based in Nepal, committed to
            delivering top-notch digital products and services. We specialize in
            web development, mobile apps, Desktop App, Specialize in AI, IT, IOT
            and cloud-based solutions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our dedicated team works closely with clients to bring their ideas
            to life and provide scalable, secure, and modern technology
            solutions. It also focus on advanced technologies
          </p>
          <Link
            to="/contact"
            className="mt-4 bg-primary text-white  px-6 py-2 rounded-lg hover:bg-primary/80 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Mission */}

      <div className="lg:flex l:items-center mt-10   ">
        <div>
          <img src={mission} alt="mission" />
        </div>
        <div>
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Our mission is to create products and services that don’t just serve
            — they transform. We aim to build solutions that impact lives,
            empower communities, and spark progress.
            <br />
            <br />
            By developing innovative systems and embracing continuous
            innovation, we push boundaries and challenge the status quo. We
            believe in solving real problems with technology, creativity, and
            purpose — crafting tools that make a difference today and shape a
            better tomorrow.
            <br />
            <br />
            Every challenge we take on is an opportunity to deliver lasting
            impact. Through our commitment to excellence, agility, and
            innovation, we strive to turn bold ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
