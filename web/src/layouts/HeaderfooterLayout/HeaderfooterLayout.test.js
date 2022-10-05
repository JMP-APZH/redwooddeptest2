import { render } from '@redwoodjs/testing/web'

import HeaderfooterLayout from './HeaderfooterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HeaderfooterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderfooterLayout />)
    }).not.toThrow()
  })
})
