import React from 'react';

import { AppContainer } from '../../assets/stylesheets/styles';
import { AddNewItem } from '../../components/blocks/boardBlocks/AddNewItem';
import { BoardColumn as Column } from '../../components/blocks/boardBlocks/Column';
import { CustomDragLayer } from '../../components/controls/CustomDragLayer';
import { IColumns } from '../../constants';
import { useBoard } from './hook';
import { BoardProps } from './types';

export const Board = ({ boardID }: BoardProps) => {
  const { columns } = useBoard(boardID);

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
};
