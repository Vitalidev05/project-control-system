import { useActions } from '../../../../utils/useActions';
import { useCallback, useState } from 'react';

export const useAddNewItem = ({
  functionName,
  columnId,
  boardId
}: {
  functionName: string;
  boardId: string;
  columnId?: string;
}) => {
  const { onAddColumn, onAddTask } = useActions();

  const [showForm, setShowForm] = useState(false);
  const onAdd = useCallback(
    (itemText: string) => {
      {
        functionName === 'addColumn'
          ? onAddColumn(itemText, boardId)
          : onAddTask(itemText, boardId, columnId || '1');
      }
      setShowForm(false);
    },
    [boardId, columnId, functionName, onAddColumn, onAddTask]
  );

  const handleClose = useCallback(() => setShowForm(false), []);
  return { showForm, setShowForm, onAdd, handleClose };
};
