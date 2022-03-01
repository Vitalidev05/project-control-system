import { Priority } from '../constants';

export type CardDragItem = {
  boardId: string;
  cardIndex: number;
  cardId: string;
  columnId: string;
  taskName: string;
  priority: Priority;
  type: 'CARD';
};

export type ColumnDragItem = {
  boardId: string;
  columnIndex: number;
  columnId: string;
  columnName: string;
  type: 'COLUMN';
};

export type DragItem = CardDragItem | ColumnDragItem;
