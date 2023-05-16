import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Moviepage from './pages/Movie'

function App() {
  return (
    <div className='container-grid'>
      <h1>teste</h1>
      <h2>teste</h2>
      <h3>teste</h3>
      <h4>teste</h4>
      <h5>teste</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas. Quod totam odit necessitatibus earum omnis beatae voluptates. Similique nam veritatis fuga architecto, deleniti alias officia in ratione temporibus molestiae sit facere delectus assumenda quas, neque dicta necessitatibus eveniet adipisci nulla distinctio quod magni. Dignissimos illum accusamus sequi repellat quasi.</p>
      <Router>
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/movie" element={<Moviepage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
