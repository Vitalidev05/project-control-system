import React from 'react';
import { Props } from './types';
import { useAuth } from './hook';

export const Authorization = ({ isAuth }: Props) => {
  const { onChangeName, name, onChangePassword, password, signUp } = useAuth();

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={onChangeName}
        value={name}
      />
      <input
        type="text"
        placeholder="password"
        onChange={onChangePassword}
        value={password}
      />
      <button type="submit" onClick={signUp}>
        Sign up
      </button>
      <span>isAuth: {isAuth ? 'authorized' : 'not authorized'}</span>
    </div>
  );
};
