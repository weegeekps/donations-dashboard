import * as React from 'react';
import styled from 'styled-components';

import { Colors } from './styles';

const AppContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 6rem 10rem auto;
  grid-template-areas:
    'navbar'
    'infobar'
    'content';

  @media (min-width: 50rem) {
    grid-template-columns: auto 18rem;
    grid-template-rows: 6rem auto;
    grid-template-areas:
      'navbar navbar'
      'content infobar';
  }
`;

const NavBarStub = styled.div`
  background-color: ${Colors.PRIMARY};
  grid-area: navbar;
`;

const ContentStub = styled.div`
  grid-area: content;
`;

const InfoBarStub = styled.div`
  background-color: ${Colors.SECONDARY};
  grid-area: infobar;
`;

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <NavBarStub />
        <ContentStub />
        <InfoBarStub />
      </AppContainer>
    );
  }
}

export default App;
