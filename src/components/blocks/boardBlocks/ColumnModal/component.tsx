import React, { memo, useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  IconButton,
  TextField,
  Button
} from '@mui/material';
import { style } from './style';
import { Props } from './types';
import CloseIcon from '@mui/icons-material/Close';
import { ChoosePriority } from '../../../controls/ChoosePriority';
import { Priority } from '../../../../constants';

export const ColumnModal = memo(
  ({
    handleCloseModal,
    openModal,
    activeItem,
    columnName,
    onDelete
  }: Props) => {
    const [activeElement, setActiveElement] = useState<Priority>(activeItem);
    const [columnTitle, setColumnTitle] = useState<string>(columnName);

    const onSubmit = () => {
      console.log('activeElement', activeElement);
      console.log('columnTitle', columnTitle);
      // handleCloseModal()
    };

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
                  value={columnTitle}
                  onChange={(e) => setColumnTitle(e.target.value)}
                />
              </Box>
              <ChoosePriority
                activeItem={activeElement}
                setActiveItem={setActiveElement}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" color="success" onClick={onSubmit}>
                  Save changes
                </Button>
                <Button variant="outlined" color="error" onClick={onDelete}>
                  Delete Card
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </>
    );
  }
);
