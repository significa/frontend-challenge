import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({
    movieReducer: store.getState().movieReducer,
    likesReducer: store.getState().likesReducer,
  });
});

export default store;
