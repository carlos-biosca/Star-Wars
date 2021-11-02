const handleShipSelection = (event, results, setSelectedStarship, setIdStarship) => {
  const filterStarship = results.filter(item => item.name === event.target.firstChild.textContent)
  setSelectedStarship(...filterStarship);
  const id = (filterStarship[0].url).match(/[0-9]+/)
  setIdStarship(id[0])
}

export default handleShipSelection