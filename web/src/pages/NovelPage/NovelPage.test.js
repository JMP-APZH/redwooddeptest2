import { render } from '@redwoodjs/testing/web'

import NovelPage from './NovelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NovelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NovelPage />)
    }).not.toThrow()
  })
})
