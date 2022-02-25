import { useDispatch } from 'react-redux';
import {
  addBoard,
  addColumn,
  addTask,
  changeText,
  deleteBoard,
  deleteColumn,
  deleteTask,
  moveColumn,
  moveTask,
  setCurrentBoard,
  setDraggeditem,
  toggleDisable
} from '../store/actions/actions';
import { DragItem } from '../context/DragItem';
import { useCallback } from 'react';
import { Priority } from '../constants';

export const useActions = () => {
  const dispatch = useDispatch();

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

  const onAddTask: (
    str: string,
    boardId: string,
    columnId: string,
    priority?: Priority
  ) => void = useCallback(
    (str, boardId, columnId, priority) =>
      dispatch(addTask({ text: str, boardId, columnId, priority })),
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

  const onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => void = useCallback(
    (dragIndex, hoverIndex, sourceColumn, targetColumn, boardId) =>
      dispatch(
        moveTask({ dragIndex, hoverIndex, sourceColumn, targetColumn, boardId })
      ),
    [dispatch]
  );

  const onSetToggle: () => void = useCallback(
    () => dispatch(toggleDisable()),
    [dispatch]
  );

  const onDeleteCard: (
    taskId: string,
    boardId: string,
    columnId: string
  ) => void = useCallback(
    (taskId, boardId, columnId) =>
      dispatch(deleteTask({ taskId, boardId, columnId })),
    [dispatch]
  );

  const onChangeText: (
    taskId: string,
    boardId: string,
    columnId: string,
    text: string
  ) => void = useCallback(
    (taskId, boardId, columnId, text) =>
      dispatch(changeText({ taskId, boardId, columnId, text })),
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
    onAddTask,
    onSetDraggedItem,
    onMoveColumn,
    onMoveTask,
    onDeleteColumn,
    onSetToggle,
    onDeleteCard,
    onChangeText,
    onAddBoard,
    onDeleteBoard,
    setCurrentBoardId
  };
};
