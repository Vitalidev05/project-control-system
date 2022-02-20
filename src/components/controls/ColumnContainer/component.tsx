import React, { memo, forwardRef } from 'react';
import { Box } from '@mui/material';
import { DragPreviewContainerColumn } from '../../../assets/stylesheets/styles';

export const ColumnContainer: React.FC = memo(({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '18.5rem',
        // minHeight: '40px',
        px: 2,
        // color: #000,
        // backgroundColor: '#fbfafa',
        bgcolor: '#fff',
        borderRadius: 1,
        boxShadow: '0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      {children}
    </Box>
  );
});
