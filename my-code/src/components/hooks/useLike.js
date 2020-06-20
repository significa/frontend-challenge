// @flow
import { useState } from 'react';

export default function useLike(id: string) {
  let initialLike;
  let likedItems = [];
  if (typeof window !== 'undefined') {
    try {
      const storageData = localStorage.getItem('likedMovies');
      if (storageData) {
        likedItems = JSON.parse(storageData);
      }
    } catch (error) {
      // continue regardless of error
    }
  }
  initialLike = likedItems.includes(id);
  const [liked, setLiked] = useState(initialLike);

  const toggle = () => {
    let newValue;
    if (liked) {
      newValue = likedItems.filter((movieId) => movieId !== id);
    } else {
      newValue = [...likedItems, id];
    }

    try {
      const parsedStorage = JSON.stringify(newValue);
      localStorage.setItem('likedMovies', parsedStorage);
      setLiked(!liked);
    } catch (error) {
      // continue regardless of error
    }
  };

  return { liked, toggle };
}
