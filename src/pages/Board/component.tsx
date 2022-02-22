import React, { memo } from 'react';

import { AddNewItem } from '../../components/blocks/boardBlocks/AddNewItem';
import { BoardColumn as Column } from '../../components/blocks/boardBlocks/Column';
import { CustomDragLayer } from '../../components/controls/CustomDragLayer';
import { IColumns } from '../../constants';
import { useBoard } from './hook';
import { BoardContainer } from '../../components/controls/BoardContainer';
import { Box } from '@mui/material';

export const Board = memo(() => {
  const { columns, boardID, boardName, boardColor } = useBoard();

  return (
    <BoardContainer boardName={boardName} boardColor={boardColor}>
      <CustomDragLayer />
      {columns.map((list: IColumns, index: number) => (
        <Column
          columnId={list.columnId}
          columnName={list.columnName}
          key={list.columnId}
          index={index}
          boardId={boardID}
        />
      ))}
      <Box sx={{ minWidth: 270 }}>
        <AddNewItem
          toggleButtonText="Add column"
          boardId={boardID}
          functionName="addColumn"
          variant="outlined"
        />
      </Box>
    </BoardContainer>
  );
});
