import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders", () => {
  const { getByText } = render(<App />);

  const text = getByText(/Don't know what to search/i);
  expect(text).toBeInTheDocument();
});
