import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import '../../components/icons/BaseIcon/BaseIcon.scss';
import { CrossIcon } from '../../components/icons';
import { cardColors } from '../../constants';

import {
  StyledBoardList,
  StyledAddBoardBlock,
  StyledBoardInputWrapper,
  BlockWrapper,
  CrossIconWrapper,
  CardBgColors
} from './BoardList.styled';
import { useBoardList } from './hook';

export const BoardList = memo(() => {
  const {
    boards,
    onAddBoardFunc,
    deleteBoardFunc,
    setBoardColor,
    changeName,
    boardName
  } = useBoardList();

  return (
    <StyledBoardList>
      {boards?.map((value) => (
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
});
