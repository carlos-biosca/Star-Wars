import { useState, useEffect } from 'react';

import List from "../../components/List/List"

import getData from '../../logic/getData';
import handleShipSelection from '../../logic/handleShipSelection';


export default function Starships () {
  const [data, setData] = useState([])
  const [selectedStarship, setSelectedStarship] = useState(null)
  const [idStarhip, setIdStarship] = useState()

  useEffect(() => {
    getData('https://swapi.dev/api/starships/', setData)
  }, [])

  return (
    <div>
      {
        selectedStarship ? (
          <>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${idStarhip}.jpg`} alt="" />
            <h3>{selectedStarship.name}</h3>
            <p>Model: {selectedStarship.model}</p>
            <p>Manufacturer: {selectedStarship.manufacturer}</p>
            <p>Cost in credits: {selectedStarship.cost_in_credits}</p>
            <p>Length: {selectedStarship.length}</p>
            <p>Atmospheric Speed: {selectedStarship.max_atmosphering_speed}</p>
            <p>Crew: {selectedStarship.crew}</p>
          </>
        ) :
          (
            <List starships={data.results} showInfo={(e) => handleShipSelection(e, data.results, setSelectedStarship, setIdStarship)} />
          )
      }
    </div>
  )
}