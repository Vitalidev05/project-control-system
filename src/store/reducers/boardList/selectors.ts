import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const getBoardList = (state: RootState) => state.boardList;

export const selectBoardList = createSelector(
  getBoardList,
  (state) => state?.boardList
);

export const selectCurrentBoardId = createSelector(
  getBoardList,
  (state) => state.currentBoardId
);

export const selectBoard = createSelector(
  selectBoardList,
  selectCurrentBoardId,
  (state, currentBoardId) => {
    return state.find(({ boardId }) => boardId === currentBoardId);
  }
);

export const selectBoardColumns = createSelector(
  selectBoard,
  (state) => state?.boardColumns || []
);

export const selectDraggedItem = createSelector(
  selectBoard,
  (state) => state?.draggedItem
);
