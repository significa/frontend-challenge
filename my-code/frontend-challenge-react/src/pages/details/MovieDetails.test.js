import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetails from './MovieDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
