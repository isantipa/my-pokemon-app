import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function ReturnButton() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button 
      className="return-button" 
      onClick={() => {
        // Get the page number from the URL and use it to navigate back to the correct page
        const queryParams = new URLSearchParams(location.search);
        const page = queryParams.get('page') || 1;
        navigate(-1, { state: { page } });
      }}
    >
    </button>
  );
}

export default ReturnButton;