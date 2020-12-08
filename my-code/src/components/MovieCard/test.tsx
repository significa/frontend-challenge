import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import MovieCard from '.'

const props = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTg2NzQwMzQyMF5BMl5BanBnXkFtZTgwNzkzODk2ODE@._V1_SX300.jpg',
  Title: 'Pele: Birth of a Legend',
  Type: 'movie',
  Year: '2016',
  imdbID: 'tt0995868'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MovieCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.Title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.Year)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `${props.Title} movie poster` })
    ).toHaveAttribute('src', props.Poster)

    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without poster', () => {
    const { container } = renderWithTheme(<MovieCard {...props} Poster="N/A" />)

    expect(
      screen.getByRole('heading', { name: props.Title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.Year)).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /There is no specific poster for this film/i
      })
    ).toHaveAttribute('src', '/img/no-poster.jpg')

    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<MovieCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<MovieCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
