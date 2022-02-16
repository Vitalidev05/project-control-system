import React, { useState } from 'react';
import { postRequest } from '../../utils/fetchUtils';
import { URLS } from './types';

export const useAuth = () => {
  const [name, setName] = useState('');
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  const [password, setPassword] = useState('');
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setPassword(newName);
  };

  const signUp = () => {
    const body = JSON.stringify({
      name: name,
      password: password,
      boards: [
        {
          boardName: 'sadad',
          boardId: 'id1'
        }
      ]
    });

    const rawResponse = postRequest(URLS.postUser, body);
  };

  return {
    onChangeName,
    name,
    setName,
    signUp,
    onChangePassword,
    password
  };
};
