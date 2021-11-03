import axios from "axios";

const getData = async (url) => {
  const res = await axios.get(url)
  const result = await res.data
  return result
}

export default getData;