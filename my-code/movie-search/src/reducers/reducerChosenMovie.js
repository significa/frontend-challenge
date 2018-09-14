import { types } from '../actions';

export default function(state = {}, action) {
  const { type, payload } = action;

  switch(type) {
    case types.FETCH_MOVIE_COMPLETE:
      return payload.data
      
    default:
      return state;
  }
}
