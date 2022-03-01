import React, { memo } from 'react';
// import { Footer } from '../../blocks/Footer';
import { Header } from '../../blocks/Header';
import { Box } from '@mui/material';
import { Routes } from 'react-router';

export const ProjectContainer: React.FC = memo(
  ({ children }): JSX.Element => (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1, display: 'flex' }}>
        <Routes>{children}</Routes>
      </Box>
      {/*<FooterContainer>*/}
      {/*  <Footer />*/}
      {/*</FooterContainer>*/}
    </Box>
  )
);
