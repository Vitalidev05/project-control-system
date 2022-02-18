import React, { memo } from 'react';
import { CardContainer } from '../../../../assets/stylesheets/styles';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CardMenuIcon } from '../../../icons';

import { TaskMenu as CardMenu } from '../TaskMenu';
import { useColumnTask } from './hook';
import { ColumnProps } from './types';

export const ColumnTask = memo(
  ({
    columnId,
    taskName,
    taskId,
    taskDate,
    taskIndex,
    taskText,
    boardId,
    isPreview
  }: ColumnProps) => {
    const { ref, toggle, showPopup, togglePopup, hide } = useColumnTask({
      boardId,
      columnId,
      taskId,
      taskName,
      taskIndex,
      isPreview
    });

    return (
      <CardContainer isPreview={isPreview} isHidden={hide} ref={ref}>
        {taskName}
        <CardMenuIcon className={'size_xs'} onClick={toggle} />
        {showPopup && (
          <CardMenu
            taskText={taskText}
            taskDate={taskDate}
            taskName={taskName}
            closePopup={togglePopup}
            taskId={taskId}
            columnId={columnId}
            boardId={boardId}
          />
        )}
      </CardContainer>
    );
  }
);
