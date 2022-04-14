import React, { memo, useMemo } from 'react';
import { Props } from './types';
import { theme } from '../../../theme';
import { Box } from '@mui/material';

export const CardPriorityIndicator = memo(({ variant }: Props) => {
  const bgcolor = useMemo(() => {
    if (variant === 'low') return theme.palette.primary.main;
    if (variant === 'medium') return theme.palette.info.main;
    if (variant === 'high') return theme.palette.secondary.main;
    return theme.palette.grey[600];
  }, [variant]);

  return (
    <Box>
      <Box
        sx={{
          width: 45,
          height: 3,
          bgcolor
        }}
      />
    </Box>
  );
});
