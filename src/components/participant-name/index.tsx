import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints, Colors, FontFamilies } from '../../styles';

export interface IParticipantNameProps {
  className?: string;
  name: string;
}

function ParticipantName(props: IParticipantNameProps) {
  const { className, name } = props;

  return <h2 className={className}>{name}</h2>;
}

export default styled(ParticipantName)`
  color: ${Colors.WHITE};
  font-family: ${FontFamilies.FURORE};

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    font-size: 3rem;
    margin-top: 1rem;
    max-width: 14rem;
  }
`;
