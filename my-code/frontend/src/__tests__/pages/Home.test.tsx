import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Home from "../../pages/Home";

describe("<Home />", async () => {
  it("Should be able to search a movie", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Home />);
    const searchField = getByPlaceholderText("Search movies...");
    fireEvent.change(searchField, { target: "What" });

    await waitFor(() => {
      expect(getByTestId("movie-list")).toBeInTheDocument();
    });
  });
});
