import { IDonation, IParticipant } from 'src/interfaces';
import { DonationActionTypes } from './types';

// TODO: These actions should eventually be moved into a file unique to their purpose. Ex. donations.js
export interface IRequestDonationsAction {
  readonly participant: IParticipant;
  readonly type: DonationActionTypes.DONATIONS_REQUESTED;
}

export function requestDonations(participant: IParticipant): IRequestDonationsAction {
  return {
    participant,
    type: DonationActionTypes.DONATIONS_REQUESTED,
  };
}

export interface ISuccessfulDonationsAction {
  readonly donations: IDonation[];
  readonly participant: IParticipant;
  readonly type: DonationActionTypes.DONATIONS_SUCCESSFUL;
}

export function successfulDonations(participant: IParticipant, donations: IDonation[]): ISuccessfulDonationsAction {
  return {
    donations,
    participant,
    type: DonationActionTypes.DONATIONS_SUCCESSFUL,
  };
}

export interface IFailedDonationsAction {
  readonly error: Error;
  readonly participant: IParticipant;
  readonly type: DonationActionTypes.DONATIONS_FAILED;
}

export function failedDonations(participant: IParticipant, error: Error): IFailedDonationsAction {
  return {
    error,
    participant,
    type: DonationActionTypes.DONATIONS_FAILED,
  };
}
