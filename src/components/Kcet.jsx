import React from "react";
import { Link } from "react-router-dom";
import StudyMaterial from "./common/StudyMaterial";
import TestSeries from "./common/TestSeries";
// import DownloadPage from "./DownloadPage"; // Import the DownloadPage

const Kcet = () => {
  return (
    <><div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-6 text-yellow-400">
    <h1>KCET</h1>
  </div>
    <div className="common-container">
      <div className="common-content">
        {/* KCEZT Study Material */}
        <div className="common-study-material">
          <StudyMaterial
            title="KCET Study Material"
            description="Details about KCET study materials, PDFs, etc."
          />
          {/* <DownloadPage nextRoute="/download/KCET-test-series.pdf?title=KCET Test Series" /> */}
        </div>

        {/* KCET Test Series */}
        <div className="common-test-series">
          <TestSeries
            title="KCET Test Series"
            description="Join the KCET test series to prepare for the exam."
          />
          <Link to="/download/KCET-PT,MT,FST,GT.pdf?title=KCET - PT, MT, FST, GT" className="download-link">
          KCET Test Series (No.of Test Count)
          </Link>
          <Link to="/download/KCET-2025.pdf?title=KCET - 2025" className="download-link">
          KCET Test Series (Track Sheet)
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Kcet;
