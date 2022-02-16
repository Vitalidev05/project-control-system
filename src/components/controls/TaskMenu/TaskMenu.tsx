import React, { useState } from 'react';

import './TaskMenu.scss';

interface CardMenuProps {
  taskDate?: Date;
  taskName: string;
  taskText: string;
  closePopup: () => void;
  taskId: string;
  columnId: string;
  boardId: string;
}

export const TaskMenu: React.FC<CardMenuProps> = (props: CardMenuProps) => {
  const [text, setText] = useState(props.taskText);

  const onDeleteCard: (...props: any) => void = () => {
    return;
  };
  const closePopup: (...props: any) => void = () => {
    return;
  };
  const onSetToggle: (...props: any) => void = () => {
    return;
  };
  const onChangeText: (...props: any) => void = () => {
    return;
  };

  const deleteCardFunc = () => {
    onDeleteCard(props.taskId, props.boardId, props.columnId);
    closePopup();
    onSetToggle();
  };

  const changeTextFunc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  const closePopupFunc = () => {
    onChangeText(props.taskId, props.boardId, props.columnId, text);
    closePopup();
    onSetToggle();
  };

  return (
    <div className={'popup'}>
      <div className={'card__menu_visible'}>
        <h3 className={'card__name'}>
          Current task:
          {props.taskName}
        </h3>
        <div>
          <h3>Description: </h3>
          <textarea
            className={'card__description'}
            placeholder="Card Description"
            defaultValue={props.taskText}
            onChange={changeTextFunc}
          />
        </div>
        <div className={'card__date'}>
          <h4>Date: </h4>
          <span>{(props.taskDate || '').toString()}</span>
        </div>
        <div className={'card__buttons'}>
          <button
            type="button"
            className={'card__button'}
            onClick={deleteCardFunc}
          >
            Delete card
          </button>
          <button
            type="button"
            className={'card__button'}
            onClick={closePopupFunc}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
