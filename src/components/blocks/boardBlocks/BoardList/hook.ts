import { IBoardList } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/rootReducer';
import { addBoard, deleteBoard } from '../../../../store/actions/actions';

export const useBoardList = () => {
  const dispatch = useDispatch();
  const boards: IBoardList[] = useSelector(
    (state: RootState) => state.boardList?.boardList
  );

  const onAddBoard: (boardName: string, boardColor: string) => void = (
    boardName,
    boardColor
  ) => dispatch(addBoard({ boardName, boardColor }));

  const onDeleteBoard: (boardId: string) => void = (boardId) =>
    dispatch(deleteBoard({ boardId }));

  return { boards, onAddBoard, onDeleteBoard };
};
