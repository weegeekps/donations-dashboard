import * as React from 'react';
import styled from 'styled-components';

import GoalProgress from '../goal-progress';
import InfoHeader from '../info-header';

export interface IProgressCounter {
  className?: string;
  fundraisingGoal: number;
  sumDonations: number;
}

function ProgressCounter(props: IProgressCounter) {
  const { className, fundraisingGoal, sumDonations } = props;

  return (
    <div className={className}>
      <InfoHeader>Amount Raised</InfoHeader>
      <GoalProgress current={sumDonations} goal={fundraisingGoal} />
    </div>
  );
}

export default styled(ProgressCounter)``;
