import { render, screen } from '@testing-library/react'
import Social from '../Social'

beforeEach(() => {
  render(<Social />)
})

describe('social icons test', () => {
  test('number of links', () => {
    const linkElements = screen.getAllByRole('link')
    expect(linkElements.length).toBe(5)
  })

  test('kids link href', () => {
    const linkElement = screen.getByText(/kids/i)
    expect(linkElement).toHaveAttribute('href', '#!')
  })
})
