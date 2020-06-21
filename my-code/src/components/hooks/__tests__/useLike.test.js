import React from 'react';
import useLike from '../useLike';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }
}

global.localStorage = new LocalStorageMock();

const WrapperHook = () => {
  const { liked, toggle } = useLike('12345678');

  if (liked) return <h1>liked</h1>;

  return (
    <button title="Click to like" onClick={toggle}>
      Click to like
    </button>
  );
};

describe('hooks', () => {
  describe('useLike', () => {
    it('should like and access localStorage', async () => {
      render(<WrapperHook />);

      const buttonlike = screen.getByRole('button', { name: /Click to like/ });
      userEvent.click(buttonlike);
      expect(screen.getByRole('heading', { name: /liked/ })).toBeInTheDocument();
    });
  });
});
