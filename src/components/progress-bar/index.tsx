import { darken } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import { Colors } from 'src/styles';

export interface IProgressBarProps {
  className?: string;
  current: number;
  goal: number;
}

interface IInnerBarProps {
  progress: number;
}

const InnerBar = styled.span<IInnerBarProps>`
  background-color: ${Colors.LIGHT_BLUE};
  background-image: repeating-linear-gradient(
    -45deg,
    ${Colors.LIGHT_BLUE},
    ${Colors.LIGHT_BLUE} 20px,
    ${darken(0.05, Colors.LIGHT_BLUE)} 20px,
    ${darken(0.05, Colors.LIGHT_BLUE)} 40px
  );
  border-radius: 20px;
  display: block;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: ${p => p.progress}%;
`;

function ProgressBar(props: IProgressBarProps) {
  const { className, current, goal } = props;

  const progress = Math.ceil((current / goal) * 100);

  return (
    <div className={className}>
      <InnerBar progress={Math.min(progress, 100)} />
    </div>
  );
}

export default styled(ProgressBar)`
  background-color: ${Colors.WHITE};
  border-radius: 20px;
  height: 20px;
  margin-bottom: 1rem;
  position: relative;
`;
