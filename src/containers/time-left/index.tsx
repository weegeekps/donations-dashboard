import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import InfoHeader from 'src/components/info-header';
import { IAppState } from 'src/interfaces';
import { Colors, FontFamilies } from 'src/styles';

export interface ITimeLeftProps {
  className?: string;
  timeLeft: string;
}

const StyledTime = styled.div`
  color: ${Colors.WHITE};
  font-family: ${FontFamilies.FURORE};
  font-size: 3rem;
`;

function TimeLeftContainer(props: ITimeLeftProps) {
  const { className, timeLeft } = props;

  return (
    <div className={className}>
      <InfoHeader>Time Left</InfoHeader>
      <StyledTime>{timeLeft}</StyledTime>
    </div>
  );
}

function mapStateToProps(state: IAppState) {
  const {
    timer: {
      value: { timeLeftInterval },
    },
  } = state;

  const timeLeft = timeLeftInterval
    ? timeLeftInterval.toDuration(['hours', 'minutes', 'seconds']).toFormat('hh:mm:ss')
    : '';

  return {
    timeLeft,
  };
}

export default styled(connect(mapStateToProps)(TimeLeftContainer))`
  padding: 1.5rem;
  width: 14rem;
`;
