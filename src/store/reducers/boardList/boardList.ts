import { nanoid } from 'nanoid';

import { ActionType } from '../../../constants';
import {
  ADD_BOARD,
  ADD_COLUMN,
  ADD_CARD,
  MOVE_COLUMN,
  SET_DRAGGED_ITEM,
  MOVE_CARD,
  DELETE_CARD,
  DELETE_COLUMN,
  DELETE_BOARD,
  CHANGE_TEXT,
  SET_CURRENT_BOARD,
  CHANGE_COLUMN_TITLE,
  CHANGE_COLUMN_PRIORITY
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
    case CHANGE_COLUMN_PRIORITY: {
      const { boardId, columnId, priority } = action.payload;
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard?.boardColumns?.findIndex(
        (x) => x.columnId === columnId
      );

      const targetColumn = targetBoard?.boardColumns[targetColumnIndex];

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard?.boardColumns,
          {
            ...targetColumn,
            priority: priority
          },
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
    case CHANGE_COLUMN_TITLE: {
      const { boardId, columnId, title } = action.payload;
      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );
      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard?.boardColumns?.findIndex(
        (x) => x.columnId === columnId
      );

      const targetColumn = targetBoard?.boardColumns[targetColumnIndex];

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard?.boardColumns,
          {
            ...targetColumn,
            columnName: title
          },
          targetColumnIndex
        )
      };

      // overrideItemAtIndex(
      //   state.boardList,
      //   updatedColumnList,
      //   targetBoardIndex
      // )

      return {
        ...state,
        boardList: overrideItemAtIndex(
          state.boardList,
          updatedColumnList,
          targetBoardIndex
        )
      };
    }
    case SET_CURRENT_BOARD: {
      return {
        ...state,
        currentBoardId: action.payload
      };
    }
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
            priority: action.payload?.priority || 'none',
            columnId: nanoid(),
            columnName: action.payload.text,
            columnCards: []
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

    case ADD_CARD: {
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

      const updatedCardList = {
        ...targetColumn,
        columnCards: [
          ...targetColumn.columnCards,
          {
            priority: action.payload?.priority || 'none',
            cardId: nanoid(),
            cardName: action.payload.text,
            cardText: '',
            cardDate: new Date()
          }
        ]
      };

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedCardList,
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

    case MOVE_CARD: {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn, boardId } =
        action.payload;
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

      const card = sourceList.columnCards[dragIndex];

      const updatedSourceColumn = {
        ...sourceList,
        columnCards: removeItemAtIndex(sourceList.columnCards, dragIndex)
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
        columnCards: insertItemAtIndex(targetList.columnCards, card, hoverIndex)
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

    case DELETE_CARD: {
      const { boardId, columnId, cardId } = action.payload;

      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );

      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === columnId
      );

      const targetColumn = targetBoard.boardColumns[targetColumnIndex];

      const targetCardIndex = targetColumn.columnCards.findIndex(
        (x: { cardId: string }) => x.cardId === cardId
      );

      const updatedColumn = {
        ...targetColumn,
        columnCards: removeItemAtIndex(
          targetColumn.columnCards,
          targetCardIndex
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
      const { boardId, cardId, columnId, text } = action.payload;

      const targetBoardIndex = state.boardList.findIndex(
        (x) => x.boardId === boardId
      );

      const targetBoard = state.boardList[targetBoardIndex];

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        (x: { columnId: string }) => x.columnId === columnId
      );

      const targetColumn = targetBoard.boardColumns[targetColumnIndex];

      const targetCardIndex = targetColumn.columnCards.findIndex(
        (x: { cardId: string }) => x.cardId === cardId
      );

      const targetCard = targetColumn.columnCards[targetCardIndex];

      const updatedCard = {
        ...targetCard,
        cardText: text
      };

      const updatedColumn = {
        ...targetColumn,
        columnCards: overrideItemAtIndex(
          targetColumn.columnCards,
          updatedCard,
          targetCardIndex
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
