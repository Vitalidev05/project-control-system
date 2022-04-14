import React, { memo } from 'react';
import { DragPreviewContainer } from '../../../../assets/stylesheets/styles';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { TaskMenu as CardMenu } from '../TaskMenu';
import { useColumnTask } from './hook';
import { ColumnProps } from './types';
import greyLines from '../../../../assets/images/gray_line.png';

import { CardContainer } from '../../../controls/CardContainer';
import { Box, IconButton, Typography } from '@mui/material';
import { TaskPriorityIndicator } from '../../../controls/TaskPriorityIndicator';
import { theme } from '../../../../theme';
import NotesIcon from '@mui/icons-material/Notes';
import { AddUser } from '../../../controls/AddUser';

export const ColumnTask = memo(
  ({
    columnId,
    taskName,
    taskId,
    taskDate,
    taskIndex,
    taskText,
    boardId,
    isPreview,
    taskPriority
  }: ColumnProps) => {
    const { ref, toggle, showPopup, togglePopup, hide } = useColumnTask({
      boardId,
      columnId,
      taskId,
      taskName,
      taskIndex,
      isPreview,
      taskPriority
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
            <Box sx={{ pl: 1 }}>
              <TaskPriorityIndicator variant={taskPriority} />
            </Box>
            <Typography sx={{ color: theme.palette.grey[900], pl: 1 }}>
              {taskName}
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                mt: 1
              }}
            >
              <IconButton>
                <NotesIcon
                  onClick={toggle}
                  sx={{ color: theme.palette.grey[400] }}
                />
              </IconButton>
              <Box sx={{ py: 1, display: 'flex', gap: 0.5 }}>
                <AddUser variant="new" />
              </Box>
            </Box>

            {showPopup && (
              <CardMenu
                handleCloseModal={togglePopup}
                openModal={showPopup}
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
