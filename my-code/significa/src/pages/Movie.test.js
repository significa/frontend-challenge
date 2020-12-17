import { render, screen } from "@testing-library/react";
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

test("renders the component with params", () => {
  // declare the path prop in the component, exactly like the route
  renderWithRouterWrapper(<Movie path="/movie/:movieId" />, {
    // and pass the parameter value on the route config
    route: "/movie/235",
  });

  const textElement = screen.getByText(/235/i);
  expect(textElement).toBeInTheDocument();
});
