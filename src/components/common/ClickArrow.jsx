import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Using react-icons for arrow icon

const ClickArrow = ({ target }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(target); // Navigate to the specified target route
  };

  return (
    <button onClick={handleClick} className="arrow-button">
      <FaArrowRight size={24} /> {/* Icon for the arrow */}
    </button>
  );
};

export default ClickArrow;
