import { nanoid } from 'nanoid';

import { ActionType } from '../../../constants';
import {
  ADD_BOARD,
  ADD_COLUMN,
  ADD_TASK,
  MOVE_COLUMN,
  SET_DRAGGED_ITEM,
  MOVE_TASK,
  DELETE_TASK,
  DELETE_COLUMN,
  DELETE_BOARD,
  CHANGE_TEXT
} from '../../actions/actionTypes';

import {
  overrideItemAtIndex,
  removeItemAtIndex,
  moveItem,
  insertItemAtIndex
} from '../../../utils/arrayUtils';

import { getInitialState, getNewBoard } from '../../../utils/getInitialState';

const initialState = getInitialState();

const boardList = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boardList: [
          ...state.boardList,
          getNewBoard(
            action.payload.boardName,
            action.payload.boardColor,
            nanoid()
          )
        ]
      };
    case ADD_COLUMN: {
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === action.payload.boardId
      );

      const targetBoard = state.boardList[targetBoardIndex];

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: [
          ...targetBoard.boardColumns,
          {
            columnId: nanoid(),
            columnName: action.payload.text,
            columnTasks: []
          }
        ]
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updatedColumnList,
          targetBoardIndex
        )
      };
    }

    case ADD_TASK: {
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === action.payload.boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];
      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (value: { columnId: string }) =>
          value.columnId === action.payload.columnId
      );
      const targetColumn = targetBoard.boardColumns.filter(
        (value: { columnId: string }) =>
          value.columnId === action.payload.columnId
      )[0];

      const updatedTaskList = {
        ...targetColumn,
        columnTasks: [
          ...targetColumn.columnTasks,
          {
            taskId: nanoid(),
            taskName: action.payload.text,
            taskText: '',
            taskDate: new Date()
          }
        ]
      };

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedTaskList,
          targetColumnIndex
        )
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updatedColumnList,
          targetBoardIndex
        )
      };
    }

    case MOVE_COLUMN: {
      const { dragIndex, hoverIndex, boardId } = action.payload;
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];

      const updateBoard = {
        ...targetBoard,
        boardColumns: moveItem(targetBoard.boardColumns, dragIndex, hoverIndex)
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updateBoard,
          targetBoardIndex
        )
      };
    }

    case MOVE_TASK: {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn, boardId } =
        action.payload;
      // console.log(action.payload);

      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];

      const sourceColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === sourceColumn
      );

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === targetColumn
      );

      const sourceList = targetBoard.boardColumns[sourceColumnIndex];

      const task = sourceList.columnTasks[dragIndex];

      const updatedSourceColumn = {
        ...sourceList,
        columnTasks: removeItemAtIndex(sourceList.columnTasks, dragIndex)
      };

      const stateWithUpdatedSourceList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedSourceColumn,
          sourceColumnIndex
        )
      };

      const targetList =
        stateWithUpdatedSourceList.boardColumns[targetColumnIndex];

      const updatedTargetList = {
        ...targetList,
        columnTasks: insertItemAtIndex(targetList.columnTasks, task, hoverIndex)
      };

      const updateBoard = {
        ...stateWithUpdatedSourceList,
        boardColumns: overrideItemAtIndex(
          stateWithUpdatedSourceList.boardColumns,
          updatedTargetList,
          targetColumnIndex
        )
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updateBoard,
          targetBoardIndex
        )
      };
      // return state;
    }

    case SET_DRAGGED_ITEM: {
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === action.payload.boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];

      const updateBoard = {
        ...targetBoard,
        draggedItem: action.payload.Drag
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updateBoard,
          targetBoardIndex
        )
      };
    }

    case DELETE_TASK: {
      const { boardId, columnId, taskId } = action.payload;

      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );

      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === columnId
      );

      const targetColumn = targetBoard.boardColumns[targetColumnIndex];

      const targetTaskIndex = targetColumn.columnTasks.findIndex(
        (x: { taskId: string }) => x.taskId === taskId
      );

      const updatedColumn = {
        ...targetColumn,
        columnTasks: removeItemAtIndex(
          targetColumn.columnTasks,
          targetTaskIndex
        )
      };

      const updatedBoard = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedColumn,
          targetColumnIndex
        )
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updatedBoard,
          targetBoardIndex
        )
      };
    }

    case DELETE_COLUMN: {
      const { columnId, boardId } = action.payload;

      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === columnId
      );
      const updatedBoard = {
        ...targetBoard,
        boardColumns: removeItemAtIndex(
          targetBoard.boardColumns,
          targetColumnIndex
        )
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updatedBoard,
          targetBoardIndex
        )
      };
    }

    case DELETE_BOARD: {
      const { boardId } = action.payload;
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );

      return {
        ...state,
        boardList: removeItemAtIndex(state.boardList, targetBoardIndex)
      };
    }

    case CHANGE_TEXT: {
      const { boardId, taskId, columnId, text } = action.payload;

      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );

      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === columnId
      );

      const targetColumn = targetBoard.boardColumns[targetColumnIndex];

      const targetTaskIndex = targetColumn.columnTasks.findIndex(
        (x: { taskId: string }) => x.taskId === taskId
      );

      const targetTask = targetColumn.columnTasks[targetTaskIndex];

      const updatedTask = {
        ...targetTask,
        taskText: text
      };

      const updatedColumn = {
        ...targetColumn,
        columnTasks: overrideItemAtIndex(
          targetColumn.columnTasks,
          updatedTask,
          targetTaskIndex
        )
      };

      const updatedBoard = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedColumn,
          targetColumnIndex
        )
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updatedBoard,
          targetBoardIndex
        )
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default boardList;
