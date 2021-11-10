import { useState, useEffect } from "react";

const getSaved = (key) => {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue
  else return null
}

export default function useLocalstorage (key) {
  const [starship, setStarship] = useState(() => {
    return getSaved(key)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(starship))
  }, [starship, key])

  return [starship, setStarship]
}
