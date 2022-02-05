import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/detail/detail';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header />
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
