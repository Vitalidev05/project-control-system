import React from 'react';

import { AppContainer } from '../../../../assets/stylesheets/styles';
import { AddNewItem } from '../AddNewItem';
// import style from '@/components/Board/Board.scss';
import { BoardColumn as Column } from '../Column';
import { CustomDragLayer } from '../../../containers/CustomDragLayer';
import { IBoardList, IColumns } from '../../../../constants';
import { useBoard } from './hook';

interface IBoardProps {
  boardID: string;
}

export const Board = (props: IBoardProps) => {
  const { board } = useBoard();

  console.log('board', board);

  const boardList: IBoardList = board.filter(
    (x: IBoardList) => x.boardId === props.boardID
  )[0];
  const columns: IColumns[] = boardList.boardColumns;
  return (
    <AppContainer>
      <CustomDragLayer />
      {columns.map((list: IColumns, index: number) => (
        <Column
          columnId={list.columnId}
          columnName={list.columnName}
          key={list.columnId}
          index={index}
          boardId={props.boardID}
        />
      ))}
      <AddNewItem
        toggleButtonText="+add new list"
        boardId={props.boardID}
        functionName="addColumn"
      />
    </AppContainer>
  );
};
