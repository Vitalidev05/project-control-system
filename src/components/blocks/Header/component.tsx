import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Burger } from '../../controls/Burger';
import './Header.scss';
import { Menu } from '../../controls/Menu';
import { Search } from '../../controls/Search';
import '../../icons/BaseIcon/BaseIcon.scss';
import { HomeHeaderIcon } from '../../icons';
import { useHeader } from './hook';

export const Header = memo(() => {
  const { open, node, setOpen } = useHeader();

  return (
    <header className={'header'}>
      <div className={'header__icons_wrapper'}>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>

        <div className={'header__icon'}>
          <Link to="/" className={'header__link'}>
            <HomeHeaderIcon className={'size_sm'} />
          </Link>
        </div>

        <Search />
      </div>

      <div className={'header__title_wrapper'}>
        <h1 className={'header__title'}>Trello 2.0</h1>
      </div>
      <div className={'header__button_wrapper'}>
        <Link to="/boardList" className={'header__button'}>
          Your boards
        </Link>
      </div>
    </header>
  );
});
