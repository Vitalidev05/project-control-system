import React, { memo, useMemo } from 'react';
import { Box } from '@mui/material';
import { Props } from './types';
import { theme } from '../../../theme';

export const PriorityIndicator = memo(({ variant }: Props) => {
  const borderColor = useMemo(() => {
    if (variant === 'low') return theme.palette.primary.main;
    if (variant === 'medium') return theme.palette.info.main;
    if (variant === 'high') return theme.palette.secondary.main;
    return theme.palette.grey[600];
  }, [variant]);

  return (
    <Box>
      <Box
        sx={{
          width: 11,
          height: 11,
          bgcolor: '#fff',
          border: `3px solid ${borderColor}`,
          borderRadius: '50%'
        }}
      />
    </Box>
  );
});
