import { IDonation, IParticipant, ITimer } from 'src/interfaces';
import { DonationActionTypes, ParticipantActionTypes, TimerActionTypes } from './types';

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

export interface IStartTimerAction {
  readonly timer: ITimer;
  readonly type: TimerActionTypes.TIMER_START;
}

export function startTimer(timer: ITimer): IStartTimerAction {
  return {
    timer,
    type: TimerActionTypes.TIMER_START,
  };
}

export interface ITickTimerAction {
  readonly timer: ITimer;
  readonly type: TimerActionTypes.TIMER_TICK;
}

export function tickTimer(timer: ITimer): ITickTimerAction {
  return {
    timer,
    type: TimerActionTypes.TIMER_TICK,
  };
}

export interface IEndTimerAction {
  readonly type: TimerActionTypes.TIMER_END;
}

export function endTimer(): IEndTimerAction {
  return {
    type: TimerActionTypes.TIMER_END,
  };
}
