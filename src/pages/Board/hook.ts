import { IBoardList, IColumns } from '../../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';

export const useBoard = (boardID: string) => {
  const board: IBoardList[] = useSelector(
    (state: RootState) => state.boardList?.boardList
  );

  const boardList: IBoardList = board.filter(
    (x: IBoardList) => x.boardId === boardID
  )[0];
  const columns: IColumns[] = boardList.boardColumns;

  return { columns };
};
