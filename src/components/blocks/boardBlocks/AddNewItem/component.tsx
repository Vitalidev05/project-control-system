import React, { memo } from 'react';

import { AddItemButton } from '../../../../assets/stylesheets/styles';
import { AddNewItemForm } from '../AddNewItemForm';
import { useAddNewItem } from './hook';

import { Props } from './types';
import { Box, Button } from '@mui/material';

export const AddNewItem = memo(
  ({ functionName, toggleButtonText, dark, boardId, columnId }: Props) => {
    const { onAdd, setShowForm, showForm } = useAddNewItem({
      columnId,
      boardId,
      functionName
    });

    if (showForm) {
      return <AddNewItemForm onAdd={onAdd} />;
    }

    return (
      <Box>
        <Button
          onClick={() => setShowForm(true)}
          color="warning"
          variant="text"
          sx={{ textTransform: 'none', width: '100%', my: 2 }}
        >
          {toggleButtonText}
        </Button>
        {/*<AddItemButton dark={dark} onClick={() => setShowForm(true)}>*/}
        {/*  {toggleButtonText}*/}
        {/*</AddItemButton>*/}
      </Box>
    );
  }
);
