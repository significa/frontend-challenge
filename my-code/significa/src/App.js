import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
