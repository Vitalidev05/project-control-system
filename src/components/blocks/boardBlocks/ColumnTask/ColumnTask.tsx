import React, { useRef, useState, useEffect } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { CardContainer } from '../../../../assets/stylesheets/styles';
import { DragItem } from '../../../../context/DragItem';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { CardMenuIcon } from '../../../icons';
import { IBoardList } from '../../../../constants';
import { isHidden } from '../../../../utils/isHidden';

import { TaskMenu as CardMenu } from '../TaskMenu';
import { useColumnTask } from './hook';

type ColumnProps = {
  taskText: string;
  taskDate?: Date;
  taskName: string;
  taskIndex: number;
  taskId: string;
  columnId: string;
  isPreview?: boolean;
  boardId: string;
};

type HoverDrag = {
  type: string;
  payload: {
    Drag: DragItem | undefined;
    boardId: string;
  };
};

export const ColumnTask = (props: ColumnProps) => {
  const { onMoveTask, board, onSetToggle, onSetDraggedItem, isDisable } =
    useColumnTask();

  const boardList: IBoardList = board.filter(
    (x: IBoardList) => x.boardId === props.boardId
  )[0];

  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function toggle() {
    togglePopup();
    onSetToggle();
  }

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: HoverDrag) {
      const newItem: DragItem | undefined = item.payload.Drag;

      if (newItem?.type === 'CARD') {
        if (newItem.cardId !== props.taskId) {
          const dragIndex = newItem.cardIndex;
          const hoverIndex = props.taskIndex;
          const sourceColumn = newItem.columnId;
          const targetColumn = props.columnId;

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
    }
  });

  const item: DragItem = {
    boardId: props.boardId,
    cardIndex: props.taskIndex,
    cardId: props.taskId,
    columnId: props.columnId,
    taskName: props.taskName,
    type: 'CARD'
  };

  const [, drag, preview] = useDrag({
    item,
    canDrag: !isDisable,
    // type: 'item',
    begin: () => onSetDraggedItem(props.boardId, item),
    end: () => onSetDraggedItem(props.boardId, undefined)
  }); // todo

  useEffect(() => {
    preview(getEmptyImage());
  }, [preview]);

  drag(drop(ref));
  return (
    <CardContainer
      isPreview={props.isPreview}
      isHidden={isHidden(
        props.isPreview,
        boardList.draggedItem,
        'CARD',
        props.taskId
      )}
      ref={ref}
    >
      {props.taskName}
      <CardMenuIcon className={'size_xs'} onClick={toggle} />
      {showPopup && (
        <CardMenu
          taskText={props.taskText}
          taskDate={props.taskDate}
          taskName={props.taskName}
          closePopup={togglePopup}
          taskId={props.taskId}
          columnId={props.columnId}
          boardId={props.boardId}
        />
      )}
    </CardContainer>
  );
};
