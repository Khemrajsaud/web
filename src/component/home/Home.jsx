import "react";
import landing from "../../assets/landing.jpg";

import { Link } from "react-router-dom";
import IndustryData from "./IndustryData";

const Home = () => {
  return (
    <div>
      <div className="relative">
        {/* Background image */}
        <img
          className="w-full h-[500px] object-cover"
          src={landing}
          alt="Digital City"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white z-10">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
            DIGITALLY ENGINEERING <br />
            <span className="text-blue-400">TOMORROW, TODAY</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-xl">
            Building future-ready enterprises through innovation and strategic
            partnerships
          </p>

          <Link
            to="/contact"
            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition"
          >
            {" "}
            Contact Us
          </Link>
        </div>
      </div>
      <IndustryData/>
    </div>
  );
};

export default Home;


