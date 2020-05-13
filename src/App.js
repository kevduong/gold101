import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import Restaurants from './components/Restaurants';
import Map from './components/Map';

class App extends Component {
  render () {
    return (
      <div>
        <Hero></Hero>
        <Restaurants></Restaurants>
        <Map></Map>
      </div>
    );
  }
}

export default App;