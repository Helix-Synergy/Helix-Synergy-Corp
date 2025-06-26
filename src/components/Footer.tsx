import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      background: '#232B33',
      color: '#A7B6C2',
      textAlign: 'center',
      py: 2,
      position: 'relative',
      bottom: 0,
      borderTop: '1px solid #202B33',
      fontSize: '0.95rem',
      letterSpacing: 1,
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
    </Typography>
  </Box>
);

export default Footer; 