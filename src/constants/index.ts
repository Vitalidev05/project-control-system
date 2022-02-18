import {
  ADD_BOARD,
  MOVE_COLUMN,
  ADD_TASK,
  ADD_COLUMN,
  SET_DRAGGED_ITEM,
  MOVE_TASK,
  DELETE_TASK,
  DELETE_COLUMN,
  DELETE_BOARD,
  CHANGE_TEXT,
  SET_AUTH_FALSE,
  SET_AUTH_TRUE,
  SET_DISABLE_FALSE,
  SET_DISABLE_TRUE,
  TOGGLE_DISABLE,
  SET_CURRENT_BOARD
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

interface IColumns {
  columnId: string;
  columnName: string;
  columnTasks: IBoardTasks[];
}

interface IBoardTasks {
  taskId: string;
  taskName: string;
  taskText: string;
  taskDate: Date;
}

interface IPayload {
  text: string;
  boardId?: string;
  columnId?: string;
}

interface IMoveColumn {
  dragIndex: number;
  hoverIndex: number;
  boardId: string;
}

interface IMoveTask {
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

interface IDeleteTask {
  boardId: string;
  columnId: string;
  taskId: string;
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
  taskId: string;
  text: string;
}

interface IAddBoard {
  boardName: string;
  boardColor: string;
}

type ActionType =
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
      payload: { text: string; boardId: string };
    }
  | {
      type: typeof ADD_TASK;
      payload: {
        text: string;
        boardId: string;
        columnId: string;
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
      type: typeof DELETE_TASK;
      payload: {
        boardId: string;
        columnId: string;
        taskId: string;
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
        taskId: string;
        boardId: string;
        columnId: string;
      };
    }
  | {
      type: typeof MOVE_TASK;
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
  IState,
  IBoardListState,
  IBoardList,
  IColumns,
  IBoardTasks,
  ActionType,
  IPayload,
  IMoveColumn,
  IMoveTask,
  ISetDraggedItem,
  IMenu,
  IMenuToggle,
  IDeleteTask,
  IDeleteColumn,
  IDeleteBoard,
  IChangeText,
  AuthActionType,
  IAddBoard,
  DisableActionType,
  IDisable
};
