import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IAppState, IDonation } from 'src/interfaces';
import { Breakpoints } from 'src/styles';

export interface IDonationContainerProps {
  className?: string;
  donations: IDonation[];
}

function DonationContainer(props: IDonationContainerProps) {
  const { className, donations } = props;

  return (
    <div className={className}>
      {donations.map(d => (
        <p>{d.displayName}</p>
      ))}
    </div>
  );
}

function mapStateToProps(state: IAppState) {
  const {
    donations: { values: donations },
  } = state;

  return {
    donations,
  };
}

export default styled(connect(mapStateToProps)(DonationContainer))`
  @media (min-width: ${Breakpoints.DESKTOP_WIDTH}) {
    grid-area: content;
  }
`;
