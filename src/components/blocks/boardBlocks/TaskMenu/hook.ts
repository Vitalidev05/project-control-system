import {
  changeText,
  deleteTask,
  toggleDisable
} from '../../../../store/actions/actions';
import { useDispatch } from 'react-redux';

export const useTaskMenu = () => {
  const dispatch = useDispatch();

  const onDeleteCard: (
    taskId: string,
    boardId: string,
    columnId: string
  ) => void = (taskId, boardId, columnId) =>
    dispatch(deleteTask({ taskId, boardId, columnId }));

  const onSetToggle: () => void = () => dispatch(toggleDisable());

  const onChangeText: (
    taskId: string,
    boardId: string,
    columnId: string,
    text: string
  ) => void = (taskId, boardId, columnId, text) =>
    dispatch(changeText({ taskId, boardId, columnId, text }));

  return {
    onDeleteCard,
    onChangeText,
    onSetToggle
  };
};
