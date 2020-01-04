export default function LikesReducer(state = [], action) {
  switch (action.type) {
    case 'SET_LIKE':
      const index = state.indexOf(action.imdbID);
      if (index === 0) {
        state = state.slice(1);
      } else if (index > 0) {
        state.splice(index, 1);
      } else {
        state = [...state, action.imdbID];
      }
      return state;
    default:
      return state;
  }
}
