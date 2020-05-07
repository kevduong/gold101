import React, { Component } from 'react';
import './App.css';
import { Hero, Heading } from './styles/styled-hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero>
          <Heading>Jonathan Gold's 101 Best Resturants</Heading>
        </Hero>
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
