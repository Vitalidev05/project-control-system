import { useDispatch } from 'react-redux';
import {
  addBoard,
  addColumn,
  addCard,
  changeColumnPriority,
  changeColumnTitle,
  changeText,
  deleteBoard,
  deleteColumn,
  deleteCard,
  moveColumn,
  moveCard,
  setCurrentBoard,
  setDraggeditem,
  toggleDisable
} from '../store/actions/actions';
import { DragItem } from '../context/DragItem';
import { useCallback } from 'react';
import { Priority } from '../constants';

export const useActions = () => {
  const dispatch = useDispatch();

  const changeColumnName: (
    columnId: string,
    title: string,
    boardId: string
  ) => void = useCallback(
    (columnId, title, boardId) =>
      dispatch(changeColumnTitle({ columnId, title, boardId })),
    [dispatch]
  );

  const editColumnPriority: (
    columnId: string,
    priority: Priority,
    boardId: string
  ) => void = useCallback(
    (columnId, priority, boardId) =>
      dispatch(changeColumnPriority({ priority, columnId, boardId })),
    [dispatch]
  );

  const setCurrentBoardId: (currentBoard: string | null) => void = useCallback(
    (currentBoard) => dispatch(setCurrentBoard(currentBoard)),
    [dispatch]
  );

  const onAddColumn: (
    str: string,
    boardId: string,
    priority?: Priority
  ) => void = useCallback(
    (str, boardId, priority) =>
      dispatch(addColumn({ text: str, boardId, priority })),
    [dispatch]
  );

  const onAddCard: (
    str: string,
    boardId: string,
    columnId: string,
    priority?: Priority
  ) => void = useCallback(
    (str, boardId, columnId, priority) =>
      dispatch(addCard({ text: str, boardId, columnId, priority })),
    [dispatch]
  );

  const onDeleteColumn: (boardId: string, columnId: string) => void =
    useCallback(
      (boardId, columnId) => dispatch(deleteColumn({ boardId, columnId })),
      [dispatch]
    );

  const onSetDraggedItem: (
    boardId: string,
    Drag: DragItem | undefined
  ) => void = useCallback(
    (boardId, Drag) => dispatch(setDraggeditem({ boardId, Drag })),
    [dispatch]
  );

  const onMoveColumn: (
    dragIndex: number,
    hoverIndex: number,
    boardId: string
  ) => void = useCallback(
    (dragIndex, hoverIndex, boardId) =>
      dispatch(moveColumn({ dragIndex, hoverIndex, boardId })),
    [dispatch]
  );

  const onMoveCard: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => void = useCallback(
    (dragIndex, hoverIndex, sourceColumn, targetColumn, boardId) =>
      dispatch(
        moveCard({ dragIndex, hoverIndex, sourceColumn, targetColumn, boardId })
      ),
    [dispatch]
  );

  const onSetToggle: () => void = useCallback(
    () => dispatch(toggleDisable()),
    [dispatch]
  );

  const onDeleteCard: (
    cardId: string,
    boardId: string,
    columnId: string
  ) => void = useCallback(
    (cardId, boardId, columnId) =>
      dispatch(deleteCard({ cardId, boardId, columnId })),
    [dispatch]
  );

  const onChangeText: (
    cardId: string,
    boardId: string,
    columnId: string,
    text: string
  ) => void = useCallback(
    (cardId, boardId, columnId, text) =>
      dispatch(changeText({ cardId, boardId, columnId, text })),
    [dispatch]
  );

  const onAddBoard: (boardName: string, boardColor: string) => void =
    useCallback(
      (boardName, boardColor) => dispatch(addBoard({ boardName, boardColor })),
      [dispatch]
    );

  const onDeleteBoard: (boardId: string) => void = useCallback(
    (boardId) => dispatch(deleteBoard({ boardId })),
    [dispatch]
  );

  return {
    onAddColumn,
    onAddCard,
    onSetDraggedItem,
    onMoveColumn,
    onMoveCard,
    onDeleteColumn,
    onSetToggle,
    onDeleteCard,
    onChangeText,
    onAddBoard,
    onDeleteBoard,
    setCurrentBoardId,
    changeColumnName,
    editColumnPriority
  };
};
