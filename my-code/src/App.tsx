import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Detail from './components/detail/detail';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/movie/:id'><Detail /></Route>
        <Route path='/'><Home /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
