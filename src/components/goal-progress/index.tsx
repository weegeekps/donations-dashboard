import * as React from 'react';
import styled from 'styled-components';

import { Colors, FontFamilies } from '../../styles';

export interface IGoalProgress {
  className?: string;
  current: number;
  goal: number;
}

function GoalProgress(props: IGoalProgress) {
  const { className, current, goal } = props;

  return (
    <div className={className}>
      ${current} / ${goal}
    </div>
  );
}

export default styled(GoalProgress)`
  color: ${Colors.WHITE};
  font-family: ${FontFamilies.FURORE};
  text-align: center;
`;
