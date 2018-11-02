import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints } from 'src/styles';
import GoalProgress from '../goal-progress';
import InfoHeader from '../info-header';

export interface IProgressCounter {
  className?: string;
  current: number;
  goal: number;
}

function ProgressCounter(props: IProgressCounter) {
  const { className, goal, current } = props;

  return (
    <div className={className}>
      <InfoHeader>Amount Raised</InfoHeader>
      <GoalProgress current={current} goal={goal} />
    </div>
  );
}

export default styled(ProgressCounter)`
  @media (min-width: ${Breakpoints.TABLET_WIDTH}) and (max-width: ${Breakpoints.DESKTOP_WIDTH}) {
    margin-left: 1rem;
  }
`;
