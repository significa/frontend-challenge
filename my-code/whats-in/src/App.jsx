import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Moviepage from './pages/Movie'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
          <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route path="/movie" element={<Moviepage />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
