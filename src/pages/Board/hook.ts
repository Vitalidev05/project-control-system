import { IColumns } from '../../constants';
import { useSelector } from 'react-redux';
import { selectBoardColumns } from '../../store/reducers/boardList/selectors';
import { useMemo } from 'react';

export const useBoard = (boardID: string) => {
  const memoizeSelectBoard = useMemo(
    () => selectBoardColumns(boardID),
    [boardID]
  );
  const columns: IColumns[] = useSelector(memoizeSelectBoard);

  return { columns };
};
