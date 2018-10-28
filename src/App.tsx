import * as React from 'react';
import styled from 'styled-components';

import NavBar, { INavBarLink } from './components/navbar';
import { Breakpoints, Colors } from './styles';

const AppContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: ${Breakpoints.FULL_WIDTH}) {
    display: grid;
    grid-template-columns: auto 18rem;
    grid-template-rows: 6rem auto;
    grid-template-areas:
      'navbar navbar'
      'content infobar';
  }
`;

const ContentStub = styled.div`
  min-height: 30rem;

  @media (min-width: ${Breakpoints.FULL_WIDTH}) {
    grid-area: content;
  }
`;

const InfoBarStub = styled.div`
  min-height: 10rem;
  background-color: ${Colors.SECONDARY};

  @media (min-width: ${Breakpoints.FULL_WIDTH}) {
    grid-area: infobar;
  }
`;

// TODO: Move this to a JSON or something easy to modify.
const navLinks: INavBarLink[] = [
  {
    displayName: 'Twitch.tv',
    targetUrl: 'https://www.twitch.tv/weegee101',
  },
  {
    displayName: 'Extra Life',
    targetUrl: 'https://www.extra-life.org/',
  },
];

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <NavBar links={navLinks} />
        <InfoBarStub />
        <ContentStub />
      </AppContainer>
    );
  }
}

export default App;
