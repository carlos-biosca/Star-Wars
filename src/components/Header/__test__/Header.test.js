import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('header component tests', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('render correct logo', () => {
    const logoHeader = screen.getByAltText('Star Wars')
    expect(logoHeader.src).toContain('logo')
  })

  test('login & register buttons', () => {
    const loginHeader = screen.getByRole('button', { name: /log in/i })
    expect(loginHeader).toBeInTheDocument()
    const signupHeader = screen.getByRole('button', { name: /sign up/i })
    expect(signupHeader).toBeInTheDocument()
  })
})


