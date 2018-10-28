import React from 'react';
import ReactDOM from 'react-dom';
import FavouriteButton from './FavouriteButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavouriteButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
