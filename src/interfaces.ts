import { DateTime, Interval } from 'luxon';

export interface IDonation {
  amount: number;
  avatarImageURL: string;
  createdDateUTC: string;
  displayName: string;
  donorID: string;
  message: string | null;
  participantID: number;
}

export interface IParticipant {
  avatarImageURL: string;
  createdDateUTC: string; // TODO: Munge this into a moment.
  displayName: string;
  eventID: number;
  eventName: string;
  fundraisingGoal: number;
  participantID: number;
  numDonations: number;
  sumDonations: number;
  sumPledges: number;
}

export interface ITimer {
  startTime: DateTime;
  endTime: DateTime;
  timeLeftInterval?: Interval;
}

export interface IAppState {
  donations: {
    isFetching: boolean;
    values: IDonation[];
  };
  participant: {
    isFetching: boolean;
    value: IParticipant;
  };
  timer: {
    isRunning: boolean;
    value: ITimer;
  };
}
