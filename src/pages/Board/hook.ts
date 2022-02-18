import { IColumns } from '../../constants';
import { useSelector } from 'react-redux';
import { selectBoardColumns } from '../../store/reducers/boardList/selectors';

export const useBoard = (boardID: string) => {
  const columns: IColumns[] = useSelector(selectBoardColumns(boardID));

  return { columns };
};
