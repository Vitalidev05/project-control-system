import React from 'react';
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput
} from '../../../../assets/stylesheets/styles';
import { useAddNewItemForm } from './hook';

import { Props } from './types';

export const AddNewItemForm = ({ onAdd }: Props) => {
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
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
