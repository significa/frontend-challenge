import { combineReducers } from 'redux';

import movieReducer from './movie/reducer';
import likesReducer from './likes/reducer';

export default combineReducers({
  movieReducer,
  likesReducer,
});
