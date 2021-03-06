import * as fetch from 'isomorphic-fetch';
import { DateTime, Interval } from 'luxon';
import { delay } from 'redux-saga';
import { call, fork, put, select, take } from 'redux-saga/effects';

import { DonationActionTypes, ParticipantActionTypes } from 'src/actions/types';
import { IParticipant, ITimer } from 'src/interfaces';
import * as actions from '../actions';
import * as selectors from '../selectors';

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

export function* startTimer() {
  const timer: ITimer = {
    endTime: DateTime.fromISO('2018-11-04T09:00:00-06:00'),
    startTime: DateTime.local(),
  };

  yield put(actions.startTimer(timer));
  yield call(tickTimer);
}

export function* tickTimer() {
  while (true) {
    const isRunning = yield select(selectors.isTimerRunning);

    if (isRunning) {
      const currentTimerState: ITimer = yield select(selectors.timerValue);
      const newTimerState: ITimer = {
        ...currentTimerState,
        timeLeftInterval: Interval.fromDateTimes(DateTime.local(), currentTimerState.endTime),
      };

      yield put(actions.tickTimer(newTimerState));
      yield delay(1000); // Under the covers this does a setTimeout.
    }
  }
}

export function* startup() {
  yield put({ type: ParticipantActionTypes.PARTICIPANT_REQUESTED, id: 328557 });
  const { participant } = yield take(ParticipantActionTypes.PARTICIPANT_SUCCESSFUL);
  yield put({ type: DonationActionTypes.DONATIONS_REQUESTED, participant });
}

export default function* root() {
  yield fork(startup);
  yield fork(updateParticipant);
  yield fork(updateDonations);
  yield fork(startTimer);
  yield fork(tickTimer);
}
