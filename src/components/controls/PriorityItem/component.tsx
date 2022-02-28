import React, { memo, useMemo } from 'react';
import { Props } from './types';
import { PriorityIndicator } from '../PriorityIndicator';
import { Box, Typography } from '@mui/material';
import { theme } from '../../../theme';

export const PriorityItem = memo(({ isActive, variant }: Props) => {
  const bgcolor = useMemo(() => {
    if (variant === 'low') return theme.palette.primary.light;
    if (variant === 'medium') return theme.palette.info.light;
    if (variant === 'high') return theme.palette.secondary.light;
    return theme.palette.grey[200];
  }, [variant]);

  const borderColor = useMemo(() => {
    if (variant === 'low') return theme.palette.primary.main;
    if (variant === 'medium') return theme.palette.info.main;
    if (variant === 'high') return theme.palette.secondary.main;
    return theme.palette.grey[600];
  }, [variant]);

  return (
    <Box
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        bgcolor,
        py: 0.5,
        px: 1,
        borderRadius: 5,
        border: isActive ? `${2}px solid ${borderColor}` : ''
      }}
    >
      <PriorityIndicator width={1.8} variant={variant} />
      <Typography>{variant}</Typography>
    </Box>
  );
});
