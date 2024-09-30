// components/FoundationPage.jsx
import React from "react";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
// import "./FoundationPage.css"; // Optional CSS

const Foundation = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* Left: Foundation Study Material */}
        <div className="common-study-material" style={{ borderRadius:'15px 0 ' , paddingBottom:'24px'}}>
          <StudyMaterial
            title="Foundation Study Material"
            description="Details about foundation study materials, PDFs, etc."
            target="/foundation/study-material"
            />
        </div>

        {/* Right: Foundation Test Series */}
        <div className="common-test-series" style={{ borderRadius:'15px 0 '}}>
          <TestSeries
            title="Foundation Test Series"
            description="Join the Foundation test series to prepare for the exam."
            target="/foundation/test-series"
          />
        </div>
      </div>
    </div>
  );
};

export default Foundation;
