import { combineReducers } from 'redux';

import boardList from './boardList/boardList';

import authorization from './authorization';
import disableDnd from './dissableDnd/disable-dnd';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  boardList: persistReducer(
    {
      key: 'boardList',
      storage
    },
    boardList
  ),
  authorization: persistReducer(
    {
      key: 'authorization',
      storage
    },
    authorization
  ),
  disableDnd: persistReducer(
    {
      key: 'disableDnd',
      storage
    },
    disableDnd
  )
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
export type { RootState };
