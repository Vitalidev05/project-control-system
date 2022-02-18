import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const getBoardList = (state: RootState) => state.boardList;

export const selectBoardList = createSelector(
  getBoardList,
  (state) => state?.boardList
);

export const selectBoard = (selectBoardId: string) => {
  console.log('select board');
  return createSelector(selectBoardList, (state) => {
    return state.find(({ boardId }) => boardId === selectBoardId);
  });
}; // todo memoize

export const selectBoardColumns = (selectBoardId: string) => {
  return createSelector(
    selectBoard(selectBoardId),
    (state) => state?.boardColumns || []
  );
}; // todo memoize
