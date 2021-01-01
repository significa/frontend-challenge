import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";

const setup = () => {
  const utils = render(<Home />);
  const input = utils.getByLabelText("search-input");
  return {
    input,
    ...utils,
  };
};

const movieId = "tt0021749"; // for movie "City Lights"
const movieTitle = "city lights";

test("renders loading", () => {
  render(<Home />);
  expect.assertions(1);

  // text loading should appear in the beginning, when it's loading
  const textElement = screen.getByText(/loading/i);
  expect(textElement).toBeInTheDocument();
});

test("initial input is empty, input value will change", () => {
  expect.assertions(3);
  const { input } = setup();

  // trigger changes to the input value
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "21" } });
  expect(input.value).toBe("21");
  fireEvent.change(input, { target: { value: "red" } });
  expect(input.value).toBe("red");
});

test("queried movie title appears", async () => {
  const { input } = setup();
  expect.assertions(3);
  // wait for appearance of empty state
  await waitFor(() => {
    expect(screen.getByText(/Don't know what to search/)).toBeInTheDocument();
  });

  // query for a movie
  fireEvent.change(input, { target: { value: movieTitle } });

  // check if it's loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // wait for api response and expect at least one movie to be found
  await waitFor(() => {
    expect(screen.getAllByText(/city lights/i).length).toBeGreaterThan(1);
  });
});

test("no movies with query title", async () => {
  const { input } = setup();

  // query for non existent movie
  fireEvent.change(input, { target: { value: "the thin red line 111" } });

  // check if it's loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // wait for api response and expect movie not to be found
  await waitFor(() => {
    expect(input.value).toBe("the thin red line 111");
    expect(screen.queryByText("the thin red line 111")).not.toBeInTheDocument();
    expect(screen.getByText(/Movie not found/i)).toBeInTheDocument();
  });
});

test("adds and removes favourites in local storage", async () => {
  const { input } = setup();
  expect.assertions(6);
  // check if movie is in local storage
  let favourite = localStorage.getItem("whatsInFavourites");
  expect(favourite).not.toBe(null);
  expect(favourite).not.toEqual(expect.stringMatching(movieId));

  // add movie to favourites
  let newFav = localStorage.getItem("whatsInFavourites");
  newFav = newFav.split(",");
  newFav.push(movieId);
  newFav = newFav.join(",");
  localStorage.setItem("whatsInFavourites", newFav);

  // check again if movie is in local storage
  favourite = localStorage.getItem("whatsInFavourites");
  expect(favourite).toEqual(expect.stringMatching(movieId));

  // search movie
  fireEvent.change(input, { target: { value: "city lights" } });

  await waitFor(() => {
    // check if movie has a full heart on the card, i.e. is a favourite
    expect(screen.getByTestId(movieId)).toBeInTheDocument();
  });

  fireEvent.change(input, { target: { value: "red" } });

  await waitFor(() => {
    // check if movie has a full heart on the card, i.e. is a favourite
    expect(screen.queryByTestId(movieId)).not.toBeInTheDocument();
  });

  // remove movie from favourites
  let remFav = localStorage.getItem("whatsInFavourites");
  remFav = remFav.split(",");
  remFav.splice(remFav.indexOf(movieId), 1);
  remFav = remFav.join(",");
  localStorage.setItem("whatsInFavourites", remFav);

  // search movie "city lights" again
  fireEvent.change(input, { target: { value: "city lights" } });

  await waitFor(() => {
    // check if movie has a full heart on the card, it should not, as it is a favourite
    expect(screen.queryByTestId(movieId)).not.toBeInTheDocument();
  });
});
