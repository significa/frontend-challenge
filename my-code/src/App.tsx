import { BrowserRouter } from "react-router-dom"
import { MovieDetailsProvider } from "./Contexts/MovieDetails"
import { MoviesDataProvider } from "./Contexts/MoviesData"
import { Router } from "./Pages/Router"

function App() {

  return (
    <BrowserRouter>
      <MoviesDataProvider>
        <MovieDetailsProvider>
          <Router />
        </MovieDetailsProvider>
      </MoviesDataProvider>
    </BrowserRouter>
  )
}

export default App
