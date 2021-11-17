import getData from "../utils/getData"
import { initialActorsUrl } from "./../constants/index"


const retrieveActors = async () => await getData(initialActorsUrl)

export default retrieveActors