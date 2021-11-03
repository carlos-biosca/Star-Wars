import getData from "../utils/getData"

const retrieveStarships = async () => await getData('https://swapi.dev/api/starships/')

export default retrieveStarships