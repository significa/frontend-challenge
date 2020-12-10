import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Page404 from '.'

describe('<Page404 />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Page404 />)

    expect(
      screen.getByRole('img', { name: /Jhon Travolta looking for/i })
    ).toHaveAttribute('src', '/img/not-found.gif')

    expect(
      screen.getByRole('heading', { name: /page not found/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 5.6rem;
      }

      .c1 {
        color: #7A8C99;
        padding: 4.0rem;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 1.8rem;
        }
      }

      <main
        class="c0"
      >
        <img
          alt="Jhon Travolta looking for"
          src="/img/not-found.gif"
        />
        <h1
          class="c1"
        >
          Page not found
        </h1>
      </main>
    `)
  })
})
