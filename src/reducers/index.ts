import { combineReducers } from 'redux';
import { IFailedDonationsAction, IRequestDonationsAction, ISuccessfulDonationsAction } from 'src/actions';
import { DonationActionTypes } from 'src/actions/types';

// TODO: Eventually these reducers should be moved to a file unique to their purpose. Ex. donations.js
type DonationActions = IRequestDonationsAction | ISuccessfulDonationsAction | IFailedDonationsAction;

function donations(
  state = {
    donations: [],
    isFetching: false,
  },
  action: DonationActions
) {
  switch (action.type) {
    case DonationActionTypes.DONATIONS_REQUESTED:
      return { ...state, isFetching: true };
    case DonationActionTypes.DONATIONS_SUCCESSFUL:
      return { ...state, donations: action.donations, isFetching: false };
    case DonationActionTypes.DONATIONS_FAILED:
      return { ...state, isFetching: false, lastError: action.error };
    default:
      return state;
  }
}

export default combineReducers({
  donations,
});
