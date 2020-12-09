import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button from '.'

describe('<Button />', () => {
  it('should render the favorited button', () => {
    const { container } = renderWithTheme(
      <Button icon={<Favorite data-testid="icon" />} favourite>
        Add
      </Button>
    )

    expect(screen.getByRole('button', { name: /Add/i })).toHaveStyle({
      background: '#FF4040',
      height: '4rem',
      padding: '0.8rem',
      'font-size': '1.6rem'
    })

    expect(screen.getByTestId('icon')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the add favorite button', () => {
    const { container } = renderWithTheme(
      <Button icon={<FavoriteBorder data-testid="icon" />} favourite={false}>
        Add to favourites
      </Button>
    )

    expect(screen.getByRole('button', { name: /Add/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem',
      'font-size': '1.6rem'
    })

    expect(screen.getByTestId('icon')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
