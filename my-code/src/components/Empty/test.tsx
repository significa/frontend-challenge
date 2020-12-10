import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty />)

    expect(
      screen.getByRole('img', { name: /List of movies is empty/i })
    ).toHaveAttribute('src', '/img/empty.png')

    expect(
      screen.getByRole('heading', { name: /Don’t know what to search/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
