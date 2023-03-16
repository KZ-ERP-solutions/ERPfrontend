import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function ComingSoon() {
  return (
    <Box 
  sx={{
    width: "400px",
    height:"320px",
    backgroundColor: 'primary.dark',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}>
  <Typography style={{
    textAlign:"center",
    color:"white"
  }}>
    Rolling Out Soon
  </Typography>
  <CircularProgress sx={{ color: 'white', mt: 2 }} />
</Box>

  );
}