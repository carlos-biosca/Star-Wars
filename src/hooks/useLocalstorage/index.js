import { useState, useEffect } from "react";

const getSaved = (key) => {
  const savedValue = JSON.parse(sessionStorage.getItem(key))
  if (savedValue) return savedValue
}

export default function useSessionstorage (key) {
  const [starship, setStarship] = useState(() => {
    return getSaved(key)
  })

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(starship))
  }, [starship, key])

  return [starship, setStarship]
}
