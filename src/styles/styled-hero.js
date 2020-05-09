import styled from 'styled-components';
import theme from './theme';

export const StyledHero = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('https://civileats.com/wp-content/uploads/2016/03/jgold1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  color: ${theme.primaryColor};
  font: 700 60px/1 ${theme.fontFamily};
  margin: 0px auto;
  grid-row: 1/4;
  grid-column: 1;
`;

export const Subheading2 = styled.h2`
  font: 700 320px/1 ${theme.fontFamily};
  color: ${theme.primaryColor};
  margin: 0 auto;
  grid-row: 2/5;
  grid-column: 1;
`;

export const Subheading3 = styled.h2`
  font: 700 175px/1 ${theme.fontFamily};
  color: ${theme.primaryColor};
  margin: 0 auto;
  grid-row: 4/6;
  grid-column: 1;
`;

export const Subheading4 = styled.h2`
  font: 700 55px/1 ${theme.fontFamily};
  text-transform: uppercase;
  color: ${theme.primaryColor};
  margin: 0 auto;
  grid-row: 5/6;
  grid-column: 1;
`;
