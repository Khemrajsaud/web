// import "react";
// // import landing from "../../assets/landing.jpg";

// import { Link } from "react-router-dom";
// import IndustryData from "./IndustryData";

// const Home = () => {
//   return (
//     <div>
//       <div className="relative">
//         {/* Background image */}
//         {/* <img
//           className="w-full h-[500px] object-cover"
//           src={landing}
//           alt="Digital City"
//         /> */}
//         <div className=" w-full h-[500px] bg-secondary ">
//           <div className=" mt-[400px] mx-10">
//             <h3 className="text-black  ">Seinxera is a leading software </h3>
//             <h1 className="text-black text-3xl font-bold">
//               <span className="text-primary ">company in Nepal</span>, driving innovation and <br /> excellence in digital development</h1>

//           </div>
//           <div></div>

//         </div>

//         {/* Overlay content */}
//         {/* <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white z-10">
//           <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
//             SOFTWARE COMPANAY <br />
//             <span className="text-blue-400">IN NEPAL LEADS IN DEVELOPMENT</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-2xl max-w-xl">
//             Building future-ready enterprises through innovation and strategic
//             partnerships
//           </p>

//           <Link
//             to="/contact"
//             className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition"
//           >
//             {" "}
//             Contact Us
//           </Link>
//         </div> */}
//       </div>
//       <IndustryData/>
//     </div>
//   );
// };

// export default Home;

// import "react";
// import { Link } from "react-router-dom";
// import IndustryData from "./IndustryData";
// import { motion } from "framer-motion";
// import home from "../../assets/home.png"

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative w-full h-[90vh] bg-secondary flex items-center  overflow-hidden">

//         {/* Animated Content */}
//         <div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="relative z-10 text-left px-6 md:px-20"
//         >
//           <h3 className="text-black text-lg md:text-xl font-medium mb-2">
//             Seinxera is a leading software
//           </h3>

//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="text-black text-3xl md:text-5xl font-extrabold leading-tight"
//           >
//             <span className="text-primary">Company in Nepal</span>, <br />driving
//             innovation and
//             <br className="hidden md:block" />  digital development
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 1 }}
//             className="text-base md:text-xl text-black mt-6 max-w-xl"
//           >
//             Building future-ready enterprises through innovation and strategic
//             partnerships.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1 }}
//             className="mt-8"
//           >

//             <Link
//               to="/contact"
//               className="inline-block bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 font-semibold"
//             >
//               Contact Us
//             </Link>

//           </motion.div>

//         </motion.div>
//         <div>
//           <img src={home} alt="" />
//         </div>
//          </div>
//       </div>

//       {/* Industry Section */}
//       <IndustryData />
//     </div>
//   );
// };

// export default Home;

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
