import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { configure } from '@testing-library/dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MovieData } from '../interfaces/detail';
import Detail from '../components/detail/detail';
import { MemoryRouter, Route, Routes } from 'react-router';
import { ErrorResponse } from '../interfaces/resultAsError';

configure({ testIdAttribute: 'id' });

const resultIsError: ErrorResponse = {
  Error: 'Movie not found!',
  Response: false
}

const movieData: MovieData = {
    Title: "Snow White and the Huntsman",
    Year: "2012",
    Rated: "PG-13",
    Runtime: "127 min",
    Genre: "Action, Adventure, Drama",
    Director: "Rupert Sanders",
    Actors: "Kristen Stewart, Chris Hemsworth, Charlize Theron",
    Plot: "In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen.",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGQ5MWNjZGQtOWM2ZC00MjEyLWEwODAtN2JmN2U0OWQ0YzI3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    Ratings: [
        {
            Source: "Internet Movie Database",
            Value: "6.1/10"
        },
        {
            Source: "Rotten Tomatoes",
            Value: "49%"
        },
        {
            Source: "Metacritic",
            Value: "57/100"
        }
    ]
}

describe('fetch a movie with id API endpoint', () => {
  const server = setupServer(
    rest.get('http://www.omdbapi.com/?apikey=b02d2b50&i=tt1735898', (req, res, ctx) => {
      return res(ctx.json(movieData));
    }),
  )

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Loads and displays a movie', async () => {
    render(<MemoryRouter initialEntries={["/movie/:tt1735898"]}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </MemoryRouter>);

    await waitFor(() => screen.getByText('Snow White and the Huntsman'));
    expect(screen.getByTestId('runtime')).toHaveTextContent(/127 min/i);
  })

  test('Displays a helpful message when movie is not found', async () => {
    server.use(
      rest.get('http://www.omdbapi.com/?apikey=b02d2b50&i=failing', (req, res, ctx) => {
        return res(ctx.json(resultIsError));
      })
    );

    render(<MemoryRouter initialEntries={["/movie/:tt1735898"]}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </MemoryRouter>);

    await waitFor(() => screen.getByText(/Movie not found!/i));
    expect(screen.getByTestId('message')).toHaveTextContent(/Movie not found!/i);
  })

  test('Displays an error message incase fetching movie fails', async () => {
    server.use(
      rest.get('http://www.omdbapi.com/?apikey=b02d2b50&i=failing', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<MemoryRouter initialEntries={["/movie/:tt1735898"]}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </MemoryRouter>);

    await waitFor(() => screen.getByText(/failed to fetch/i));
    expect(screen.getByTestId('message')).toHaveTextContent(/failed to fetch/i);
  })
})
