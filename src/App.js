import React from 'react';
import './App.css';
import data from './Static-Page'; // Import the data constant

function App() {
  return (
    <div className="App">
      {data} {/* Render the data constant directly */}
    </div>
  );
}

export default App;
