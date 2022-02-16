import { combineReducers } from 'redux';

import boardList from './boardList';

import authorization from './authorization';
import disableDnd from './disable-dnd';

const rootReducer = combineReducers({
  boardList,
  authorization,
  disableDnd
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
export type { RootState };
