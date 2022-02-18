export type ColumnProps = {
  taskText: string;
  taskDate?: Date;
  taskName: string;
  taskIndex: number;
  taskId: string;
  columnId: string;
  isPreview?: boolean;
  boardId: string;
};

export type HookProps = {
  boardId: string;
  taskId: string;
  taskIndex: number;
  columnId: string;
  taskName: string;
  isPreview?: boolean;
};
