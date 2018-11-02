import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints, Colors } from '../../styles';

export interface IInfoSeparatorProps {
  className?: string;
}

function InfoSeparator(props: IInfoSeparatorProps) {
  const { className } = props;

  return <div className={className} />;
}

export default styled(InfoSeparator)`
  background-color: ${Colors.WHITE};
  height: 4px;
  width: 90%;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) and (max-width: ${Breakpoints.DESKTOP_WIDTH}) {
    height: 80%;
    width: 4px;
    align-self: center;
  }
`;
