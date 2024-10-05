import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
import "./CommonPage.css";

const Foundation = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* Foundation Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="Foundation Study Material"
            description="Details about Foundation study materials, PDFs, etc."
          />
          <Link to="/download/foundation6to10(2025).pdf?title=Foundation Study Material" className="download-link">
            Go to Foundation ('6 to 10') Download Page
          </Link>
        </div>

        {/* Foundation Test Series */}
        {/* <div className="common-test-series">
          <TestSeries
            title="Foundation Test Series"
            description="Join the Foundation test series to prepare for the exam."
          />
          <Link to="/download/foundation-test-series.pdf?title=Foundation Test Series" className="download-link">
            Go to Foundation Test Series Download Page
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Foundation;
