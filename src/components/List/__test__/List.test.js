import { render, screen } from '@testing-library/react'
import List from '../List'

const mockedStarships = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

describe('starships list', () => {
  test('render 1 element', () => {
    render(<List starships={mockedStarships} />)
    const listElement = screen.getByTestId('element-2')
    expect(listElement).toBeInTheDocument()
  })

  test('render 10 elements', () => {
    render(<List starships={mockedStarships} />)
    const listElements = screen.getAllByTestId(/element/i)
    expect(listElements.length).toBe(10)
  })
})
