import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';

import { CustomDragLayerContainer } from '../../../assets/stylesheets/styles';
import { BoardColumn as Column } from '../../blocks/boardBlocks/Column';
import { ColumnTask as Card } from '../../blocks/boardBlocks/ColumnTask';
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

export const CustomDragLayer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));

  if (!isDragging) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
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
          <Card
            taskText=""
            columnId={itemDrag.columnId}
            isPreview
            taskIndex={0}
            taskId={itemDrag.cardId}
            taskName={itemDrag.taskName}
            boardId={itemDrag.boardId}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  );
};
