// import "react";

// import { Routes, Route } from "react-router-dom";

// import Home from "./component/home/Home";
// import Navbar from "./component/navbar/navbar";
// import About from "./component/pageses/About";
// import Careers from "./component/pageses/Careers";
// import Footer from "./component/footer/Footer";
// import Contact from "./component/pageses/Contact";
// import Teams from "./component/pageses/Teams";
// import Services from "./component/pageses/Services";
// import { useRef } from "react";

// const App = () => {
//    const servicesRef = useRef(null);

//   const scrollToServices = () => {
//     servicesRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <div className="">
//       <Navbar onServicesClick={scrollToServices}  />
//       <Routes>
//         <Route
//           path="service"
//           element={
//             <>
//               <Home />
//               <div ref={servicesRef}>
//               <Services />
//               </div>
//             </>
//           }
//         />
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="career" element={<Careers />} />
//         <Route path="team" element={<Teams />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./component/home/Home";
import Navbar from "./component/navbar/navbar";
import About from "./component/pageses/About";
import Careers from "./component/pageses/Careers";
import Footer from "./component/footer/Footer";
import Contact from "./component/pageses/Contact";
import Services from "./component/pageses/Services";
import Maps from "./component/address/Maps";
import TeamsPage from "./component/pageses/Teams";

const App = () => {
  return (
    <div>
      {/* Pass scroll handler to navbar */}
      <Navbar />

      <Routes>
        <Route path="/service" element={<Services />} />
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Careers />} />
        <Route path="/team" element={<TeamsPage />} />
      </Routes>

      <Maps />
      <Footer />
    </div>
  );
};

export default App;
