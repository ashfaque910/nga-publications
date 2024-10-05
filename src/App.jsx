import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection"; // HomeSection component for home page
import NeetPage from "./components/NeetPage"; // NeetPage component
import Jee from "./components/Jee"; // Jee component
import Kcet from "./components/Kcet"; // Kcet component
import Foundation from "./components/Foundation";
import DownloadPage from "./components/DownloadPage"
import Blogs from "./components/Blogs";
import About from "./components/About";
import Contact from "./components/Contact";
import StudyMaterial from "./components/common/StudyMaterial"; // NeetStudyMaterial component
import TestSeries from "./components/common/TestSeries"; // NeetTestSeries component
import WhyChooseUs from "./components/WhyChooseUs"; // WhyChooseUs component
import Testimonials from "./components/Testimonials"; // Testimonials component
import Faqs from "./components/Faqs"; // Faqs component
import Footer from "./components/Footer"; // Footer component
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          {/* NEET Routes */}
          <Route path="/neet" element={<NeetPage />} />
          <Route path="/download/:file" element={<DownloadPage />} />
         
          {/* JEE Routes */}
          <Route path="/jee" element={<Jee />} />
          
          {/* KCET Routes */}
          <Route path="/kcet" element={<Kcet />} />
         
          {/* Foundation Routes */}
          <Route path="/foundation" element={<Foundation />} />
    
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Adding reusable components to all pages */}
        <WhyChooseUs />
        <Testimonials />
        <Faqs />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
