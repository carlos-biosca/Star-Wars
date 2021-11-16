import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import App from './App'

test('app navigating', () => {
  const history = createMemoryHistory()
  render(
    <App>
      <Router history={history} />
    </App>
  )
  const homeView = screen.getByTestId('slider')
  expect(homeView).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/starships/i), leftClick)
})