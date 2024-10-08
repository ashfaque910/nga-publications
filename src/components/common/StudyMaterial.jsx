// components/common/StudyMaterial.jsx
import React from "react";
// import ArrowButton from "../ClickArrow";
// import './StudyMaterial.css'; // Add the font and style changes

const StudyMaterial = ({ title}) => {
  return (
    <div className="study-material-card text-center text-[#2E6982] p-2" >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {/* <p className="text-lg mb-6">{description}</p> */}
      {/* <ArrowButton target={target} /> */}
    </div>
  );
};

export default StudyMaterial;
// border:'1px solid #2E6982',