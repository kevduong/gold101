import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import ReactMapGL from 'react-map-gl';

export default function App() {
  const [viewport] = useState({
    latitude: 34.052235,
    longitiude: -118.243683,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  });

  return (
    <div className="App">
      <Hero></Hero>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}
