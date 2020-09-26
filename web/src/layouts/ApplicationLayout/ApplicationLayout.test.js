import { render } from '@redwoodjs/testing'

import ApplicationLayout from './ApplicationLayout'

describe('ApplicationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationLayout />)
    }).not.toThrow()
  })
})
