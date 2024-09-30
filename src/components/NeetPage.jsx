// components/NeetPage.jsx
import React from "react";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
// import "./NeetPage.css"; // Optional CSS

const NeetPage = () => {
  return (
    <div className="common-container">
      <div className="common-content" >
        {/* Left: Neet Study Material */}
        <div className="common-study-material" style={{ borderRadius:'15px 0 '}}>
          <StudyMaterial
            title="Neet Study Material"
            description="Details about Neet study materials, PDFs, etc."
            target="/neet/study-material"
            />
        </div>

        {/* Right: Neet Test Series */}
        <div className="common-test-series" style={{ borderRadius:'15px 0 '}}>
          <TestSeries
            title="Neet Test Series"
            description="Join the Neet test series to prepare for the exam."
            target="/neet/test-series"
          />
        </div>
      </div>
    </div>
  );
};

export default NeetPage;
