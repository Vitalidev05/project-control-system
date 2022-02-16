import React from 'react';

import './Search.scss';
import '../../icons/BaseIcon/BaseIcon.scss';
import { SearchHeaderIcon } from '../../icons';

export const Search = () => (
  <div className={'search__wrapper'}>
    <i className={'search__icon'}>
      <SearchHeaderIcon className={'size_xs'} />
    </i>

    <input
      type="search"
      placeholder="Search..."
      className={'search__input'}
      // onChange={() => console.log('change')}
    />
  </div>
);
