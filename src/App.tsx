import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Intro = styled.p`
  font-size: large;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const LogoSpinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImg = styled.img`
  animation: ${LogoSpinKeyframes} infinite 20s linear;
  height: 80px;
`;

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <Header>
          <LogoImg src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </Intro>
      </AppContainer>
    );
  }
}

export default App;
