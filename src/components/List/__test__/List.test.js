import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import List from '../List'

const mockedStarships = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

beforeEach(() => {
  render(
    <Router>
      <List starships={mockedStarships} />
    </Router>
  )
})

describe('starships list', () => {
  test('render 1 element', () => {
    const listElement = screen.getByTestId('element-2')
    expect(listElement).toBeInTheDocument()
  })

  test('render 10 elements', () => {
    const listElements = screen.getAllByTestId(/element/i)
    expect(listElements.length).toBe(10)
  })
})
