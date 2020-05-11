import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport] = useState({
    latitude: 34.052235,
    longitiude: -118.243683,
    zoom: 5,
    width: '100vw',
    height: '100vh',
  });

  return (
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  >
      marker here
    </ReactMapGL>
  );
}