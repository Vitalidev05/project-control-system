import React from 'react';

import {
  AppContainer,
  HeaderContainer,
  FooterContainer,
  PageContainer
} from '../../../assets/stylesheets/styles';
import { Footer } from '../../blocks/Footer';
import { Header } from '../../blocks/Header';

interface IElements {
  children?: JSX.Element;
}

export const ProjectContainer = (props: IElements): JSX.Element => (
  <PageContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <AppContainer>{props.children}</AppContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </PageContainer>
);
