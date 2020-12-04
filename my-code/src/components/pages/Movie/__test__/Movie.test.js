import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Movie from '../index';

const responseMock = {
  movie: {
    Title: 'The Matrix',
    Year: '1999',
    Rated: 'R',
    Released: '31 Mar 1999',
    Runtime: '136 min',
    Genre: 'Action, Sci-Fi',
    Director: 'Lana Wachowski, Lilly Wachowski',
    Writer: 'Lilly Wachowski, Lana Wachowski',
    Actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
    Plot:
      "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.",
    Language: 'English',
    Country: 'USA',
    Awards: 'Won 4 Oscars. Another 37 wins & 51 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.7/10'
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '88%'
      },
      {
        Source: 'Metacritic',
        Value: '73/100'
      }
    ],
    Metascore: '73',
    imdbRating: '8.7',
    imdbVotes: '1,647,373',
    imdbID: 'tt0133093',
    Type: 'movie',
    DVD: 'N/A',
    BoxOffice: 'N/A',
    Production: 'Village Roadshow Prod., Silver Pictures',
    Website: 'N/A',
    Response: 'True'
  }
};

describe('<Movie />', () => {
  it('should render movie with data', async () => {
    render(<Movie {...responseMock} />);

    expect(screen.getByText('The Matrix')).toBeInTheDocument();
  });

  it('should render movie with error', async () => {
    render(<Movie />);

    expect(screen.getByText('Movie Not Found :(')).toBeInTheDocument();
  });
});
