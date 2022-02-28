import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { PriorityItem } from '../PriorityItem';
import { variants, Props } from './types';

const ChoosePriorityView = ({ activeItem, setActiveItem }: Props) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', mb: 2 }}>
      <Typography variant="h6">Choose priority:</Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {variants.map((priority) => (
          <Box key={priority} onClick={() => setActiveItem(priority)}>
            <PriorityItem
              variant={priority}
              isActive={priority === activeItem}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const ChoosePriority = memo(ChoosePriorityView);
