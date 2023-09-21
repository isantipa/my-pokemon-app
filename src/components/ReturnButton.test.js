import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ReturnButton from './ReturnButton';

describe('<ReturnButton />', () => {
  let navigateMock;
  let history;

  beforeEach(() => {
    navigateMock = jest.fn();
    history = createMemoryHistory();

    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);
    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(history.location);
  });

  const renderComponent = () => {
    render(
      <Router history={history}>
        <ReturnButton />
      </Router>
    );
  };

  it('renders the return button', () => {
    renderComponent();
    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
  });

  it('calls navigate with -1 and the current page when clicked', () => {
    history.push('?page=3');
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: '' }));
    expect(navigateMock).toHaveBeenCalledWith(-1, { state: { page: '3' } });
  });

  it('calls navigate with -1 and default page 1 when no page is in the URL', () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: '' }));
    expect(navigateMock).toHaveBeenCalledWith(-1, { state: { page: '1' } });
  });
});