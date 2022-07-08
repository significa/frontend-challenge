import { BrowserRouter } from "react-router-dom"
import { MoviesDataProvider } from "./Contexts/MoviesData"
import { Router } from "./Pages/Router"

function App() {

  return (
    <BrowserRouter>
      <MoviesDataProvider>
        <Router />
      </MoviesDataProvider>
    </BrowserRouter>
  )
}

export default App
