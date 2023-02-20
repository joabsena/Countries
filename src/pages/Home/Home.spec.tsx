import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Home } from './Home.component'

describe('Page: Home', () => {
  it('should render snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
