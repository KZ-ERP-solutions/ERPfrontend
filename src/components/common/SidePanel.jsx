import {
  Box, Divider, Link, List, ListItem, Typography,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function SidePanel() {
  const location = useLocation();
  const deptName = location.pathname.split('/')[1];
  const deptNameCased = deptName.charAt(0).toUpperCase() + deptName.slice(1); // has to be changed to a sentence case => title case fn

  const commonNavigationLinks = [
    { name: 'Dashboard', path: `/${deptName}/dashboard` },
    { name: 'Orders', path: `/${deptName}/orders` },
  ];

  return (
    <Box height="100vh" width="15rem" sx={{ bgcolor: '#0f1a34' }}>
      <Typography
        variant="h5"
        sx={{
          width: '100%',
          height: '5rem',
          fontWeight: 600,
          color: 'white',
          bgcolor: '#182444',
          display: 'flex',
          paddingLeft: '20px',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {deptNameCased}
      </Typography>

      {/* <img
        src="https://i.postimg.cc/TY71f8sF/biterp-low-resolution-logo-color-on-transparent-background.png"
        border="0"
        alt="logo" style={{width:'15rem', height:"4rem",padding:'20px 30px'}}
      /> */}

      <List sx={{ padding: '0px' }}>
        {commonNavigationLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              underline="none"
              color="tertiary"
              to={item.path}
              component={RouterLink}
              sx={{
                fontWeight: 300,
                fontSize: '1.1rem',
                color: 'white',
                px: 4,
                py: 1,
                width: '100%',
                bgcolor: String(location.pathname).includes(item.path)
                  ? '#091023'
                  : 'transparent',
                '&:hover': {
                  bgcolor: String(location.pathname).includes(item.path)
                    ? '#091023'
                    : '#091023',
                },
              }}
            >
              {item.name}
            </Link>
          </ListItem>
        ))}
        <Divider sx={{ bgcolor: '#182444', height: '3px' }} />

        {/* add rest of the dept menu link here as conditioned rendering */}
        {deptName === 'planning' && (
          <>
            {/* <ListItem disablePadding>
             <Link
                underline="none"
                color="tertiary"
                to={'/planning/bom'}
                component={RouterLink}
                sx={{
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  px: 4,
                  py: 1,
                  width: '100%',
                  bgcolor: String(location.pathname).includes('/planning/bom')
                    ? '#091023'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes('/planning/bom')
                      ? '#091023'
                      : '#091023',
                  },
                }}>
                BOM
              </Link>
            </ListItem> */}
            <ListItem disablePadding>
              <Link
                underline="none"
                color="tertiary"
                to="/planning/products"
                component={RouterLink}
                sx={{
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  color: 'white',
                  px: 4,
                  py: 1,
                  width: '100%',
                  bgcolor: String(location.pathname).includes(
                    '/planning/products',
                  )
                    ? '#091023'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes(
                      '/planning/products',
                    )
                      ? '#091023'
                      : '#091023',
                  },
                }}
              >
                Products
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                underline="none"
                color="tertiary"
                to="/planning/materials"
                component={RouterLink}
                sx={{
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  color: 'white',
                  px: 4,
                  py: 1,
                  width: '100%',
                  bgcolor: String(location.pathname).includes(
                    '/planning/materials',
                  )
                    ? '#091023'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes(
                      '/planning/materials',
                    )
                      ? '#091023'
                      : '#091023',
                  },
                }}
              >
                Materials
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                underline="none"
                color="tertiary"
                to="/planning/stocks"
                component={RouterLink}
                sx={{
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  color: 'white',
                  px: 4,
                  py: 1,
                  width: '100%',
                  bgcolor: String(location.pathname).includes(
                    '/planning/stocks',
                  )
                    ? '#091023'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes(
                      '/planning/stocks',
                    )
                      ? '#091023'
                      : '#091023',
                  },
                }}
              >
                Stocks
              </Link>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );
}

export default SidePanel;
