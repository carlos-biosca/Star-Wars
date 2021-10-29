import axios from "axios";

const getData = async (url, set) => {
  const res = await axios.get(url)
  const result = await res.data
  set(result)
}

export default getData;