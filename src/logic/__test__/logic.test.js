import filterStarships from '../filter-starships'

const mockedStarships = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]


describe('function filterStarships', () => {
  test('return array', () => {
    expect(filterStarships('', mockedStarships) instanceof Array).toBe(true)
  })
})