import { useCallback, useState } from 'react';
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

  const deleteCardFunc = useCallback(() => {
    onDeleteCard(taskId, boardId, columnId);
    closePopup();
    onSetToggle();
  }, [boardId, closePopup, columnId, onDeleteCard, onSetToggle, taskId]);

  const changeTextFunc = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.currentTarget.value);
    },
    []
  );

  const closePopupFunc = useCallback(() => {
    onChangeText(taskId, boardId, columnId, text);
    closePopup();
    onSetToggle();
  }, [boardId, closePopup, columnId, onChangeText, onSetToggle, taskId, text]);

  return {
    changeTextFunc,
    deleteCardFunc,
    closePopupFunc
  };
};
