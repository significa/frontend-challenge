import { combineReducers } from 'redux';

import MovieCatalogueReducer from './reducerMovieCatalogue';
import ChosenMovieReducer from './reducerChosenMovie';

const rootReducer = combineReducers({
  movieCatalogue: MovieCatalogueReducer,
  chosenMovie: ChosenMovieReducer
});

export default rootReducer;
