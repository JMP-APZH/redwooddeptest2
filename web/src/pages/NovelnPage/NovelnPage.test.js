import { render } from '@redwoodjs/testing/web'

import NovelnPage from './NovelnPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NovelnPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NovelnPage />)
    }).not.toThrow()
  })
})
