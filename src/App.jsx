import { Routes, Route } from "react-router-dom";

import Home from "./component/home/Home";
import About from "./component/pageses/About";
import Careers from "./component/pageses/Careers";
import Footer from "./component/footer/Footer";
import Contact from "./component/pageses/Contact";
import Services from "./component/pageses/Services";
import TeamsPage from "./component/pageses/Teams";
import NavigationBar from "./component/navbar/NavigationBar";

const App = () => {
  return (
    <div>
      
  <NavigationBar/>
      <Routes>
        <Route path="/service" element={<Services />} />
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/team" element={<TeamsPage />} />
      </Routes>

   
      <Footer />
    </div>
  );
};

export default App;
