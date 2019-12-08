export default function LikesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_LIKES':
      let lsLikes = localStorage.getItem('likes');
      if (lsLikes) {
        lsLikes = JSON.parse(lsLikes);
      } else {
        lsLikes = [];
      }
      return lsLikes;
    case 'ADD_LIKE':
      const index = state.indexOf(action.imdbID);
      console.log(index);
      if (index === 0) {
        state = state.slice(1);
      } else if (index > 0) {
        state.splice(index, 1);
      } else {
        state = [...state, action.imdbID];
      }

      localStorage.setItem('likes', JSON.stringify(state));

      return state;
    default:
      return state;
  }
}