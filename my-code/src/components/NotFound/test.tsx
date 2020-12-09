import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<NotFound />)

    expect(
      screen.getByRole('img', { name: /Movie not found/i })
    ).toHaveAttribute('src', '/img/not-found.jpg')

    expect(
      screen.getByRole('heading', { name: /Movie not found/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
