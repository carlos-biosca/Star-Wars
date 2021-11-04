export default function useSelectStarship (event, array) {
  const filterStarship = array.filter(item => item.name === event.target.firstChild.textContent)
  let id = (filterStarship[0].url).match(/[0-9]+/)
  id = id[0]
  return { filterStarship, id }
}

