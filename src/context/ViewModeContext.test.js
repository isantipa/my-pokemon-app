import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ViewModeContext, ViewModeProvider } from './ViewModeContext';

describe('<ViewModeProvider />', () => {
  // Test component that simulates a consumer of the context.
  function TestComponent() {
    const { viewMode, setViewMode } = useContext(ViewModeContext);
    return (
      <div>
        <span>{viewMode}</span>
        <button onClick={() => setViewMode('grid')}>Set to Grid</button>
      </div>
    );
  }

  test('it provides the initial value', () => {
    render(
      <ViewModeProvider>
        <TestComponent />
      </ViewModeProvider>
    );
    expect(screen.getByText('list')).toBeInTheDocument();
  });

  test('it allows children components to modify the context value', () => {
    render(
      <ViewModeProvider>
        <TestComponent />
      </ViewModeProvider>
    );
    fireEvent.click(screen.getByText('Set to Grid'));
    expect(screen.getByText('grid')).toBeInTheDocument();
  });
});