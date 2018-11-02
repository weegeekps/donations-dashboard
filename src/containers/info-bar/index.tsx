import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Breakpoints, Colors } from 'src/styles';
import ParticipantName from '../../components/participant-name';
import { IAppState, IParticipant } from '../../interfaces';

export interface IInfoBarContainerProps {
  className?: string;
  participant: IParticipant;
}

function InfoBarContainer(props: IInfoBarContainerProps) {
  const { className, participant } = props;

  return (
    <div className={className}>
      <ParticipantName name={participant.displayName} />
    </div>
  );
}

function mapStateToProps(state: IAppState): IInfoBarContainerProps {
  const {
    participant: { value: participant },
  } = state;

  return {
    participant,
  };
}

export default styled(connect(mapStateToProps)(InfoBarContainer))`
  background-color: ${Colors.SECONDARY};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  min-height: 10rem;

  @media (min-width: ${Breakpoints.DESKTOP_WIDTH}) {
    grid-area: infobar;
  }
`;