export type CardMenuProps = {
  taskDate?: Date;
  taskName: string;
  taskText: string;
  closePopup: () => void;
  taskId: string;
  columnId: string;
  boardId: string;
};

export type HookProps = {
  taskId: string;
  boardId: string;
  columnId: string;
  closePopup: () => void;
  taskText: string;
};
