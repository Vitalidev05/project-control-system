import React, { memo } from 'react';
import {
  ColumnTitle,
  ColumnContainer
} from '../../../../assets/stylesheets/styles';
import { AddNewItem } from '../AddNewItem';
import { ColumnTask } from '../ColumnTask';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CrossIcon } from '../../../icons';
import { useColumn } from './hook';
import { ColumnProps } from './types';
import { DropPlace } from '../../../controls/DropPlace';
import { Box } from '@mui/material';

export const BoardColumn = memo(
  ({ columnName, columnId, index, boardId, isPreview }: ColumnProps) => {
    const { deleteColumnFunc, targetBoardColumn, ref, hide } = useColumn({
      index,
      columnId,
      columnName,
      boardId,
      isPreview
    });

    return (
      <ColumnContainer isPreview={isPreview} ref={ref} isHidden={hide}>
        {!hide && (
          <>
            <Box sx={{ py: 3, display: 'flex', alignItems: 'center' }}>
              <CrossIcon className={'size_l'} onClick={deleteColumnFunc} />
              <ColumnTitle>{columnName}</ColumnTitle>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxHeight: '420px',
                overflowY: 'auto'
              }}
            >
              {targetBoardColumn?.columnTasks.map((task, index) => (
                <ColumnTask
                  taskDate={task.taskDate}
                  key={task.taskId}
                  taskName={task.taskName}
                  taskText={task.taskText}
                  taskIndex={index}
                  columnId={targetBoardColumn?.columnId}
                  taskId={task.taskId}
                  boardId={boardId}
                />
              ))}
            </Box>

            <Box sx={{ my: 2 }}>
              <AddNewItem
                toggleButtonText="Add card"
                functionName="addTask"
                columnId={columnId}
                boardId={boardId}
                dark
              />
            </Box>
          </>
        )}
        {hide && <DropPlace />}
      </ColumnContainer>
    );
  }
);
