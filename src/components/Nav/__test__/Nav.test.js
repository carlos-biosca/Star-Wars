import { render, screen, within } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import Nav from '../Nav'

const MockNav = () => {
  return (
    <Router>
      <Nav />
    </Router>
  )
}

test('nav links test', () => {
  render(<MockNav />)
  const list = screen.getByRole('list', { name: /menu/i })
  const { getAllByRole } = within(list)
  const items = getAllByRole('listitem')
  expect(items.length).toBe(2)
})

