import { IBoardList } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/rootReducer';
import {
  moveTask,
  setDraggeditem,
  toggleDisable
} from '../../../../store/actions/actions';
import { DragItem } from '../../../../context/DragItem';

export const useColumnTask = () => {
  const dispatch = useDispatch();

  const board: IBoardList[] = useSelector(
    (state: RootState) => state.boardList?.boardList
  );

  const isDisable: boolean = useSelector(
    (state: RootState) => state.disableDnd.disable
  );

  const onSetToggle = () => dispatch(toggleDisable());

  const onSetDraggedItem: (
    boardId: string,
    Drag: DragItem | undefined
  ) => void = (boardId, Drag) => dispatch(setDraggeditem({ boardId, Drag }));

  const onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => void = (dragIndex, hoverIndex, sourceColumn, targetColumn, boardId) =>
    dispatch(
      moveTask({ dragIndex, hoverIndex, sourceColumn, targetColumn, boardId })
    );

  return {
    board,
    isDisable,
    onSetDraggedItem,
    onSetToggle,
    onMoveTask
  };
};
