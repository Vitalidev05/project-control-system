import { IBoardList } from '../../constants';
import { useSelector } from 'react-redux';
import { useActions } from '../../utils/useActions';
import React, { useState } from 'react';
import { selectBoardList } from '../../store/reducers/boardList/selectors';

export const useBoardList = () => {
  const boards: IBoardList[] = useSelector(selectBoardList);

  const { onAddBoard, onDeleteBoard } = useActions();

  const [boardName, setBoardName] = useState('');
  const [boardColor, setBoardColor] = useState('');

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    setBoardName(event.currentTarget.value);
  };

  const onAddBoardFunc = () => {
    onAddBoard(boardName, boardColor);
    setBoardName('');
  };

  const deleteBoardFunc = (boardId: string) => {
    onDeleteBoard(boardId);
  };

  return {
    boards,
    deleteBoardFunc,
    changeName,
    setBoardColor,
    onAddBoardFunc,
    boardName
  };
};
