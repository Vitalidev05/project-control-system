import { IBoardList } from '../../../../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/rootReducer';

import { DragItem } from '../../../../context/DragItem';
import { useActions } from '../../../../utils/useActions';
import { useEffect, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import isHidden from '../../../../utils/isHidden';
import { HookProps } from './types';
import { HoverDrag } from '../../../../types/shared';

export const useColumnTask = ({
  boardId,
  taskId,
  taskIndex,
  columnId,
  taskName,
  isPreview
}: HookProps) => {
  const board: IBoardList[] = useSelector(
    (state: RootState) => state.boardList?.boardList
  );

  const isDisable: boolean = useSelector(
    (state: RootState) => state.disableDnd.disable
  );

  const { onMoveTask, onSetToggle, onSetDraggedItem } = useActions();

  const boardList: IBoardList = board.filter(
    (x: IBoardList) => x.boardId === boardId
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
        if (newItem.cardId !== taskId) {
          const dragIndex = newItem.cardIndex;
          const hoverIndex = taskIndex;
          const sourceColumn = newItem.columnId;
          const targetColumn = columnId;

          onMoveTask(
            dragIndex,
            hoverIndex,
            sourceColumn,
            targetColumn,
            boardId
          );
          newItem.cardIndex = hoverIndex;
          newItem.columnId = targetColumn;
        }
      }
    }
  });

  const item: DragItem = {
    boardId: boardId,
    cardIndex: taskIndex,
    cardId: taskId,
    columnId: columnId,
    taskName: taskName,
    type: 'CARD'
  };

  const [, drag, preview] = useDrag({
    item,
    canDrag: !isDisable,
    // type: 'item',
    begin: () => onSetDraggedItem(boardId, item),
    end: () => onSetDraggedItem(boardId, undefined)
  }); // todo

  useEffect(() => {
    preview(getEmptyImage());
  }, [preview]);

  drag(drop(ref));

  const hide = isHidden(isPreview, boardList.draggedItem, 'CARD', taskId);

  return {
    ref,
    showPopup,
    toggle,
    togglePopup,
    hide
  };
};
