import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailsList from './MovieDetailsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDetailsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
