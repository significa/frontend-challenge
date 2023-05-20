import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Homepage from './pages/Homepage'
import Moviepage from './pages/Movie'
import Header from './components/Header'

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState()
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [selectedMovieInfo, setSelectedMovieInfo] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [likedMovies, setLikedMovies] = useState([]);
  const navigate = useNavigate()

  const handleSearch = (text) => {
    setSearchText(text)
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => setMovies(data.Search))
    .catch(error => {
        console.error(error);
    })
  }, [searchText])

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie)
  }

  useEffect(() => {
    if (selectedMovie && selectedMovie.imdbID) {
      setIsLoading(true)
      fetch(`https://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setSelectedMovieInfo(data)
          navigate('/movie')
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [selectedMovie]);

  const handleLike = (movie) => {
    setLikedMovies((prevMovies) => [...prevMovies, movie])
  }

  const isMovieLiked = (movie) => {
      return likedMovies.find((likedMovie) => likedMovie.imdbID === movie.imdbID) || false;
  };

  return (
    <div className='container'>
      <Header />
        <Routes>
            <Route exact path="/" element={<Homepage handleSearch={handleSearch} movies={movies} handleMovieSelection={handleMovieSelection} isLoading={isLoading} handleLike={handleLike} isMovieLiked={isMovieLiked} />}/>
            <Route path="/movie" element={<Moviepage movie={selectedMovieInfo} isMovieLiked={isMovieLiked} likedMovies={likedMovies} handleLike={handleLike}/>}/>
        </Routes>
    </div>
  );
}

export default App;
