import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IAppState, IDonation } from 'src/interfaces';
import { Breakpoints } from 'src/styles';
import DonationCard from '../../components/donation-card';

export interface IDonationContainerProps {
  className?: string;
  donations: IDonation[];
}

function DonationContainer(props: IDonationContainerProps) {
  const { className, donations } = props;

  return (
    <div className={className}>
      {donations.map(d => (
        // TODO: Need to come up with a better key here. This can have collisions.
        <DonationCard key={d.createdDateUTC} donation={d} />
      ))}
    </div>
  );
}

function mapStateToProps(state: IAppState): IDonationContainerProps {
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
    overflow: scroll;
  }
`;
