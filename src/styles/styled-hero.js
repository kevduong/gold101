import styled from 'styled-components';

export const Hero = styled.div`
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
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  color: white;
  font: 700 60px 'Playfair Display', serif;
`;
