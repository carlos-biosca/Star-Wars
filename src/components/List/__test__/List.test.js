import { render, screen, within } from '@testing-library/react'
import List from '../List'

test('render 10 naves', async () => {
  render(<List />)
  const list = await screen.findByRole("list", { name: /starships list/i })
  console.log(list);
  // const { findAllByRole } = within(list)
  // const items = await findAllByRole("listitem")
  // expect(items.length).toBe(10)
})