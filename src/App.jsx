import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import AppStore from "./components/AppStore/AppStore";
import Contact from "./components/Contact/Contact";
import BestCabs from "./components/BestCabs/BestCabs";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <AppStore />
        <Contact />
        <BestCabs />
        <Testimonial />
    
        <Footer />
      </div>
    </>
  );
}

export default App;
