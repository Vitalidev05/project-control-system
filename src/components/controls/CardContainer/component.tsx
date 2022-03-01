import React, { memo } from 'react';
import { Box } from '@mui/material';

export const CardContainer: React.FC = memo(({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        gap: 1,
        cursor: 'pointer',
        padding: 2,
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
