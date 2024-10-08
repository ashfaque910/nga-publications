import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ClickArrow = ({ target }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(target); // Navigate to the specified target route
  };

  return (
    <button onClick={handleClick} className="arrow-button">
      <FaArrowRight size={24} /> {/* Arrow icon */}
    </button>
  );
};

export default ClickArrow;
