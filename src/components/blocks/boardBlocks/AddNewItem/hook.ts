import { useActions } from '../../../../utils/useActions';
import { useState } from 'react';

export const useAddNewItem = () => {
  const { onAddColumn, onAddTask } = useActions();

  const [showForm, setShowForm] = useState(false);
  return { showForm, onAddTask, onAddColumn, setShowForm };
};
