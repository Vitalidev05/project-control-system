import React, { memo } from 'react';

import { AddNewItemForm } from '../AddNewItemForm';
import { useAddNewItem } from './hook';

import { Props } from './types';
import { Box, Button } from '@mui/material';

export const AddNewItem = memo(
  ({
    functionName,
    toggleButtonText,
    boardId,
    columnId,
    variant = 'text'
  }: Props) => {
    const { onAdd, setShowForm, showForm, handleClose } = useAddNewItem({
      columnId,
      boardId,
      functionName
    });

    if (showForm) {
      return (
        <AddNewItemForm
          close={handleClose}
          onAddText={toggleButtonText}
          onAdd={onAdd}
        />
      );
    }

    return (
      <Box>
        <Button
          onClick={() => setShowForm(true)}
          color="warning"
          variant={variant}
          sx={{ textTransform: 'none', width: '100%' }}
        >
          {toggleButtonText}
        </Button>
      </Box>
    );
  }
);
