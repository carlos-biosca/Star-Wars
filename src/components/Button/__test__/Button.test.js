import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'

describe('modal buttons test', () => {
  test('onClick open login modal', () => {
    const handleOpenLogin = jest.fn()
    render(<Button open={handleOpenLogin} text='log in' />)
    const loginButton = screen.getByText(/log in/i)
    fireEvent.click(loginButton)
    expect(handleOpenLogin).toHaveBeenCalledTimes(1)
  })

  test('onClick open signup modal', () => {
    const handleOpenSignup = jest.fn()
    render(<Button open={handleOpenSignup} text='sign up' />)
    const signupButton = screen.getByText(/sign up/i)
    fireEvent.click(signupButton)
    expect(handleOpenSignup).toHaveBeenCalledTimes(1)
  })
})