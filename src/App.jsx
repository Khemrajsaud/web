

import { Routes, Route } from "react-router-dom";

import Home from "./component/home/Home";
import About from "./component/pageses/About";
import Careers from "./component/pageses/Careers";
import Footer from "./component/footer/Footer";
import Contact from "./component/pageses/Contact";
import Services from "./component/pageses/Services";
import Maps from "./component/address/Maps";
import TeamsPage from "./component/pageses/Teams";
import Navbar from "./component/navbar/navbar";

const App = () => {
  return (
    <div>
      {/* Pass scroll handler to navbar */}
   <Navbar/>

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
