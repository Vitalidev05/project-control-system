import React, { memo } from 'react';
import {
  ColumnContainer,
  ColumnTitle
} from '../../../../assets/stylesheets/styles';
import { AddNewItem } from '../AddNewItem';
import { ColumnTask } from '../ColumnTask';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CrossIcon } from '../../../icons';
import { useColumn } from './hook';
import { ColumnProps } from './types';

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
        <CrossIcon className={'size_l'} onClick={deleteColumnFunc} />
        <ColumnTitle>{columnName}</ColumnTitle>
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
        <AddNewItem
          toggleButtonText="+add new task"
          functionName="addTask"
          columnId={columnId}
          boardId={boardId}
          dark
        />
      </ColumnContainer>
    );
  }
);
