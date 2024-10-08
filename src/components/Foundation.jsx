import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
// import DownloadPage from "./DownloadPage"; // Import the DownloadPage component

const Foundation = () => {
  return (
    <><div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
    <h1>Foundation '(6 - 10)'</h1>
  </div>
    <div className="common-container">
      <div className="common-content">
        {/* Foundation Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="Foundation Study Material"
            description="Details about Foundation study materials, PDFs, etc."
          />
          {/* <DownloadPage nextRoute="/download/foundation-next-material.pdf?title=Foundation Next Material" /> */}
        </div>

        {/* Foundation Test Series */}
        <div className="common-test-series">
          <TestSeries
            title="Foundation Test Series"
            description="Join the Foundation test series to prepare for the exam."
          />
          <Link to="/download/Foundation6to10(2025).pdf?title=Foundation (6 to 10) 2025" className="download-link">
            Foundation (6 - 10) Test Series 
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Foundation;
