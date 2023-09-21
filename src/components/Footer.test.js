import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  test('renders the Footer component', () => {
    render(<Footer />);
  });
  
  test('renders the correct text', () => {
    render(<Footer />);
    const textElement = screen.getByText(/Created by: Imanol Santiago/i);
    expect(textElement).toBeInTheDocument();
  });

});