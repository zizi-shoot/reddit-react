import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { IRootState } from '../types';

type TThunkAction = ThunkAction<void, IRootState, unknown, Action<string>>;
export { TThunkAction };
