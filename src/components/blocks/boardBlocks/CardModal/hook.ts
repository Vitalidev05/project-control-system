import { useCallback, useState } from 'react';
import { useActions } from '../../../../utils/useActions';

import { HookProps } from './types';

export const useCardModal = ({
  cardId,
  boardId,
  columnId,
  cardText,
  closePopup
}: HookProps) => {
  const { onChangeText, onSetToggle, onDeleteCard } = useActions();

  const [text, setText] = useState(cardText);

  const deleteCardFunc = useCallback(() => {
    onDeleteCard(cardId, boardId, columnId);
    closePopup();
    onSetToggle();
  }, [boardId, closePopup, columnId, onDeleteCard, onSetToggle, cardId]);

  const changeTextFunc = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.currentTarget.value);
    },
    []
  );

  const closePopupFunc = useCallback(() => {
    onChangeText(cardId, boardId, columnId, text);
    closePopup();
    onSetToggle();
  }, [boardId, closePopup, columnId, onChangeText, onSetToggle, cardId, text]);

  return {
    changeTextFunc,
    deleteCardFunc,
    closePopupFunc
  };
};
