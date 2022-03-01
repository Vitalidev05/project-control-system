import React, { memo, useMemo } from 'react';
import { Props } from './types';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../../../theme';

export const AddUser = memo(({ variant }: Props) => {
  const bgcolor = useMemo(() => {
    if (variant === 'low') return theme.palette.primary.light;
    if (variant === 'medium') return theme.palette.info.light;
    if (variant === 'high') return theme.palette.secondary.light;
    return theme.palette.grey[300];
  }, [variant]);

  const color = useMemo(() => {
    if (variant === 'low') return theme.palette.primary.main;
    if (variant === 'medium') return theme.palette.info.main;
    if (variant === 'high') return theme.palette.secondary.main;
    return theme.palette.grey[600];
  }, [variant]);

  return (
    <Box>
      {variant === 'new' && (
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: 1,
            border: '1px dashed lightgray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AddIcon sx={{ color: 'lightgray', fontSize: 16, fontWeight: 600 }} />
        </Box>
      )}
      {variant !== 'new' && (
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: 1,
            bgcolor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box sx={{ color }}>U</Box>
        </Box>
      )}
    </Box>
  );
});
