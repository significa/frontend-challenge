import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

const setup = () => {
  const utils = render(<Home />);
  const input = utils.getByLabelText("search-input");
  return {
    input,
    ...utils,
  };
};

test("renders home", () => {
  render(<Home />);
  /* text loading should appear in the beginning, when it's loading  */
  const textElement = screen.getByText(/loading/i);
  expect(textElement).toBeInTheDocument();
});

test("initial input is empty, input value will change", () => {
  const { input } = setup();
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "21" } });
  expect(input.value).toBe("21");
  fireEvent.change(input, { target: { value: "red" } });
  expect(input.value).toBe("red");
});
