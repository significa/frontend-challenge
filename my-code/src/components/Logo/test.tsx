import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Whats in/i).parentElement).toHaveStyle({
      width: '11rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a normal logo', () => {
    const { container } = renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Whats in/i).parentElement).toHaveStyle({
      width: '20rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
