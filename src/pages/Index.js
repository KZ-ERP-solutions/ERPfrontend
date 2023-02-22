import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import React from 'react'
import theme from '../theme/theme'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 5, m: 5 }}>
        <Typography>Welcome to KEL</Typography>
        <Button variant="contained" color="primary" sx={{ mr: 4 }}>
          {'Guide me throw the app >'}
        </Button>
        <Button variant="outlined" color="secondary">
          Quit
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default Index
