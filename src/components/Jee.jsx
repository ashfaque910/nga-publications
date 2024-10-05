import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
import "./CommonPage.css";

const Jee = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* JEE Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="JEE Study Material"
            description="Details about JEE study materials, PDFs, etc."
          />
          <Link to="/download/jee-study-material.pdf?title=JEE Study Material" className="download-link">
            Go to JEE Study Material Download Page
          </Link>
        </div>

        {/* JEE Test Series */}
        <div className="common-test-series">
          <TestSeries
            title="JEE Test Series"
            description="Join the JEE test series to prepare for the exam."
          />
          <Link to="/download/jee-test-series.pdf?title=JEE Test Series" className="download-link">
            Go to JEE Test Series Download Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jee;
