import { IAppState, ITimer } from 'src/interfaces';

export const isTimerRunning = (state: IAppState) => state.timer.isRunning;

export const timerValue = (state: IAppState): ITimer => state.timer.value;
