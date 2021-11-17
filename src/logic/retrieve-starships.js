import getData from "../utils/getData"
import { initialStarshipsUrl } from "./../constants/index"


const retrieveStarships = async () => await getData(initialStarshipsUrl)

export default retrieveStarships