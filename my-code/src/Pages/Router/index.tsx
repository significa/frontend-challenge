import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { MovieDetails } from '../MovieDetails';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}