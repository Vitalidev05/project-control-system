import React, { memo, forwardRef } from 'react';
import { Box } from '@mui/material';
import { DragPreviewContainerColumn } from '../../../assets/stylesheets/styles';

export const CardContainer: React.FC = memo(({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        cursor: 'pointer',
        marginBottom: '0.5rem',
        padding: '0.5rem 1rem',
        height: '110px',
        maxWidth: '300px',
        borderRadius: 1,
        border: '1px solid lightgrey',
        boxShadow: '#091e4240 0px 1px 0px 0px'
      }}
    >
      {children}
    </Box>
  );
});
