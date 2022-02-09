import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Detail from './components/detail/detail';
import Header from './components/header/header';
import Home from './components/home/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/movie/:id' element={<Detail />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
