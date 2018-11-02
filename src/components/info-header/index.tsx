import * as React from 'react';
import styled from 'styled-components';

import { Colors, FontFamilies } from '../../styles';

export interface IInfoHeader {
  className?: string;
  children: any;
}

function InfoHeader(props: IInfoHeader) {
  const { className, children } = props;

  return <h3 className={className}>{children}</h3>;
}

export default styled(InfoHeader)`
  color: ${Colors.HIGHLIGHT};
  font-family: ${FontFamilies.FURORE};
  font-size: 1.5rem;
`;
