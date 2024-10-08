import React from 'react';
import './FeatureCard.css'; // Assuming your CSS is in this file

const FeatureCard = ({ title, description }) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="small-desc">{description}</p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
  );
};

export default FeatureCard;
