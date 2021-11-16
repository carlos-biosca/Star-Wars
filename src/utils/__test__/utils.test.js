import axios from 'axios'
import formatListNames from '../formatListNames'
import getData from '../getData'


const string = 'eye_color'

jest.mock('axios')

describe('formatListNames', () => {
  test('should be declared', () => {
    expect(formatListNames).toBeDefined()
  })

  test('return string Capitalized', () => {
    expect(formatListNames(string)).toEqual('Eye color')
  })
})

describe('getData', () => {
  test('get data successfully from an API', async () => {
    const data = {
      starships: [],
      films: [],
      year: 2021
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(getData('url')).resolves.toEqual(data);
  })
  test('get data erroneously from an API', async () => {
    const errorMessage = 'Error'
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
    await expect(getData('url')).rejects.toThrow(errorMessage);
  });
})