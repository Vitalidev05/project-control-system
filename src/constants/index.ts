import {
  ADD_BOARD,
  MOVE_COLUMN,
  ADD_CARD,
  ADD_COLUMN,
  SET_DRAGGED_ITEM,
  MOVE_CARD,
  DELETE_CARD,
  DELETE_COLUMN,
  DELETE_BOARD,
  CHANGE_TEXT,
  SET_AUTH_FALSE,
  SET_AUTH_TRUE,
  SET_DISABLE_FALSE,
  SET_DISABLE_TRUE,
  TOGGLE_DISABLE,
  SET_CURRENT_BOARD,
  CHANGE_COLUMN_TITLE,
  CHANGE_COLUMN_PRIORITY,
  CHANGE_CARD_TITLE,
  CHANGE_CARD_PRIORITY,
  CHANGE_CARD_DATE
} from '../store/actions/actionTypes';

import { DragItem } from '../context/DragItem';

interface IState {
  boardListReducer?: IBoardList;
}

interface IBoardListState {
  boardList?: IBoardList[];
}

interface IBoardList {
  boardId: string;
  boardName?: string;
  boardColor?: string;
  draggedItem: DragItem | undefined;
  boardColumns: IColumns[];
}

export type Priority = 'none' | 'low' | 'medium' | 'high';

interface IColumns {
  priority: Priority;
  columnId: string;
  columnName: string;
  columnCards: IBoardCards[];
}

interface IBoardCards {
  cardId: string;
  cardName: string;
  cardText: string;
  priority: Priority;
  cardDate: Date;
}

export type AddColumnPayload = {
  text: string;
  boardId: string;
  priority?: Priority;
};

export type AddCardPayload = {
  text: string;
  boardId: string;
  columnId: string;
  priority?: Priority;
};

interface IMoveColumn {
  dragIndex: number;
  hoverIndex: number;
  boardId: string;
}

interface IMoveCard {
  dragIndex: number;
  hoverIndex: number;
  sourceColumn: string;
  targetColumn: string;
  boardId: string;
}
interface ISetDraggedItem {
  Drag: DragItem | undefined;
  boardId: string;
}

interface IDeleteCard {
  boardId: string;
  columnId: string;
  cardId: string;
}

interface IDeleteColumn {
  boardId: string;
  columnId: string;
}

interface IDeleteBoard {
  boardId: string;
}

interface IChangeText {
  boardId: string;
  columnId: string;
  cardId: string;
  text: string;
}

interface IChangeCardTitle {
  boardId: string;
  columnId: string;
  cardId: string;
  cardTitle: string;
}

interface IChangeCardPriority {
  boardId: string;
  columnId: string;
  cardId: string;
  cardPriority: Priority;
}

interface IChangeCardDate {
  boardId: string;
  columnId: string;
  cardId: string;
  cardDate: Date;
}

export type ChangeColumnTitleProps = {
  boardId: string;
  columnId: string;
  title: string;
};

export type ChangeColumnPriorityProps = {
  boardId: string;
  columnId: string;
  priority: Priority;
};

interface IAddBoard {
  boardName: string;
  boardColor: string;
}

type ActionType =
  | {
      type: typeof CHANGE_COLUMN_PRIORITY;
      payload: ChangeColumnPriorityProps;
    }
  | {
      type: typeof CHANGE_COLUMN_TITLE;
      payload: ChangeColumnTitleProps;
    }
  | {
      type: typeof SET_CURRENT_BOARD;
      payload: string | null;
    }
  | {
      type: typeof ADD_BOARD;
      payload: { boardName: string; boardColor: string };
    }
  | {
      type: typeof ADD_COLUMN;
      payload: { text: string; boardId: string; priority?: Priority };
    }
  | {
      type: typeof ADD_CARD;
      payload: {
        text: string;
        boardId: string;
        columnId: string;
        priority: Priority;
      };
    }
  | {
      type: typeof MOVE_COLUMN;
      payload: {
        dragIndex: number;
        hoverIndex: number;
        boardId: string;
      };
    }
  | {
      type: typeof SET_DRAGGED_ITEM;
      payload: {
        Drag: DragItem | undefined;
        boardId: string;
      };
    }
  | {
      type: typeof CHANGE_CARD_PRIORITY;
      payload: IChangeCardPriority;
    }
  | {
      type: typeof CHANGE_CARD_DATE;
      payload: IChangeCardDate;
    }
  | {
      type: typeof DELETE_CARD;
      payload: {
        boardId: string;
        columnId: string;
        cardId: string;
      };
    }
  | {
      type: typeof DELETE_COLUMN;
      payload: {
        boardId: string;
        columnId: string;
      };
    }
  | {
      type: typeof DELETE_BOARD;
      payload: {
        boardId: string;
      };
    }
  | {
      type: typeof CHANGE_TEXT;
      payload: {
        text: string;
        cardId: string;
        boardId: string;
        columnId: string;
      };
    }
  | {
      type: typeof CHANGE_CARD_TITLE;
      payload: IChangeCardTitle;
    }
  | {
      type: typeof MOVE_CARD;
      payload: {
        boardId: string;
        dragIndex: number;
        hoverIndex: number;
        sourceColumn: string;
        targetColumn: string;
      };
    };

interface IMenu {
  open: boolean;
}

interface IMenuToggle extends IMenu {
  setOpen: (v: boolean) => void;
}

type AuthActionType =
  | {
      type: typeof SET_AUTH_TRUE;
    }
  | {
      type: typeof SET_AUTH_FALSE;
    };

type DisableActionType =
  | {
      type: typeof SET_DISABLE_FALSE;
    }
  | {
      type: typeof TOGGLE_DISABLE;
    }
  | {
      type: typeof SET_DISABLE_TRUE;
    };

interface IDisable {
  disable: boolean;
}

const cardColors: string[] = ['blue', 'yellow', 'green', 'red'];

export { cardColors };
export type {
  IChangeCardPriority,
  IState,
  IBoardListState,
  IBoardList,
  IColumns,
  IBoardCards,
  ActionType,
  IMoveColumn,
  IMoveCard,
  ISetDraggedItem,
  IMenu,
  IMenuToggle,
  IDeleteCard,
  IDeleteColumn,
  IDeleteBoard,
  IChangeText,
  AuthActionType,
  IAddBoard,
  DisableActionType,
  IDisable,
  IChangeCardTitle,
  IChangeCardDate
};
