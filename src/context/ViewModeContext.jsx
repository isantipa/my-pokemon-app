import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ViewModeContext = createContext();

export function ViewModeProvider({ children }) {
  const [viewMode, setViewMode] = useState('list');

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

ViewModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// This context provides the current view mode (grid or list) and a function to toggle between them.
