import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Navbar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Navbar"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render the base component', () => {
    renderWithTheme(
      <Base>
        <h1>Content</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock Navbar')).toBeInTheDocument()
  })
})
