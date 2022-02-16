import React, { useRef, useEffect } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import {
  ColumnContainer,
  ColumnTitle
} from '../../../../assets/stylesheets/styles';
import { AddNewItem } from '../AddNewItem';
import { ColumnTask } from '../ColumnTask';
import { DragItem } from '../../../../context/DragItem';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CrossIcon } from '../../../icons';
import { IBoardList, IColumns } from '../../../../constants';
import { isHidden } from '../../../../utils/isHidden';
import { useColumn } from './hook';

interface ColumnProps {
  boardId: string;
  columnName: string;
  index: number;
  columnId: string;
  isPreview?: boolean;
}

interface HoverDrag {
  columnID: string;
  type: string;
  index: number;
  payload: {
    Drag: DragItem | undefined;
    boardId: string;
  };
}

export const BoardColumn = (props: ColumnProps) => {
  const {
    board,
    onDeleteColumn,
    onMoveColumn,
    onMoveTask,
    onSetDraggedItem,
    isDisable
  } = useColumn();

  const boardList: IBoardList = board.filter(
    (x: IBoardList) => x.boardId === props.boardId
  )[0];
  const targetBoardColumn: IColumns = boardList.boardColumns[props.index];
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: HoverDrag) {
      const newItem: DragItem | undefined = item.payload.Drag;
      if (newItem?.type === 'COLUMN') {
        const dragIndex = newItem.columnIndex;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
          return;
        }

        onMoveColumn(dragIndex, hoverIndex, newItem.boardId);
        newItem.columnIndex = hoverIndex;
      } else if (newItem?.type === 'CARD') {
        const dragIndex = newItem.cardIndex;
        const hoverIndex = 0;
        const sourceColumn = newItem.columnId;
        const targetColumn = props.columnId;

        if (sourceColumn === targetColumn) {
          return;
        }

        onMoveTask(
          dragIndex,
          hoverIndex,
          sourceColumn,
          targetColumn,
          props.boardId
        );

        newItem.cardIndex = hoverIndex;
        newItem.columnId = targetColumn;
      }
    }
  });

  const item: DragItem = {
    type: 'COLUMN',
    boardId: props.boardId,
    columnId: props.columnId,
    columnIndex: props.index,
    columnName: props.columnName
  };

  const [, drag, preview] = useDrag({
    item,
    canDrag: !isDisable,
    // type: 'column',
    begin: () => onSetDraggedItem(props.boardId, item),
    end: () => onSetDraggedItem(props.boardId, undefined)
  });
  useEffect(() => {
    preview(getEmptyImage());
  }, [preview]);

  const deleteColumnFunc = () => {
    onDeleteColumn(props.boardId, props.columnId);
  };

  drag(drop(ref));
  return (
    <ColumnContainer
      isPreview={props.isPreview}
      ref={ref}
      isHidden={isHidden(
        props.isPreview,
        boardList.draggedItem,
        'COLUMN',
        props.columnId
      )}
    >
      <CrossIcon className={'size_l'} onClick={deleteColumnFunc} />
      <ColumnTitle>{props.columnName}</ColumnTitle>
      {targetBoardColumn.columnTasks.map((task, index) => (
        <ColumnTask
          taskDate={task.taskDate}
          key={task.taskId}
          taskName={task.taskName}
          taskText={task.taskText}
          taskIndex={index}
          columnId={targetBoardColumn.columnId}
          taskId={task.taskId}
          boardId={props.boardId}
        />
      ))}
      <AddNewItem
        toggleButtonText="+add new task"
        functionName="addTask"
        columnId={props.columnId}
        boardId={props.boardId}
        dark
      />
    </ColumnContainer>
  );
};
