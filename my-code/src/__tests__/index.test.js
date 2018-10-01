import 'localstorage-polyfill'

/**
 * Smoke test
 */
describe('index', () => {
  // Create root element
  const div = document.createElement('div')
  div.id = 'root'
  document.body.appendChild(div)

  it('renders', () => {
    // eslint-disable-next-line global-require
    require('../')
  })
})
