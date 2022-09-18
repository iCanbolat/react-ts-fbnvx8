import { Box, Card, Grid, Typography, Button, IconButton } from '@mui/material';
import * as React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header() {
  return (
    <Box sx={{ display: 'flex' }}>
      
      {/* Left Items */}
      <Box sx={{ width: '100%', display: 'flex' }}>
        <WarningAmberIcon
          sx={{
            border: '1px solid #E0DFE6',
            borderRadius: '33px',
            fontSize: '17px',
            padding: '10px',
          }}
        />

        <Typography sx={{ pt: 0.6, pl: 1, fontWeight: 600, fontSize: '16px' }}>
          Risk Quadrant
        </Typography>

        <IconButton sx={{ bottom: '3px' }}>
          <HelpOutlineIcon sx={{ fontSize: '16.7px' }} />
        </IconButton>
      </Box>

      {/* Right Item */}

      <Box sx={{ flexShrink: 0 }}>
        <IconButton sx={{ bottom: '6.5px' }}>
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
