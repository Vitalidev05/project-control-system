import React from 'react';

import './TaskMenu.scss';
import { useTaskMenu } from './hook';
import { CardMenuProps } from './types';

export const TaskMenu: React.FC<CardMenuProps> = ({
  taskId,
  taskText,
  columnId,
  taskName,
  taskDate,
  closePopup,
  boardId
}: CardMenuProps) => {
  const { closePopupFunc, deleteCardFunc, changeTextFunc } = useTaskMenu({
    taskId,
    taskText,
    columnId,
    boardId,
    closePopup
  });

  return (
    <div className={'popup'}>
      <div className={'card__menu_visible'}>
        <h3 className={'card__name'}>
          Current task:
          {taskName}
        </h3>
        <div>
          <h3>Description: </h3>
          <textarea
            className={'card__description'}
            placeholder="Card Description"
            defaultValue={taskText}
            onChange={changeTextFunc}
          />
        </div>
        <div className={'card__date'}>
          <h4>Date: </h4>
          <span>{(taskDate || '').toString()}</span>
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
