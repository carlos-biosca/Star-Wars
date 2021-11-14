import { useState, useEffect } from "react";

const getSaved = (key) => {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue
  else return []
}

export default function useLocalstorage (key) {
  const [array, setArray] = useState(() => {
    return getSaved(key)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(array))
  }, [array, key])

  return [array, setArray]
}
