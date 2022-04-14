import { Dispatch } from 'react';

import {
  IMoveColumn,
  IMoveCard,
  ISetDraggedItem,
  IDeleteCard,
  IDeleteColumn,
  IDeleteBoard,
  IChangeText,
  IAddBoard,
  AddColumnPayload,
  AddCardPayload,
  ChangeColumnTitleProps,
  ChangeColumnPriorityProps,
  IChangeCardTitle,
  IChangeCardPriority,
  IChangeCardDate
} from '../../constants';

import {
  ADD,
  SUB,
  ADD_NUMBER,
  ADD2,
  ADD_BOARD,
  ADD_COLUMN,
  ADD_CARD,
  MOVE_COLUMN,
  MOVE_CARD,
  SET_DRAGGED_ITEM,
  DELETE_CARD,
  DELETE_COLUMN,
  DELETE_BOARD,
  CHANGE_TEXT,
  SET_AUTH_TRUE,
  SET_AUTH_FALSE,
  SET_DISABLE_FALSE,
  SET_DISABLE_TRUE,
  TOGGLE_DISABLE,
  SET_CURRENT_BOARD,
  CHANGE_COLUMN_TITLE,
  CHANGE_COLUMN_PRIORITY,
  CHANGE_CARD_TITLE,
  CHANGE_CARD_PRIORITY,
  CHANGE_CARD_DATE
} from './actionTypes';

function setCurrentBoard(str: string | null) {
  return {
    type: SET_CURRENT_BOARD,
    payload: str
  };
}

function add() {
  return {
    type: ADD
  };
}

function sub() {
  return {
    type: SUB
  };
}

function addNumber(num: number) {
  return {
    type: ADD_NUMBER,
    payload: num
  };
}

function add2(num: number) {
  return {
    type: ADD2,
    payload: num
  };
}

function asyncAdd(num: number) {
  return (dispatch: Dispatch<any>) => {
    setTimeout(() => {
      dispatch(addNumber(num));
    }, 2000);
  };
}

function addBoard(obj: IAddBoard) {
  return {
    type: ADD_BOARD,
    payload: obj
  };
}

function addColumn(obj: AddColumnPayload) {
  return {
    type: ADD_COLUMN,
    payload: obj
  };
}

function addCard(obj: AddCardPayload) {
  return {
    type: ADD_CARD,
    payload: obj
  };
}

function moveColumn(obj: IMoveColumn) {
  return {
    type: MOVE_COLUMN,
    payload: obj
  };
}

function moveCard(obj: IMoveCard) {
  return {
    type: MOVE_CARD,
    payload: obj
  };
}

function setDraggeditem(obj: ISetDraggedItem) {
  return {
    type: SET_DRAGGED_ITEM,
    payload: obj
  };
}

function deleteCard(obj: IDeleteCard) {
  return {
    type: DELETE_CARD,
    payload: obj
  };
}

function deleteColumn(obj: IDeleteColumn) {
  return {
    type: DELETE_COLUMN,
    payload: obj
  };
}

function deleteBoard(obj: IDeleteBoard) {
  return {
    type: DELETE_BOARD,
    payload: obj
  };
}

function changeText(obj: IChangeText) {
  return {
    type: CHANGE_TEXT,
    payload: obj
  };
}

function changeCardTitle(obj: IChangeCardTitle) {
  return {
    type: CHANGE_CARD_TITLE,
    payload: obj
  };
}

function changeCardPriority(obj: IChangeCardPriority) {
  return {
    type: CHANGE_CARD_PRIORITY,
    payload: obj
  };
}

function changeCardDate(obj: IChangeCardDate) {
  return {
    type: CHANGE_CARD_DATE,
    payload: obj
  };
}

export const changeColumnTitle = (obj: ChangeColumnTitleProps) => {
  return {
    type: CHANGE_COLUMN_TITLE,
    payload: obj
  };
};

export const changeColumnPriority = (obj: ChangeColumnPriorityProps) => {
  return {
    type: CHANGE_COLUMN_PRIORITY,
    payload: obj
  };
};

function setAuthTrue() {
  return {
    type: SET_AUTH_TRUE
  };
}

function setAuthFalse() {
  return {
    type: SET_AUTH_FALSE
  };
}

function setDisableTrue() {
  return {
    type: SET_DISABLE_TRUE
  };
}

function setDisableFalse() {
  return {
    type: SET_DISABLE_FALSE
  };
}

function toggleDisable() {
  return {
    type: TOGGLE_DISABLE
  };
}

export {
  add,
  sub,
  addNumber,
  add2,
  asyncAdd,
  addBoard,
  addColumn,
  addCard,
  moveColumn,
  moveCard,
  setDraggeditem,
  deleteCard,
  deleteColumn,
  deleteBoard,
  changeText,
  setAuthTrue,
  setAuthFalse,
  setDisableTrue,
  setDisableFalse,
  toggleDisable,
  setCurrentBoard,
  changeCardTitle,
  changeCardPriority,
  changeCardDate
};
