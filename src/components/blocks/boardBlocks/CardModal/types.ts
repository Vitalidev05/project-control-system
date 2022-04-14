import { Priority } from '../../../../constants';

export type CardMenuProps = {
  cardDate?: Date;
  cardName: string;
  cardText: string;
  closePopup: () => void;
  cardId: string;
  columnId: string;
  boardId: string;
  handleCloseModal(): void;
  openModal: boolean;
  cardPriority: Priority;
};

export type HookProps = {
  cardId: string;
  boardId: string;
  columnId: string;
  closePopup: () => void;
  cardText: string;
  cardTitle: string;
  cardDate?: Date;
  cardPriority: Priority;
};
