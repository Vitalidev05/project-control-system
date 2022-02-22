import React from 'react';
import { Box } from '@mui/material';

export const ColumnContainer: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: '330px',
        px: 2,
        bgcolor: '#fff',
        borderRadius: 1,
        boxShadow: '0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      {children}
    </Box>
  );
};
