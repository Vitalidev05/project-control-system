import { IBoardList, IColumns } from '../../../../constants';
import { useSelector } from 'react-redux';
import { DragItem } from '../../../../context/DragItem';
import { useActions } from '../../../../utils/useActions';
import { useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { HoverDrag } from '../../../../types/shared';
import isHidden from '../../../../utils/isHidden';
import { HookProps } from './types';
import { selectBoard } from '../../../../store/reducers/boardList/selectors';
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

  const boardList: IBoardList | undefined = useSelector(selectBoard(boardId));

  const isDisable: boolean = useSelector(selectDnd);

  const targetBoardColumn: IColumns | undefined =
    boardList?.boardColumns[index];
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
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

        onMoveTask(dragIndex, hoverIndex, sourceColumn, targetColumn, boardId);

        newItem.cardIndex = hoverIndex;
        newItem.columnId = targetColumn;
      }
    }
  });

  const item: DragItem = {
    type: 'COLUMN',
    boardId: boardId,
    columnId: columnId,
    columnIndex: index,
    columnName: columnName
  };

  const [, drag, preview] = useDrag({
    item,
    canDrag: !isDisable,
    // type: 'column',
    begin: () => onSetDraggedItem(boardId, item),
    end: () => onSetDraggedItem(boardId, undefined)
  });
  useEffect(() => {
    preview(getEmptyImage());
  }, [preview]);

  const deleteColumnFunc = () => {
    onDeleteColumn(boardId, columnId);
  };

  drag(drop(ref));

  const hide = isHidden(isPreview, boardList?.draggedItem, 'COLUMN', columnId);

  return {
    deleteColumnFunc,
    targetBoardColumn,
    ref,
    hide
  };
};
