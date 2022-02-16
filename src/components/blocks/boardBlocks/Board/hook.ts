import { IBoardList } from '../../../../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/rootReducer';

export const useBoard = () => {
  const board: IBoardList[] = useSelector(
    (state: RootState) => state.boardList?.boardList
  );

  return { board };
};
