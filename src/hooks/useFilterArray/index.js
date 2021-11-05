export default function useFilterArray (event, array) {
  const filteredItem = array.filter(item => item.name === event.target.firstChild.textContent)
  return { filteredItem }
}

