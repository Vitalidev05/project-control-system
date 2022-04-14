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

export const useColumnCard = ({
  boardId,
  cardId,
  cardIndex,
  columnId,
  cardName,
  isPreview,
  cardPriority
}: HookProps) => {
  const { onMoveCard, onSetToggle, onSetDraggedItem } = useActions();
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
          if (newItem.cardId !== cardId) {
            const dragIndex = newItem.cardIndex;
            const hoverIndex = cardIndex;
            const sourceColumn = newItem.columnId;
            const targetColumn = columnId;

            onMoveCard(
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
    [boardId, columnId, onMoveCard, cardId, cardIndex]
  );

  const [, drop] = useDrop(dropConfig);

  const item: DragItem = useMemo(
    () => ({
      priority: cardPriority,
      boardId: boardId,
      cardIndex: cardIndex,
      cardId: cardId,
      columnId: columnId,
      cardName: cardName,
      type: 'CARD'
    }),
    [boardId, columnId, cardId, cardIndex, cardName, cardPriority]
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
    preview(getEmptyImage());
  }, [preview]);

  drag(drop(ref));

  const hide = useMemo(
    () => isHidden(isPreview, draggedItem, 'CARD', cardId),
    [draggedItem, isPreview, cardId]
  );

  return {
    ref,
    showPopup,
    toggle,
    togglePopup,
    hide
  };
};
