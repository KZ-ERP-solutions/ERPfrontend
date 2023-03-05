import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navigationLinks = [
  { name: 'Dashboard', path: '/marketing/dashboard' },
  { name: 'Orders', path: '/marketing/orders' },
]

const SidePanel = () => {
  const location = useLocation()

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
        {navigationLinks.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <Link
              underline="none"
              color="tertiary"
              to={item.path}
              component={RouterLink}
              sx={{
                fontWeight: 500,
                fontSize: '1.1rem',
                color: 'text.primary',
                px: 4,
                py: 1.5,
                width: '12rem',
                my: 0.5,
                bgcolor:
                  location.pathname === item.path
                    ? 'tertiary.light'
                    : 'transparent',
                '&:hover': {
                  bgcolor:
                    location.pathname === item.path
                      ? 'tertiary.main'
                      : 'tertiary.light',
                },
              }}>
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SidePanel
