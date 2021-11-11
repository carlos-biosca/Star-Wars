import getData from "../utils/getData"
import { initialUrl } from "./../constants/index"


const retrieveStarships = async () => await getData(initialUrl)

export default retrieveStarships