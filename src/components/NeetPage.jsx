import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
// import DownloadPage from "./DownloadPage"; // Import the DownloadPage

const NeetPage = () => {
  return (
    <>
    <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
      <h1>NEET | UG</h1>
    </div>
    <div className="common-container">
      <div className="common-content">
        {/* NEET Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="NEET Study Material"
            description="Details about NEET study materials, PDFs, etc."
          />
          {/* <DownloadPage nextRoute="/download/next-material.pdf?title=Next Material" /> */}
        </div>

        {/* NEET Test Series */}
        <div className="common-test-series">
          <TestSeries
            title="NEET Test Series"
            description="Join the NEET test series to prepare for the exam."
          />
          <Link to="/download/NEET-PT,MT,FST,GT.pdf?title=NEET - PT, MT, FST, GT" className="download-link">
          Neet Test Series (No.of Test Count)
          </Link>
          <Link to="/download/NEET-2025.pdf?title=NEET - 2025" className="download-link">
          Neet Test Series (Track Sheet)
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default NeetPage;
