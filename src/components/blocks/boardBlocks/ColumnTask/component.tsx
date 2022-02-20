import React, { memo } from 'react';
import { DragPreviewContainer } from '../../../../assets/stylesheets/styles';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CardMenuIcon } from '../../../icons';

import { TaskMenu as CardMenu } from '../TaskMenu';
import { useColumnTask } from './hook';
import { ColumnProps } from './types';
import { DropPlace } from '../../../controls/DropPlace';
import { CardContainer } from '../../../controls/CardContainer';
import { Box } from '@mui/material';

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
      <DragPreviewContainer isPreview={isPreview} ref={ref}>
        {hide && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'background.default',
              cursor: 'pointer',
              marginBottom: '0.5rem',
              padding: '0.5rem 1rem',
              height: '110px',
              maxWidth: '300px',
              borderRadius: 1,
              border: '1px solid lightgrey',
              boxShadow: '#091e4240 0px 1px 0px 0px'
            }}
          />
        )}

        {!hide && (
          <CardContainer>
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
        )}
      </DragPreviewContainer>
    );
  }
);
