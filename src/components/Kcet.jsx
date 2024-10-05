import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
import "./CommonPage.css";

const Kcet = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* KCET Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="KCET Study Material"
            description="Details about KCET study materials, PDFs, etc."
          />
          <Link to="/download/kcet-study-material.pdf?title=KCET Study Material" className="download-link">
            Go to KCET Study Material Download Page
          </Link>
        </div>

        {/* KCET Test Series */}
        <div className="common-test-series">
          <TestSeries
            title="KCET Test Series"
            description="Join the KCET test series to prepare for the exam."
          />
          <Link to="/download/kcet-test-series.pdf?title=KCET Test Series" className="download-link">
            Go to KCET Test Series Download Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kcet;
