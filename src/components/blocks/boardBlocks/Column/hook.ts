import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { IColumns, Priority } from '../../../../constants';
import { useSelector } from 'react-redux';
import { DragItem } from '../../../../context/DragItem';
import { useActions } from '../../../../utils/useActions';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { HoverDrag } from '../../../../types/shared';
import isHidden from '../../../../utils/isHidden';
import { HookProps } from './types';
import {
  selectBoardColumns,
  selectDraggedItem
} from '../../../../store/reducers/boardList/selectors';
import { selectDnd } from '../../../../store/reducers/dissableDnd/selectors';

export const useColumn = ({
  index,
  boardId,
  columnId,
  columnName,
  isPreview
}: HookProps) => {
  const { onMoveColumn, onMoveTask, onDeleteColumn, onSetDraggedItem } =
    useActions();

  const columns = useSelector(selectBoardColumns);

  const draggedItem = useSelector(selectDraggedItem);

  const isDisable: boolean = useSelector(selectDnd);

  const targetBoardColumn: IColumns | undefined = useMemo(
    () => columns[index],
    [columns, index]
  );

  const columnPriority: Priority = useMemo(
    () => targetBoardColumn?.priority || 'none',
    [targetBoardColumn]
  );

  const ref = useRef<HTMLDivElement>(null);

  const dropConfig = useMemo(
    () => ({
      accept: ['COLUMN', 'CARD'],
      hover(item: HoverDrag) {
        const newItem: DragItem | undefined = item.payload.Drag;
        if (newItem?.type === 'COLUMN') {
          const dragIndex = newItem.columnIndex;
          const hoverIndex = index;

          if (dragIndex === hoverIndex) {
            return;
          }

          onMoveColumn(dragIndex, hoverIndex, newItem.boardId);
          newItem.columnIndex = hoverIndex;
        } else if (newItem?.type === 'CARD') {
          const dragIndex = newItem.cardIndex;
          const hoverIndex = 0;
          const sourceColumn = newItem.columnId;
          const targetColumn = columnId;

          if (sourceColumn === targetColumn) {
            return;
          }

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
    }),
    [boardId, columnId, index, onMoveColumn, onMoveTask]
  );

  const [, drop] = useDrop(dropConfig);

  const item: DragItem = useMemo(
    () => ({
      type: 'COLUMN',
      boardId: boardId,
      columnId: columnId,
      columnIndex: index,
      columnName: columnName
    }),
    [boardId, columnId, columnName, index]
  );

  const dragConfig = useMemo(
    () => ({
      item,
      canDrag: !isDisable,
      begin: () => onSetDraggedItem(boardId, item),
      end: () => onSetDraggedItem(boardId, undefined)
    }),
    [boardId, isDisable, item, onSetDraggedItem]
  );

  const [, drag, preview] = useDrag(dragConfig);

  useEffect(() => {
    preview(getEmptyImage());
  }, [preview]);

  const deleteColumnFunc = useCallback(() => {
    onDeleteColumn(boardId, columnId);
  }, [boardId, columnId, onDeleteColumn]);

  const hide = useMemo(
    () => isHidden(isPreview, draggedItem, 'COLUMN', columnId),
    [columnId, draggedItem, isPreview]
  );

  drag(drop(ref));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const options = useMemo(() => {
    return [
      {
        name: 'Edit',
        action: () => {
          console.log('edit');
        }
      },
      {
        name: 'Delete',
        action: deleteColumnFunc
      }
    ];
  }, [deleteColumnFunc]);

  return {
    targetBoardColumn,
    ref,
    hide,
    columnPriority,
    handleClick,
    handleClose,
    anchorEl,
    open,
    options
  };
};
