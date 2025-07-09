import React from 'react';
import Map from './Map';
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className='header-card'>
        <h2>My Location Tracker</h2>
        <p>This map shows your real-time location. Move around to see</p>
      </div>
      <Map />
    </div>
  );
}

export default App;
