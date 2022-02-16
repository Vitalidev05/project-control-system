import React, { useState } from 'react';

import { AddItemButton } from '../../../assets/stylesheets/styles';
import { AddNewItemForm } from '../AddNewItemForm';

interface AddNewItemProps {
  functionName: string;
  boardId: string;
  toggleButtonText: string;
  columnId?: string;
  dark?: boolean;
}

type Props = AddNewItemProps;

export const AddNewItem = (props: Props) => {
  const [showForm, setShowForm] = useState(false);
  const { functionName, toggleButtonText, dark } = props;

  const onAddColumn: (text: string, id: string) => void = () => {
    return;
  }; // todo

  const onAddTask: (
    text: string,
    id: string,
    columnId: string
  ) => void = () => {
    return;
  }; // todo

  if (showForm) {
    return (
      <AddNewItemForm
        onAdd={(itemText) => {
          // eslint-disable-next-line no-lone-blocks, @typescript-eslint/no-unused-expressions
          {
            functionName === 'addColumn'
              ? onAddColumn(itemText, props.boardId)
              : onAddTask(itemText, props.boardId, props.columnId || '1');
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
