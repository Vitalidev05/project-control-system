import { useCallback, useState } from 'react';
import { useActions } from '../../../../utils/useActions';

import { HookProps } from './types';
import { useSelector } from 'react-redux';
import { Priority } from '../../../../constants';

export const useCardModal = ({
  cardId,
  boardId,
  columnId,
  cardText,
  closePopup,
  cardPriority,
  cardTitle,
  cardDate
}: HookProps) => {
  const {
    onChangeText,
    onSetToggle,
    onDeleteCard,
    onChangeCardTitle,
    onChangeCardPriority,
    onChangeCardDate
  } = useActions();

  const [text, setText] = useState(cardText);
  const [title, setTitle] = useState(cardTitle);
  const [priority, setPriority] = useState<Priority>(cardPriority);

  const changeTextFunc = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.currentTarget.value);
    },
    []
  );

  const changeTitleFunc = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(event.currentTarget.value);
    },
    []
  );

  // const changePriorityFunc = useCallback(
  //   (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setText(event.currentTarget.value);
  //   },
  //   []
  // );
  const deleteCardFunc = useCallback(() => {
    onDeleteCard(cardId, boardId, columnId);
    closePopup();
    onSetToggle();
  }, [boardId, closePopup, columnId, onDeleteCard, onSetToggle, cardId]);

  const closePopupFunc = useCallback(() => {
    closePopup();
  }, [closePopup]);

  const submit = useCallback(() => {
    onChangeText(cardId, boardId, columnId, text);
    onChangeCardTitle({ cardTitle: title, cardId, boardId, columnId });
    onChangeCardPriority({
      cardId,
      cardPriority: priority,
      columnId,
      boardId
    });
    closePopup();
    onSetToggle();
  }, [
    onChangeText,
    cardId,
    boardId,
    columnId,
    text,
    onChangeCardTitle,
    title,
    onChangeCardPriority,
    priority,
    closePopup,
    onSetToggle
  ]);

  return {
    submit,
    changeTextFunc,
    deleteCardFunc,
    closePopupFunc,
    title,
    priority,
    changeTitleFunc,
    setPriority,
    text
  };
};
