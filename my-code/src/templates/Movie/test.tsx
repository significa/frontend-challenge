import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Movie from '.'

import movieMock from './mock'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/movie/my-movie' }))
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Movie />', () => {
  it('should render movie page correctly', () => {
    renderWithTheme(<Movie {...movieMock} />)

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /IMDB Logo/i })).toHaveAttribute(
      'src',
      '/img/logo-imdb.svg'
    )

    expect(
      screen.getByRole('img', { name: /Rotten Tomatoes Logo/i })
    ).toHaveAttribute('src', '/img/logo-rotten-tomatoes.svg')

    expect(screen.getByText(/plot/i)).toBeInTheDocument()

    expect(screen.getByText(/cast/i)).toBeInTheDocument()

    expect(screen.getByText(/Gender/i)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /the matrix movie poster/i })
    ).toHaveAttribute('src', movieMock.Poster)
  })

  it('should call onClick method when favorite is clicked', async () => {
    renderWithTheme(<Movie {...movieMock} />)

    const likes = screen.getByLabelText('likes')

    fireEvent.click(likes)

    expect(fireEvent.click(likes)).toBeTruthy()
  })

  it('should render movie page without poster src', () => {
    renderWithTheme(<Movie {...movieMock} Poster="N/A" />)

    expect(
      screen.getByRole('img', {
        name: /There is no specific poster for this film/i
      })
    ).toHaveAttribute('src', '/img/no-poster.jpg')
  })
})
