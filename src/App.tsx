import * as React from 'react';
import styled from 'styled-components';

import NavBar, { INavBarLink } from './components/navbar';
import DonationsContainer from './containers/donations';
import InfoBarContainer from './containers/info-bar';
import { Breakpoints } from './styles';

const AppContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: ${Breakpoints.DESKTOP_WIDTH}) {
    display: grid;
    grid-template-columns: auto 18rem;
    grid-template-rows: 6rem auto;
    grid-template-areas:
      'navbar navbar'
      'content infobar';
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
    targetUrl: 'https://www.extra-life.org/participant/weegee101',
  },
];

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <NavBar links={navLinks} />
        <InfoBarContainer />
        <DonationsContainer />
      </AppContainer>
    );
  }
}

export default App;
