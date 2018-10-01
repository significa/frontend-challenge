import { addToArray, removeFromArray } from '../../utils/immutable-helpers'

const TOGGLE_FAVORITE = 'whats-in/favorites/TOGGLE'

export default function reducer(state = [], action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return action.payload.value
        ? addToArray(state, action.payload.id)
        : removeFromArray(state, action.payload.id)
    default:
      return state
  }
}

export function toggleFavorite(id, value) {
  return {
    type: TOGGLE_FAVORITE,
    payload: { id, value }
  }
}

export function getIsFavorite(favorites, id) {
  return favorites.includes(id)
}
