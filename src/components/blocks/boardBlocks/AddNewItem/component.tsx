import React from 'react';

import { AddItemButton } from '../../../../assets/stylesheets/styles';
import { AddNewItemForm } from '../AddNewItemForm';
import { useAddNewItem } from './hook';

import { Props } from './types';

export const AddNewItem = ({
  functionName,
  toggleButtonText,
  dark,
  boardId,
  columnId
}: Props) => {
  const { onAddColumn, onAddTask, setShowForm, showForm } = useAddNewItem();

  if (showForm) {
    return (
      <AddNewItemForm
        onAdd={(itemText) => {
          // eslint-disable-next-line no-lone-blocks, @typescript-eslint/no-unused-expressions
          {
            functionName === 'addColumn'
              ? onAddColumn(itemText, boardId)
              : onAddTask(itemText, boardId, columnId || '1');
          }
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
