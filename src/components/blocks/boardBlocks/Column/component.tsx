import React, { memo } from 'react';
import { ColumnContainer } from '../../../../assets/stylesheets/styles';
import { AddNewItem } from '../AddNewItem';
import { ColumnCard } from '../ColumnCard';
import '../../../icons/BaseIcon/BaseIcon.scss';
import { useColumn } from './hook';
import { ColumnProps } from './types';
import { DropPlace } from '../../../controls/DropPlace';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { PriorityIndicator } from '../../../controls/PriorityIndicator';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ColumnModal } from '../ColumnModal';

export const BoardColumn = memo(
  ({ columnName, columnId, index, boardId, isPreview }: ColumnProps) => {
    const {
      targetBoardColumn,
      ref,
      hide,
      columnPriority,
      handleClick,
      handleClose,
      anchorEl,
      open,
      options,
      openModal,
      handleCloseModal,
      targetBoardColumnName,
      deleteColumnFunc,
      changeColumnTitle,
      changeColumnPriority
    } = useColumn({
      index,
      columnId,
      columnName,
      boardId,
      isPreview
    });

    return (
      <>
        <ColumnContainer isPreview={isPreview} ref={ref} isHidden={hide}>
          {!hide && (
            <>
              <Box
                sx={{
                  py: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PriorityIndicator variant={columnPriority} />
                  <Typography sx={{ fontWeight: 600 }}>{columnName}</Typography>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon
                      sx={{ color: 'lightgrey' }}
                      // onClick={deleteColumnFunc}
                    />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: 24 * 4.5,
                        width: '20ch'
                      }
                    }}
                  >
                    {options?.map(({ name, action }) => (
                      <MenuItem
                        key={name}
                        onClick={() => {
                          action();
                          handleClose();
                        }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  maxHeight: '420px',
                  overflowY: 'auto'
                }}
              >
                {targetBoardColumn?.columnCards?.map((card, index) => (
                  <ColumnCard
                    cardPriority={card.priority}
                    cardDate={card.cardDate}
                    key={card.cardId}
                    cardName={card.cardName}
                    cardText={card.cardText}
                    cardIndex={index}
                    columnId={targetBoardColumn?.columnId}
                    cardId={card.cardId}
                    boardId={boardId}
                  />
                ))}
              </Box>

              <Box sx={{ my: 2 }}>
                <AddNewItem
                  toggleButtonText="Add card"
                  functionName="addCard"
                  columnId={columnId}
                  boardId={boardId}
                  dark
                />
              </Box>
            </>
          )}
          {hide && <DropPlace />}
        </ColumnContainer>
        <ColumnModal
          changeColumnPriority={changeColumnPriority}
          changeColumnTitle={changeColumnTitle}
          columnName={targetBoardColumnName}
          activeItem={columnPriority}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          onDelete={deleteColumnFunc}
        />
      </>
    );
  }
);
