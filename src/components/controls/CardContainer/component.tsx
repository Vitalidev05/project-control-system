import React, { memo } from 'react';
import { Box } from '@mui/material';

export const CardContainer: React.FC = memo(({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        height: '110px',
        maxWidth: '300px',
        borderRadius: 1,
        border: '1px solid lightgrey'
      }}
    >
      {children}
    </Box>
  );
});
