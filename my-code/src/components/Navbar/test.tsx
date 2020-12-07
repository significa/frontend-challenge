import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Navbar />)

    expect(screen.getByLabelText(/whats in/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /whats in/i })).toHaveAttribute(
      'href',
      '/'
    )
  })
})
