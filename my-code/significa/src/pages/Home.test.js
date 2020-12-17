import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders home", () => {
  render(<Home />);
  const textElement = screen.getByText(/home/i);
  expect(textElement).toBeInTheDocument();
});
