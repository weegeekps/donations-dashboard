import * as React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import * as actions from './actions';
import { IAppState, IParticipant } from './interfaces';

interface ITestButtonsProps {
  participant: IParticipant;
  requestDonations: (participant: IParticipant) => any;
}

const TestButtons = (props: ITestButtonsProps) => {
  // tslint:disable-next-line:no-shadowed-variable
  const { requestDonations, participant } = props;

  const clickRequest = () => requestDonations(participant);

  return (
    <>
      <button onClick={clickRequest}>Request Donations</button>
    </>
  );
};

const mapStateToProps = (state: IAppState) => {
  const {
    participant: { value: participant },
  } = state;

  return {
    participant,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      requestDonations: actions.requestDonations,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestButtons);
