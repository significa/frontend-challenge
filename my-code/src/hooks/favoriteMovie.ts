import { useEffect, useState } from 'react'

const useFavourite = (imdbID: string) => {
  const storageKey = '@favourite-movies'
  const [handlerFavourite, setHandlerFavourite] = useState<boolean>()

  const getStorage = () => {
    let itemsFromStorage = []
    if (typeof window !== 'undefined') {
      try {
        const storageData = localStorage.getItem(storageKey)
        if (storageData) {
          itemsFromStorage = JSON.parse(storageData)
        }
      } catch (err) {
        console.error(err)
      }
    }
    return itemsFromStorage
  }

  const putStorage = (items: string[]) => {
    const parsedStorage = JSON.stringify(items)

    localStorage.setItem(storageKey, parsedStorage)
  }

  useEffect(() => {
    const itemsFromStorage = getStorage()

    const favouriteIncluded = itemsFromStorage.includes(imdbID)
    setHandlerFavourite(favouriteIncluded)
  }, [imdbID])

  const handlerToggle = () => {
    const itemsFromStorage = getStorage()

    const isFavouriteIncluded = itemsFromStorage.includes(imdbID)
    let newStorage = []

    if (isFavouriteIncluded) {
      newStorage = itemsFromStorage.filter((item: string) => item !== imdbID)
      putStorage(newStorage)
      setHandlerFavourite(false)
    } else {
      newStorage = [imdbID, ...itemsFromStorage]
      putStorage(newStorage)
      setHandlerFavourite(true)
    }
  }

  return { handlerFavourite, handlerToggle }
}

export default useFavourite
