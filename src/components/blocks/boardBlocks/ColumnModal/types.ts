import { Priority } from '../../../../constants';

export type Props = {
  openModal: boolean;
  handleCloseModal(): void;
  activeItem: Priority;
  columnName: string;
  onDelete: () => void;
  changeColumnTitle: (title: string) => void;
  changeColumnPriority: (priority: Priority) => void;
};
