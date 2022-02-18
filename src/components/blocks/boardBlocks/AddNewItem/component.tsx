import React, { memo } from 'react';

import { AddItemButton } from '../../../../assets/stylesheets/styles';
import { AddNewItemForm } from '../AddNewItemForm';
import { useAddNewItem } from './hook';

import { Props } from './types';

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
      <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
        {toggleButtonText}
      </AddItemButton>
    );
  }
);
