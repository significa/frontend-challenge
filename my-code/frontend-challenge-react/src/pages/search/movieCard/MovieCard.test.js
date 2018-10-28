import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
