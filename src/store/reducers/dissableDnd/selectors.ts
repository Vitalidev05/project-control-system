import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const getDisableDnd = (state: RootState) => state.disableDnd;

export const selectDnd = createSelector(
  getDisableDnd,
  (state) => state?.disable
);
