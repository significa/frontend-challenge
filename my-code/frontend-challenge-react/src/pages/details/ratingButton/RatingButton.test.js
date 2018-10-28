import React from 'react';
import ReactDOM from 'react-dom';
import RatingButton from './RatingButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatingButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
