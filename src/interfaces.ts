export interface IDonation {
  amount: number;
  donor: string;
  message: string;
  time: Date;
}

export interface IParticipant {
  name: string;
  participantId: string;
}
