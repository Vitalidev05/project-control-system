import React from 'react';

import './Footer.scss';
import '../../icons/BaseIcon/BaseIcon.scss';
import {
  ManFooterIcon1,
  ManFooterIcon2,
  RSSFooterIcon,
  WomanFooterIcon1,
  WomanFooterIcon2
} from '../../icons';

export const Footer = () => (
  <footer className={'footer'}>
    <div className={'footer__icons_wrapper'}>
      <div className={'footer__title'}>DevTeam:</div>
      <div className={'footer__icon'}>
        <a className={'footer__link'} href="https://github.com/riatitova">
          <WomanFooterIcon1 className={'size_xs'} />
        </a>
      </div>
      <div className={'footer__icon'}>
        <a className={'footer__link'} href="https://github.com/KantyshVitali">
          <ManFooterIcon1 className={'size_xs'} />
        </a>
      </div>
      <div className={'footer__icon'}>
        <a className={'footer__link'} href="https://github.com/grntea">
          <WomanFooterIcon2 className={'size_xs'} />
        </a>
      </div>
      <div className={'footer__icon'}>
        <a className={'footer__link'} href="https://github.com/tritonJS826">
          <ManFooterIcon2 className={'size_xs'} />
        </a>
      </div>
    </div>
    <div className={'footer__logo'}>
      <a className={'footer__link'} href="https://rs.school/js/">
        <RSSFooterIcon className={'footer__icon'} />
      </a>
    </div>
  </footer>
);
