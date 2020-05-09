import React, { Component } from 'react';
import {
  StyledHero,
  Heading,
  Subheading2,
  Subheading3,
  Subheading4,
} from '../styles/styled-hero';

class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <Heading>Jonathan Gold's</Heading>
        <Subheading2>101</Subheading2>
        <Subheading3>BEST</Subheading3>
        <Subheading4>Restaurants</Subheading4>
      </StyledHero>
    );
  }
}

export default Hero;
