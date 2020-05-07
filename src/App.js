import React, { Component } from 'react';
import './App.css';
import Title from './styles/styled-banner';

const logoUri = 'https://civileats.com/wp-content/uploads/2016/03/jgold1.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Title>Jonathan Gold's</Title>
          <h3>101 Best resturants</h3>
          <img src={logoUri} />
        </div>
      </div>
    );
  }
}

export default App;
