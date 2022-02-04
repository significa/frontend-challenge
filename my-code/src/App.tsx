import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/detail/detail';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/movie/:id' element={<Detail />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
