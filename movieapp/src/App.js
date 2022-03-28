import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
import Homepage from './Homepage';
import SingleMovie from './components/SingleMovie';



function App() {
 
 
  
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route exact path='/movie:imdbID' element={<SingleMovie />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
