import { IBoardList } from '../../constants';
import { useSelector } from 'react-redux';
import { useActions } from '../../utils/useActions';
import React, { useCallback, useState } from 'react';
import { selectBoardList } from '../../store/reducers/boardList/selectors';

export const useBoardList = () => {
  const { onAddBoard, onDeleteBoard } = useActions();
  const boards: IBoardList[] = useSelector(selectBoardList);

  const [boardName, setBoardName] = useState('');
  const [boardColor, setBoardColor] = useState('');

  const changeName = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setBoardName(event.currentTarget.value);
  }, []);

  const onAddBoardFunc = useCallback(() => {
    onAddBoard(boardName, boardColor);
    setBoardName('');
  }, [boardColor, boardName, onAddBoard]);

  const deleteBoardFunc = useCallback(
    (boardId: string) => {
      onDeleteBoard(boardId);
    },
    [onDeleteBoard]
  );

  return {
    boards,
    deleteBoardFunc,
    changeName,
    setBoardColor,
    onAddBoardFunc,
    boardName
  };
};
