import { DragItem } from '../context/DragItem';

export type HoverDrag = {
  columnID: string;
  type: string;
  index: number;
  payload: {
    Drag: DragItem | undefined;
    boardId: string;
  };
};
