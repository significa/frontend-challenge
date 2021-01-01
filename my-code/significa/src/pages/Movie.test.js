import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  Router,
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import Movie from "./Movie";

/* component Movie relies on the router being in context, 
  so we need a render function with Router wrapper from 
  @reach/router to be able to test it */
function renderWithRouterWrapper(
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(
      <LocationProvider history={history}>
        <Router>{ui}</Router>
      </LocationProvider>
    ),
    history,
  };
}

test("renders the component with params", async () => {
  // declare the path prop in the component, exactly like the route
  renderWithRouterWrapper(<Movie path="/movie/:movieId" />, {
    // and pass the parameter value on the route config
    route: "/movie/235",
  });

  expect.assertions(2);

  const textElement = screen.getByText(/Loading/i);
  expect(textElement).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText(/Incorrect IMDb ID/i)).toBeInTheDocument();
  });
});

test("renders info for movie 'what we do in the shadows'", async () => {
  // declare the path prop in the component, exactly like the route
  renderWithRouterWrapper(<Movie path="/movie/:movieId" />, {
    // and pass the parameter value on the route config
    route: "/movie/tt3416742",
  });

  expect.assertions(2);
  await waitFor(() => {
    expect(screen.getByText(/What We Do in the Shadows/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/What We Do in the Shadows/i)
    ).toBeInTheDocument();
  });
});

test("toggle favourites' button", async () => {
  // declare the path prop in the component, exactly like the route
  renderWithRouterWrapper(<Movie path="/movie/:movieId" />, {
    // and pass the parameter value on the route config
    route: "/movie/tt3416742",
  });
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId("favNo")).toBeInTheDocument();
  });
  // click to add movie to favourites
  fireEvent.click(screen.getByTestId("favNo"), { button: 0 });
  expect(screen.getByTestId("favYes")).toBeInTheDocument();
  // click again to remove movie from favourites
  fireEvent.click(screen.getByTestId("favYes"), { button: 0 });
  expect(screen.getByTestId("favNo")).toBeInTheDocument();
});
