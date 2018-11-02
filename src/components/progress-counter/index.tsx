import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints } from 'src/styles';
import GoalProgress from '../goal-progress';
import InfoHeader from '../info-header';
import ProgressBar from '../progress-bar';

export interface IProgressCounterProps {
  className?: string;
  current: number;
  goal: number;
}

function ProgressCounter(props: IProgressCounterProps) {
  const { className, goal, current } = props;

  return (
    <div className={className}>
      <InfoHeader>Amount Raised</InfoHeader>
      <ProgressBar current={current} goal={goal} />
      <GoalProgress current={current} goal={goal} />
    </div>
  );
}

export default styled(ProgressCounter)`
  margin-top: 1.5rem;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) and (max-width: ${Breakpoints.DESKTOP_WIDTH}) {
    margin-left: 1.5rem;
  }
`;
