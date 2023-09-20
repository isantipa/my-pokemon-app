import React from 'react';
import { useContext } from 'react';
import { ViewModeContext } from '../context/ViewModeContext';

function GridViewToggle() {
  const { viewMode, setViewMode } = useContext(ViewModeContext);

  return (
    <button onClick={() => setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'))}>
      {viewMode === 'list' ? 'Change to Grid View' : 'Change to List View'}
    </button>
  );
}

export default GridViewToggle;