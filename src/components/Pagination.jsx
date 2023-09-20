import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ currentPage, numberOfPages, onPageChange }) {
    return (
      <div className="pagination-controls">
        <button 
          onClick={() => onPageChange(prev => Math.max(1, prev - 1))} 
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>Page {currentPage} of {numberOfPages}</span>
        <button 
          onClick={() => onPageChange(prev => Math.min(numberOfPages, prev + 1))} 
          disabled={currentPage === numberOfPages}
        >
          &gt;
        </button>
      </div>
    );
  }
  
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;