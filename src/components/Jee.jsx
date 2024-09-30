// components/JeePage.jsx
import React from "react";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
import "./CommonPage.css"; // Optional CSS

const JeePage = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* Left: JEE Study Material */}
        <div className="common-study-material" style={{ borderRadius:'15px 0 '}}>
          <StudyMaterial
            title="JEE Study Material"
            description="Details about JEE study materials, PDFs, etc."
            target="/jee/study-material"
            />
        </div>

        {/* Right: JEE Test Series */}
        <div className="common-test-series" style={{ borderRadius:'15px 0 '}}>
          <TestSeries
            title="JEE Test Series"
            description="Join the JEE test series to prepare for the exam."
            target="/jee/test-series"
          />
        </div>
      </div>
    </div>
  );
};

export default JeePage;
