import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot.js";
import MySection from "./components/MySection";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs.js";
import Careers from "./page/Careers.js";
import Contact from "./page/Contact.js";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {}, 1200);
    return () => clearTimeout(timer);
  }, []);

  return ( 
    <Router>
       <div className="App">
   </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Careers" element={<Careers />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     <Chatbot />
        <MySection />
      
    </Router>
  );
}

export default App;
