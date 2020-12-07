import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import MovieCard from '.'

const props = {
  poster:
    'https://m.media-amazon.com/images/M/MV5BMTg2NzQwMzQyMF5BMl5BanBnXkFtZTgwNzkzODk2ODE@._V1_SX300.jpg',
  title: 'Pele: Birth of a Legend',
  type: 'movie',
  year: '2016',
  id: 'tt0995868'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MovieCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.year)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `${props.title} movie poster` })
    ).toHaveAttribute('src', props.poster)

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
