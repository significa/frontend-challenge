import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders home", () => {
  render(<Home />);
  const textElement = screen.getByText(/search/i);
  expect(textElement).toBeInTheDocument();
});
