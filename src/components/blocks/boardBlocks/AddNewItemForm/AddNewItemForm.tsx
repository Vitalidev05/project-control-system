import React, { useState } from 'react';

import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput
} from '../../../../assets/stylesheets/styles';
import useFocus from '../../../../utils/useFocus';

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const AddNewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(text);
    }
  };

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
