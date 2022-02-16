import { IBoardList } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/rootReducer';
import {
  deleteColumn,
  moveColumn,
  moveTask,
  setDraggeditem
} from '../../../../store/actions/actions';
import { DragItem } from '../../../../context/DragItem';

export const useColumn = () => {
  const dispatch = useDispatch();

  const board: IBoardList[] = useSelector(
    (state: RootState) => state.boardList?.boardList
  );

  const isDisable: boolean = useSelector(
    (state: RootState) => state.disableDnd.disable
  );

  const onDeleteColumn: (boardId: string, columnId: string) => void = (
    boardId,
    columnId
  ) => dispatch(deleteColumn({ boardId, columnId }));

  const onSetDraggedItem: (
    boardId: string,
    Drag: DragItem | undefined
  ) => void = (boardId, Drag) => dispatch(setDraggeditem({ boardId, Drag }));

  const onMoveColumn: (
    dragIndex: number,
    hoverIndex: number,
    boardId: string
  ) => void = (dragIndex, hoverIndex, boardId) =>
    dispatch(moveColumn({ dragIndex, hoverIndex, boardId }));

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
    onDeleteColumn,
    onSetDraggedItem,
    onMoveColumn,
    onMoveTask
  };
};
