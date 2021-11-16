import { render, screen } from '@testing-library/react'
import Header from '../Header'

const logged = {
  login: true
}

describe('header component tests', () => {
  beforeEach(() => {
    render(<Header logged={logged} />)
  })

  test('render correct logo', () => {
    const logoHeader = screen.getByAltText('Star Wars')
    expect(logoHeader.src).toContain('logo')
  })
})


