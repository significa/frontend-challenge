/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'jest-styled-components'

jest.mock('styled-tools', () => ({
  ...require.requireActual('styled-tools'),
  // Return key instead of getting value for better snapshots
  theme: key => `theme.${key}`
}))

configure({ adapter: new Adapter() })
