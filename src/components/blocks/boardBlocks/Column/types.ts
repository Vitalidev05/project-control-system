export type ColumnProps = {
  boardId: string;
  columnName: string;
  index: number;
  columnId: string;
  isPreview?: boolean;
};

export type HookProps = {
  index: number;
  boardId: string;
  columnId: string;
  columnName: string;
  isPreview?: boolean;
};
