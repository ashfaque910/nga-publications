import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection"; // HomeSection component for home page
import NeetPage from "./components/NeetPage"; // NeetPage component
import Jee from "./components/Jee"; // Jee component
import Kcet from "./components/Kcet"; // Kcet component
import Foundation from "./components/Foundation";
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
          <Route path="/neet/study-material" element={<StudyMaterial title="NEET Study Material" />} />
          <Route path="/neet/test-series" element={<TestSeries title="NEET Test Series" />} />

          {/* JEE Routes */}
          <Route path="/jee" element={<Jee />} />
          <Route path="/jee/study-material" element={<StudyMaterial title="JEE Study Material" />} />
          <Route path="/jee/test-series" element={<TestSeries title="JEE Test Series" />} />

          {/* KCET Routes */}
          <Route path="/kcet" element={<Kcet />} />
          <Route path="/kcet/study-material" element={<StudyMaterial title="KCET Study Material" />} />
          <Route path="/kcet/test-series" element={<TestSeries title="KCET Test Series" />} />

          {/* Foundation Routes */}
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/foundation/study-material" element={<StudyMaterial title="Foundation Study Material" />} />
          <Route path="/foundation/test-series" element={<TestSeries title="Foundation Test Series" />} />

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
