import { IDonation, IParticipant } from 'src/interfaces';
import { DonationActionTypes, ParticipantActionTypes } from './types';

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

export interface IRequestParticipantAction {
  readonly id: number;
  readonly type: ParticipantActionTypes.PARTICIPANT_REQUESTED;
}

export function requestParticipant(id: number): IRequestParticipantAction {
  return {
    id,
    type: ParticipantActionTypes.PARTICIPANT_REQUESTED,
  };
}

export interface ISuccessfulParticipantAction {
  readonly participant: IParticipant;
  readonly type: ParticipantActionTypes.PARTICIPANT_SUCCESSFUL;
}

export function successfulParticipant(participant: IParticipant): ISuccessfulParticipantAction {
  return {
    participant,
    type: ParticipantActionTypes.PARTICIPANT_SUCCESSFUL,
  };
}

export interface IFailedParticipantAction {
  readonly error: Error;
  readonly type: ParticipantActionTypes.PARTICIPANT_FAILED;
}

export function failedParticipant(error: Error): IFailedParticipantAction {
  return {
    error,
    type: ParticipantActionTypes.PARTICIPANT_FAILED,
  };
}
