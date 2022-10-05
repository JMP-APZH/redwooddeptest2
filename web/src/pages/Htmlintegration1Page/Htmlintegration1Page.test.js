import { render } from '@redwoodjs/testing/web'

import Htmlintegration1Page from './Htmlintegration1Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Htmlintegration1Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Htmlintegration1Page />)
    }).not.toThrow()
  })
})
