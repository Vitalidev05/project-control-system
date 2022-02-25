import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';

export const BoardContainer: React.FC<{
  boardName: string;
  boardColor: string;
}> = memo(({ children, boardName }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        bgcolor: 'background.default',
        height: 'calc(100% - 95px)',
        // py: 1,
        px: 4,
        // my: 1,
        pb: 5
      }}
    >
      <Box
        sx={{ display: 'flex', pt: 3, width: '100%', maxWidth: 1440, gap: 3 }}
      >
        <Box
          sx={{
            bgcolor: 'primary.main',
            height: 42,
            width: 42,
            borderRadius: 1
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 600 }}>{boardName}</Typography>
          <Typography sx={{ color: 'text.secondary' }} variant="caption">
            userName
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 1440,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flex: 1,
          gap: 2,
          pr: 2,
          // minHeight: '100%',
          overflowX: 'auto',
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px #e7e7e7',
            borderRadius: '0.3rem',
            outline: 'none'
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: '#e5e5e5',
            border: '1px solid #e5e5e5',
            borderRadius: '0.3rem',
            outline: 'none'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            cursor: 'pointer',
            bgcolor: '#e4e4e4',
            border: '1px solid #b7b4b4',
            outline: 'none'
          },
          '&::-webkit-scrollbar': {
            height: '0.6rem',
            outline: 'none'
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
});
