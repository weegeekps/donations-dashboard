import { combineReducers } from 'redux';
import {
  IFailedDonationsAction,
  IFailedParticipantAction,
  IRequestDonationsAction,
  IRequestParticipantAction,
  ISuccessfulDonationsAction,
  ISuccessfulParticipantAction,
} from 'src/actions';
import { DonationActionTypes, ParticipantActionTypes } from 'src/actions/types';

// TODO: Eventually these reducers should be moved to a file unique to their purpose. Ex. donations.js
type DonationActions = IRequestDonationsAction | ISuccessfulDonationsAction | IFailedDonationsAction;

function donations(
  state = {
    isFetchingDonations: false,
    values: [],
  },
  action: DonationActions
) {
  switch (action.type) {
    case DonationActionTypes.DONATIONS_REQUESTED:
      return { ...state, isFetchingDonations: true };
    case DonationActionTypes.DONATIONS_SUCCESSFUL:
      return { ...state, values: action.donations, isFetchingDonations: false };
    case DonationActionTypes.DONATIONS_FAILED:
      return { ...state, isFetchingDonations: false, lastError: action.error };
    default:
      return state;
  }
}

type ParticipantActions = IRequestParticipantAction | ISuccessfulParticipantAction | IFailedParticipantAction;

function participant(
  state = {
    isFetching: false,
    value: {},
  },
  action: ParticipantActions
) {
  switch (action.type) {
    case ParticipantActionTypes.PARTICIPANT_REQUESTED:
      return { ...state, isFetching: true };
    case ParticipantActionTypes.PARTICIPANT_SUCCESSFUL:
      return { ...state, value: action.participant, isFetching: false };
    case ParticipantActionTypes.PARTICIPANT_FAILED:
      return { ...state, isFetching: false, lastError: action.error };
    default:
      return state;
  }
}

export default combineReducers({
  donations,
  participant,
});
