import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from "./views/HomePage";
import MovieDetail from "./views/MovieDetail";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:movieID" element={<MovieDetail />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
