// components/common/TestSeries.jsx
import React from "react";
import ArrowButton from "./ClickArrow";
// import './TestSeries.css'; // Add the font and style changes

const TestSeries = ({ title, description, target }) => {
  return (
    <div className="test-series-card text-center text-[#2E6982] p-6" style={{border:'1px solid #2E6982', borderRadius:'15px 0'}}>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>
      <ArrowButton target={target} />
    </div>
  );
};

export default TestSeries;
