import { Priority } from '../../../../constants';

export type ColumnProps = {
  taskText: string;
  taskDate?: Date;
  taskName: string;
  taskIndex: number;
  taskId: string;
  columnId: string;
  isPreview?: boolean;
  boardId: string;
  taskPriority: Priority;
};

export type HookProps = {
  boardId: string;
  taskId: string;
  taskIndex: number;
  columnId: string;
  taskName: string;
  isPreview?: boolean;
  taskPriority: Priority;
};
