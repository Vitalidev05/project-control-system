import { Priority } from '../../../../constants';

export type ColumnProps = {
  cardText: string;
  cardDate?: Date;
  cardName: string;
  cardIndex: number;
  cardId: string;
  columnId: string;
  isPreview?: boolean;
  boardId: string;
  cardPriority: Priority;
};

export type HookProps = {
  boardId: string;
  cardId: string;
  cardIndex: number;
  columnId: string;
  cardName: string;
  isPreview?: boolean;
  cardPriority: Priority;
};
