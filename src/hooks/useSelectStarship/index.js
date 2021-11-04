export default function useSelectStarship (event, array) {
  const filterStarship = array.filter(item => item.name === event.target.firstChild.textContent)
  const id = (filterStarship[0].url).match(/[0-9]+/)
  return { filterStarship, id }
}

