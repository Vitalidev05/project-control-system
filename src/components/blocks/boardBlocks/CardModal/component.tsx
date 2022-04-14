import React, { memo } from 'react';

import { useCardModal } from './hook';
import { CardMenuProps } from './types';
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography
} from '@mui/material';
import { style } from '../ColumnModal/style';
import CloseIcon from '@mui/icons-material/Close';

export const CardModal: React.FC<CardMenuProps> = memo(
  ({
    cardId,
    cardText,
    columnId,
    cardName,
    cardDate,
    closePopup,
    boardId,
    openModal,
    handleCloseModal
  }: CardMenuProps) => {
    const { closePopupFunc, deleteCardFunc, changeTextFunc } = useCardModal({
      cardId,
      cardText,
      columnId,
      boardId,
      closePopup
    });

    return (
      <>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={style}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="h6" component="h2">
                Edit card
              </Typography>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon sx={{ color: '#000' }} />
              </IconButton>
            </Box>
            <Box
              sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 4 }}
            >
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Card Title"
                  variant="outlined"
                  sx={{ width: '100%' }}
                  value={cardName}
                  // onChange={(e) => setColumnTitle(e.target.value)}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                color="success"
                onClick={handleCloseModal}
              >
                Save changes
              </Button>
              <Button variant="outlined" color="error" onClick={deleteCardFunc}>
                Delete Card
              </Button>
            </Box>
          </Box>
        </Modal>
        {/*<div className={'popup'}>*/}
        {/*  <div className={'card__menu_visible'}>*/}
        {/*    <h3 className={'card__name'}>*/}
        {/*      Current task:*/}
        {/*      {taskName}*/}
        {/*    </h3>*/}
        {/*    <div>*/}
        {/*      <h3>Description: </h3>*/}
        {/*      <textarea*/}
        {/*        className={'card__description'}*/}
        {/*        placeholder="Card Description"*/}
        {/*        defaultValue={taskText}*/}
        {/*        onChange={changeTextFunc}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div className={'card__date'}>*/}
        {/*      <h4>Date: </h4>*/}
        {/*      <span>{(taskDate || '').toString()}</span>*/}
        {/*    </div>*/}
        {/*    <div className={'card__buttons'}>*/}
        {/*      <button*/}
        {/*        type="button"*/}
        {/*        className={'card__button'}*/}
        {/*        onClick={deleteCardFunc}*/}
        {/*      >*/}
        {/*        Delete card*/}
        {/*      </button>*/}
        {/*      <button*/}
        {/*        type="button"*/}
        {/*        className={'card__button'}*/}
        {/*        onClick={closePopupFunc}*/}
        {/*      >*/}
        {/*        Close*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </>
    );
  }
);
