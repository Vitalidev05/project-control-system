import { useState } from 'react';
import { useActions } from '../../../../utils/useActions';

import { HookProps } from './types';

export const useTaskMenu = ({
  taskId,
  boardId,
  columnId,
  taskText,
  closePopup
}: HookProps) => {
  const { onChangeText, onSetToggle, onDeleteCard } = useActions();

  const [text, setText] = useState(taskText);

  const deleteCardFunc = () => {
    onDeleteCard(taskId, boardId, columnId);
    closePopup();
    onSetToggle();
  };

  const changeTextFunc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  const closePopupFunc = () => {
    onChangeText(taskId, boardId, columnId, text);
    closePopup();
    onSetToggle();
  };

  return {
    changeTextFunc,
    deleteCardFunc,
    closePopupFunc
  };
};
