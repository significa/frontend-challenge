import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Homepage from './pages/Homepage'
import Moviepage from './pages/Movie'
import Header from './components/Header'

function App() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState()
  const [selectedMovie, setSelectedMovie] = useState(null)
  const navigate = useNavigate()

  const handleSearch = (text) => {
    setSearchText(text)
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=22d53272`)
    .then(response => response.json())
    .then(data => setMovies(data.Search))
    .catch(error => {
        console.error(error);
    })
  }, [searchText])

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie)
    navigate('/movie');
  }

  return (
    <div className='container'>
      <Header />
        <Routes>
            <Route exact path="/" element={<Homepage handleSearch={handleSearch} movies={movies} handleMovieSelection={handleMovieSelection}/>}/>
            <Route path="/movie" element={<Moviepage movie={selectedMovie} />}/>
        </Routes>
    </div>
  );
}

export default App;
