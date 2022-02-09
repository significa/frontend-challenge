import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { configure } from '@testing-library/dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../components/home/home';
import SearchIllustration from '../components/searchIllustration';
import { MemoryRouter, Route, Routes } from 'react-router';
import { SearchData } from '../interfaces/home';
import { ErrorResponse } from '../interfaces/resultAsError';

configure({ testIdAttribute: 'id' });

describe('components rendering without crashing', () => {
  test('renders search-illustration', () => {
    render(<SearchIllustration />);
    const additionalInfo = screen.getByText(/Dont know what to search?/i);
    expect(additionalInfo).toBeInTheDocument();
  });

  test('renders home', () => {
    render(<Home />);
  })
})

const searchData: SearchData[] = [{
  Title: "Snow White and the Huntsman",
  Year: "2012",
  imdbID: "tt1735898",
  Poster: "https://m.media-amazon.com/images/M/MV5BOGQ5MWNjZGQtOWM2ZC00MjEyLWEwODAtN2JmN2U0OWQ0YzI3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
}];

const resultIsError: ErrorResponse = {
  Error: 'Movie not found!',
  Response: false
}

describe('Search API endpoint', () => {
  const server = setupServer(
    rest.get('http://www.omdbapi.com/?apikey=b02d2b50&s=snow', (req, res, ctx) => {
      return res(ctx.json(searchData));
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Loads and displays results', async () => {
    render(<MemoryRouter><Home /></MemoryRouter>);

    const input = screen.getByPlaceholderText('Search movies...');
    fireEvent.change(input, { target: { value: 'snow' } });
    fireEvent.submit(screen.getByTestId('search-form'));

    await waitFor(() => screen.getByText('2012'));
    expect(screen.getByTestId('year')).toHaveTextContent('2012');
  })

  test('Displays a helpful message when movie is not found', async () => {
    server.use(
      rest.get('http://www.omdbapi.com/?apikey=b02d2b50&s=not-available', (req, res, ctx) => {
        return res(ctx.json(resultIsError));
      })
    )

    render(<MemoryRouter><Home /></MemoryRouter>);

    const input = screen.getByPlaceholderText('Search movies...');
    fireEvent.change(input, { target: { value: 'not-available' } });
    fireEvent.submit(screen.getByTestId('search-form'));

    await waitFor(() => screen.getByText(/Movie not found!/i));
    expect(screen.getByTestId('message')).toHaveTextContent(/Movie not found!/i);
  })

  test('Displays an error incase of any other failure', async () => {
    server.use(
      rest.get('http://www.omdbapi.com/?apikey=b02d2b50&s=failing', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    )

    render(<MemoryRouter><Home /></MemoryRouter>);

    const input = screen.getByPlaceholderText('Search movies...');
    fireEvent.change(input, { target: { value: 'failing' } });
    fireEvent.submit(screen.getByTestId('search-form'));

    await waitFor(() => screen.getByText(/failed to fetch/i));
    expect(screen.getByTestId('message')).toHaveTextContent(/failed to fetch/i);
  })
})