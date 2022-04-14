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
import { ChoosePriority } from '../../../controls/ChoosePriority';

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
    handleCloseModal,
    cardPriority
  }: CardMenuProps) => {
    const {
      text,
      closePopupFunc,
      deleteCardFunc,
      changeTextFunc,
      submit,
      changeTitleFunc,
      title,
      priority,
      setPriority
    } = useCardModal({
      cardId,
      cardText,
      columnId,
      boardId,
      closePopup,
      cardPriority,
      cardTitle: cardName,
      cardDate
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
                  value={title}
                  onChange={changeTitleFunc}
                />
              </Box>

              <Box>
                <TextField
                  id="outlined-basic"
                  label="Comment"
                  variant="outlined"
                  multiline
                  sx={{ width: '100%' }}
                  value={text}
                  onChange={changeTextFunc}
                />
              </Box>
              <ChoosePriority
                activeItem={priority}
                setActiveItem={setPriority}
              />
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Date:</Typography>
                <Box>{cardDate}</Box>
              </Box>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Button variant="outlined" color="success" onClick={submit}>
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
