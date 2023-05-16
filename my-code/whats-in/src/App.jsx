import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Moviepage from './pages/Movie'

function App() {
  return (
    <div className='container'>
      <div className='grid'>
        <div className='item'></div>
        <Router>
          <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route path="/movie" element={<Moviepage />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
