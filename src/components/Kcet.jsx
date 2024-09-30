// components/KcetPage.jsx
import React from "react";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
// import "./KcetPage.css"; // Optional CSS

const Kcet = () => {
  return (
    <div className="common-container">
      <div className="common-content">
        {/* Left: KCET Study Material */}
        <div className="common-study-material" style={{ borderRadius:'15px 0 '}}>
          <StudyMaterial
            title="KCET Study Material"
            description="Details about KCET study materials, PDFs, etc."
            target="/kcet/study-material"
            />
        </div>

        {/* Right: KCET Test Series */}
        <div className="common-test-series" style={{ borderRadius:'15px 0 '}}>
          <TestSeries
            title="KCET Test Series"
            description="Join the KCET test series to prepare for the exam."
            target="/kcet/test-series"
          />
        </div>
      </div>
    </div>
  );
};

export default Kcet;
