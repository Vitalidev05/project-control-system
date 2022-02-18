import React, { useState } from 'react';
import useFocus from '../../../../utils/useFocus';
import { HookProps } from './types';

export const useAddNewItemForm = ({ onAdd }: HookProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(text);
    }
  };
  return {
    setText,
    text,
    inputRef,
    handleAddText
  };
};
