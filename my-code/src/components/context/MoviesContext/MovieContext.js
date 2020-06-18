import React from 'react';

type MoviesProviderProps = {
  children: React.Node
};

const MoviesContext = React.createContext([]);

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'UNLIKE': {
      return state.filter((movieId) => movieId !== action.payload.id);
    }
    case 'LIKE': {
      return [...state, action.payload.id];
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const MoviesProvider = (props: MoviesProviderProps) => {
  const { children } = props;
  const [state, dispatch] = React.useReducer(moviesReducer, []);
  return <MoviesContext.Provider value={{ state, dispatch }}>{children}</MoviesContext.Provider>;
};

export const useMoviesState = () => {
  const context = React.useContext(MoviesContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};
