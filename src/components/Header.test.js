import { render, screen } from "@testing-library/react";
import Header from "./Header"; 

describe("<Header />", () => {
  
  test('renders the logo image with correct src and alt text', () => {
    render(<Header />);
    const logoImg = screen.getByRole('img', { name: /Pokemon logo\./i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', expect.stringContaining('pokemon.png'));
  });

  test('renders the h1 tag with correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('App');
  });
  
});
