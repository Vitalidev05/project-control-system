import React, { memo } from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';

import { CustomDragLayerContainer } from '../../../assets/stylesheets/styles';
import { BoardColumn as Column } from '../../blocks/boardBlocks/Column';
import { ColumnCard } from '../../blocks/boardBlocks/ColumnCard';
import { DragItem } from '../../../context/DragItem';

function getItemStyles(currentOffset: XYCoord | null) {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

export const CustomDragLayer: React.FC = memo(() => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));

  if (!isDragging) {
    return null;
  }

  const itemDrag: DragItem = item.payload.Drag;

  return (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {itemDrag.type === 'COLUMN' ? (
          <Column
            columnId={itemDrag.columnId}
            columnName={itemDrag.columnName}
            index={itemDrag.columnIndex}
            isPreview
            boardId={itemDrag.boardId}
          />
        ) : (
          <ColumnCard
            cardPriority={itemDrag.priority}
            cardText=""
            columnId={itemDrag.columnId}
            isPreview
            cardIndex={0}
            cardId={itemDrag.cardId}
            cardName={itemDrag.cardName}
            boardId={itemDrag.boardId}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  );
});
