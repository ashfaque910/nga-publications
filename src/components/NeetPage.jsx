import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
import "./CommonPage.css";

const NeetPage = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* NEET Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="NEET Study Material"
            description="Details about NEET study materials, PDFs, etc."
          />
          <Link to="/download/neet-study-material.pdf?title=NEET Study Material" className="download-link">
            Go to NEET Study Material Download Page
          </Link>
        </div>

        {/* NEET Test Series */}
        <div className="common-test-series">
          <TestSeries
            title="NEET Test Series"
            description="Join the NEET test series to prepare for the exam."
          />
          <Link to="/download/neet-test-series.pdf?title=NEET Test Series" className="download-link">
            Go to NEET Test Series Download Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeetPage;
