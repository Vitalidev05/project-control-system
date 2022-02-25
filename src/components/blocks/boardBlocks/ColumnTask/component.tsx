import React, { memo } from 'react';
import { DragPreviewContainer } from '../../../../assets/stylesheets/styles';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CardMenuIcon } from '../../../icons';

import { TaskMenu as CardMenu } from '../TaskMenu';
import { useColumnTask } from './hook';
import { ColumnProps } from './types';
import greyLines from '../../../../assets/images/gray_line.png';

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
              height: '110px',
              width: '100%',
              maxWidth: '300px',
              borderRadius: 1,
              zIndex: 1,
              border: '1px solid lightgrey',
              background: `url(${greyLines}) 0 0 repeat`,
              backgroundSize: '80%',
              opacity: 0.4
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
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
