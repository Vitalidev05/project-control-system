import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../icons/BaseIcon/BaseIcon.scss';
import { CrossIcon } from '../../icons';
import { IBoardList, cardColors } from '../../../constants';

import {
  StyledBoardList,
  StyledAddBoardBlock,
  StyledBoardInputWrapper,
  BlockWrapper,
  CrossIconWrapper,
  CardBgColors
} from './BoardList.styled';

interface StateProps {
  boards: IBoardList[];
}

export const BoardList = (props: StateProps) => {
  const [boardName, setBoardName] = useState('');
  const [boardColor, setBoardColor] = useState('');

  const onAddBoard: (...props: any) => void = () => {
    return;
  }; //todo

  const onDeleteBoard: (...props: any) => void = () => {
    return;
  }; //todo

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

  return (
    <StyledBoardList>
      {props.boards?.map((value) => (
        <BlockWrapper key={value.boardId} className={value.boardColor}>
          <CrossIconWrapper>
            <CrossIcon
              className={'size_l'}
              onClick={() => deleteBoardFunc(value.boardId)}
            />
          </CrossIconWrapper>
          <Link key={value.boardId} to={`/board_${value.boardId}`}>
            {value.boardName}
          </Link>
        </BlockWrapper>
      ))}

      <StyledAddBoardBlock>
        Add board
        <StyledBoardInputWrapper>
          <input
            className="input"
            type="text"
            placeholder="Enter board title.."
            value={boardName}
            onChange={changeName}
          />
          <CardBgColors>
            {cardColors.map((color, index) => (
              <div
                key={color}
                className={color}
                onClick={() => setBoardColor(color)}
                onKeyDown={() => setBoardColor(color)}
                role="button"
                tabIndex={index}
                aria-label=" "
              />
            ))}
          </CardBgColors>
          <button type="submit" onClick={onAddBoardFunc}>
            +
          </button>
        </StyledBoardInputWrapper>
      </StyledAddBoardBlock>
    </StyledBoardList>
  );
};
