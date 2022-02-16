import { useDispatch } from 'react-redux';
import { addColumn, addTask } from '../../../../store/actions/actions';

export const useAddNewItem = () => {
  const dispatch = useDispatch();
  const onAddColumn: (str: string, boardId: string) => void = (str, boardId) =>
    dispatch(addColumn({ text: str, boardId }));

  const onAddTask: (str: string, boardId: string, columnId: string) => void = (
    str,
    boardId,
    columnId
  ) => dispatch(addTask({ text: str, boardId, columnId }));

  return { onAddColumn, onAddTask };
};
