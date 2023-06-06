import {
  Box, Divider, Link, List, ListItem, Typography,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  MdOutlineDashboard,
  MdOutlineAllInbox,
  MdDesignServices,
  MdOutlineCategory,
  MdLeaderboard,
  MdLocalAtm,
  MdShoppingCart,
} from 'react-icons/md';
import Logout from './logout/Logout';

function SidePanel() {
  const location = useLocation();
  const deptName = location.pathname.split('/')[1];
  const deptNameCased = deptName.charAt(0).toUpperCase() + deptName.slice(1); // has to be changed to a sentence case => title case fn

  const commonLinks = [
    {
      name: 'Dashboard',
      path: `/${deptName}/dashboard`,
      icon: <MdOutlineDashboard />,
    },
    {
      name: 'Orders',
      path: `/${deptName}/orders`,
      icon: <MdOutlineAllInbox />,
    },
  ];

  const planningLinks = [
    {
      name: 'Products',
      path: '/planning/products',
      icon: <MdOutlineCategory />,
    },
    {
      name: 'Materials',
      path: '/planning/materials',
      icon: <MdDesignServices />,
    },
    {
      name: 'Stocks',
      path: '/planning/stocks',
      icon: <MdLeaderboard />,
    },
    {
      name: 'Purchase Intent',
      path: '/planning/pi',
      icon: <MdLocalAtm />,
    },
    {
      name: 'Purchase Order',
      path: '/planning/po',
      icon: <MdShoppingCart />,
    },
  ];

  return (
    <Box
      height="100vh"
      width="17rem"
      sx={{ bgcolor: 'secondary.main', position: 'relative' }}
    >
      <Box
        sx={{
          width: '100%',
          height: '5rem',
          bgcolor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          px: 4,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontFamily="Patua One"
          fontWeight={400}
          color="#fff"
          letterSpacing="1px"
        >
          {deptNameCased}
        </Typography>
      </Box>

      {/* <img
        src="https://i.postimg.cc/TY71f8sF/biterp-low-resolution-logo-color-on-transparent-background.png"
        border="0"
        alt="logo" style={{width:'15rem', height:"4rem",padding:'20px 30px'}}
      /> */}

      <List sx={{ padding: '0px' }}>
        {/* common links */}
        {commonLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              underline="none"
              color="tertiary"
              to={item.path}
              component={RouterLink}
              sx={{
                fontWeight: String(location.pathname).includes(item.path)
                  ? 500
                  : 400,
                fontSize: '1.1rem',
                color: 'white',
                px: 4,
                py: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
                bgcolor: String(location.pathname).includes(item.path)
                  ? 'secondary.dark'
                  : 'transparent',
                '&:hover': {
                  bgcolor: String(location.pathname).includes(item.path)
                    ? 'secondary.dark'
                    : 'secondary.dark',
                },
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          </ListItem>
        ))}

        <Divider sx={{ bgcolor: 'secondary.light', height: '1px', my: 1 }} />
        {deptName === 'planning' && (
          <div>
            {/* planning links */}
            {planningLinks.map((item) => (
              <ListItem key={item.name} disablePadding>
                <Link
                  underline="none"
                  color="tertiary"
                  to={item.path}
                  component={RouterLink}
                  sx={{
                    fontWeight: String(location.pathname).includes(item.path)
                      ? 500
                      : 400,
                    fontSize: '1.1rem',
                    color: 'white',
                    px: 4,
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%',
                    bgcolor: String(location.pathname).includes(item.path)
                      ? 'secondary.dark'
                      : 'transparent',
                    '&:hover': {
                      bgcolor: String(location.pathname).includes(item.path)
                        ? 'secondary.dark'
                        : 'secondary.dark',
                    },
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </div>
        )}
      </List>
      <Box
        sx={{
          position: 'absolute',
          bottom: '1.5rem',
          left: 0,
          right: 0,
        }}
      >
        <Logout />
      </Box>
    </Box>
  );
}

export default SidePanel;
