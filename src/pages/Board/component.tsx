import React, { memo } from 'react';

import { AppContainer } from '../../assets/stylesheets/styles';
import { AddNewItem } from '../../components/blocks/boardBlocks/AddNewItem';
import { BoardColumn as Column } from '../../components/blocks/boardBlocks/Column';
import { CustomDragLayer } from '../../components/controls/CustomDragLayer';
import { IColumns } from '../../constants';
import { useBoard } from './hook';

export const Board = memo(() => {
  const { columns, boardID } = useBoard();

  return (
    <AppContainer>
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
      <AddNewItem
        toggleButtonText="+add new list"
        boardId={boardID}
        functionName="addColumn"
      />
    </AppContainer>
  );
});
