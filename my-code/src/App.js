import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <div>Can i haz bacon</div>
        <input
          value={value}
          onChange={ev => setValue(ev.currentTarget.value)}
        />
        <button onClick={() => console.log(value)}>Click!</button>
      </header>
    </div>
  );
}

export default App;
