import { useEffect, useState } from 'react';

const useFavourite = imdbID => {
  const storageKey = 'favourite-movies';
  const [handlerFavourite, setHandlerFavourite] = useState();

  const getStorage = () => {
    let itemsFromStorage = [];
    if (typeof window !== 'undefined') {
      try {
        let storageData = localStorage.getItem(storageKey);
        if (storageData) {
          itemsFromStorage = JSON.parse(storageData);
        }
      } catch (err) {
        // Error
      }
    }
    return itemsFromStorage;
  };

  const putStorage = items => {
    const parsedStorage = JSON.stringify(items);

    localStorage.setItem(storageKey, parsedStorage);
  };

  useEffect(() => {
    const itemsFromStorage = getStorage();

    let favouriteIncluded = itemsFromStorage.includes(imdbID);
    setHandlerFavourite(favouriteIncluded);
  }, []);

  const handlerToggle = () => {
    const itemsFromStorage = getStorage();

    const isFavouriteIncluded = itemsFromStorage.includes(imdbID);
    let newStorage = [];

    if (isFavouriteIncluded) {
      newStorage = itemsFromStorage.filter(item => item !== imdbID);
      putStorage(newStorage);
      setHandlerFavourite(false);
    } else {
      newStorage = [imdbID, ...itemsFromStorage];
      putStorage(newStorage);
      setHandlerFavourite(true);
    }
  };

  return { handlerFavourite, handlerToggle };
};

export default useFavourite;
