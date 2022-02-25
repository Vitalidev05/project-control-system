import React, { memo } from 'react';
import {
  NewItemFormContainer,
  NewItemInput
} from '../../../../assets/stylesheets/styles';
import { useAddNewItemForm } from './hook';

import { Props } from './types';
import { Box, Button, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export const AddNewItemForm = memo(({ onAdd, onAddText, close }: Props) => {
  const { setText, text, handleAddText, inputRef } = useAddNewItemForm({
    onAdd
  });

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyPress={handleAddText}
      />
      <Box
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <Button
          disabled={!text?.length}
          color="warning"
          variant="outlined"
          onClick={() => onAdd(text)}
        >
          {onAddText}
        </Button>
        <IconButton onClick={close}>
          <ClearIcon />
        </IconButton>
      </Box>
    </NewItemFormContainer>
  );
});
