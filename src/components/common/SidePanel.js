import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import React from 'react'

const SidePanel = () => {
  return (
    <Box
      height={'100vh'}
      width={'10rem'}
      sx={{ py: 2, bgcolor: (theme) => theme.palette.background.paper }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, textAlign: 'center', mb: 2 }}>
        Marketing
      </Typography>

      <List>
        {['Dashboard', 'Orders'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                px: 4,
                py: 1.5,
                my: 0.5,
                bgcolor: index === 0 ? 'tertiary.light' : 'transparent',
                '&:hover': {
                  bgcolor: index === 0 ? 'tertiary.main' : 'tertiary.light',
                },
              }}>
              <Link
                underline="none"
                color="tertiary"
                sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SidePanel
