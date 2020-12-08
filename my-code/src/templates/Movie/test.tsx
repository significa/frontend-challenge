import { render, screen } from '@testing-library/react'

import Movie from '.'

describe('<Movie />', () => {
  it('should render the heading', () => {
    const { container } = render(<Movie />)

    expect(screen.getByRole('heading', { name: /Movie/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
