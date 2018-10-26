import * as fetch from 'isomorphic-fetch';
import { call, fork, put, take } from 'redux-saga/effects';

import { DonationActionTypes, ParticipantActionTypes } from 'src/actions/types';
import { IParticipant } from 'src/interfaces';
import * as actions from '../actions';

export function fetchDonationsApi(participant: IParticipant) {
  const url = `https://www.extra-life.org/api/participants/${participant.participantID}/donations`;

  return fetch(url)
    .then(res => res.json())
    .catch(err => err);
}

export function* fetchDonations(participant: IParticipant) {
  try {
    const donations = yield call(fetchDonationsApi, participant);
    yield put(actions.successfulDonations(participant, donations));
  } catch (err) {
    yield put(actions.failedDonations(participant, err));
  }
}

export function* updateDonations() {
  while (true) {
    const { participant } = yield take(DonationActionTypes.DONATIONS_REQUESTED);
    yield call(fetchDonations, participant);
  }
}

export function fetchParticipantApi(id: number) {
  const url = `https://www.extra-life.org/api/participants/${id}`;

  return fetch(url)
    .then(res => res.json())
    .catch(err => err);
}

export function* fetchParticipant(id: number) {
  try {
    const participant = yield call(fetchParticipantApi, id);
    yield put(actions.successfulParticipant(participant));
  } catch (err) {
    yield put(actions.failedParticipant(err));
  }
}

export function* updateParticipant() {
  while (true) {
    const { id } = yield take(ParticipantActionTypes.PARTICIPANT_REQUESTED);
    yield call(fetchParticipant, id);
  }
}

export function* startup() {
  yield put({ type: ParticipantActionTypes.PARTICIPANT_REQUESTED, id: 328557 });
}

export default function* root() {
  yield fork(startup);
  yield fork(updateParticipant);
  yield fork(updateDonations);
}
