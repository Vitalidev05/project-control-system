import { useSelector } from 'react-redux';
import { DragItem } from '../../../../context/DragItem';
import { useActions } from '../../../../utils/useActions';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import isHidden from '../../../../utils/isHidden';
import { HookProps } from './types';
import { HoverDrag } from '../../../../types/shared';
import { selectDraggedItem } from '../../../../store/reducers/boardList/selectors';
import { selectDnd } from '../../../../store/reducers/dissableDnd/selectors';

export const useColumnTask = ({
  boardId,
  taskId,
  taskIndex,
  columnId,
  taskName,
  isPreview
}: HookProps) => {
  const { onMoveTask, onSetToggle, onSetDraggedItem } = useActions();
  const draggedItem = useSelector(selectDraggedItem);

  const isDisable = useSelector(selectDnd);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = useCallback(() => {
    setShowPopup(!showPopup);
  }, [showPopup]);

  const toggle = useCallback(() => {
    togglePopup();
    onSetToggle();
  }, [onSetToggle, togglePopup]);

  const ref = useRef<HTMLDivElement>(null);

  const dropConfig = useMemo(
    () => ({
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
    }),
    [boardId, columnId, onMoveTask, taskId, taskIndex]
  );

  const [, drop] = useDrop(dropConfig);

  const item: DragItem = useMemo(
    () => ({
      boardId: boardId,
      cardIndex: taskIndex,
      cardId: taskId,
      columnId: columnId,
      taskName: taskName,
      type: 'CARD'
    }),
    [boardId, columnId, taskId, taskIndex, taskName]
  );

  const dragConfig = useMemo(
    () => ({
      item,
      canDrag: !isDisable,
      // type: 'item',
      begin: () => onSetDraggedItem(boardId, item),
      end: () => onSetDraggedItem(boardId, undefined)
    }),
    [boardId, isDisable, item, onSetDraggedItem]
  );

  const [, drag, preview] = useDrag(dragConfig);

  useEffect(() => {
    console.log(preview);
    preview(getEmptyImage());
  }, [preview]);

  drag(drop(ref));

  const hide = useMemo(
    () => isHidden(isPreview, draggedItem, 'CARD', taskId),
    [draggedItem, isPreview, taskId]
  );

  return {
    ref,
    showPopup,
    toggle,
    togglePopup,
    hide
  };
};
