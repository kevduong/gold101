import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import Restaurants from './components/Restaurants';
import Map from './components/Map';

class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <Hero></Hero>
      <Restaurants></Restaurants>
      <Map></Map>
    )
  }
}

export default App;