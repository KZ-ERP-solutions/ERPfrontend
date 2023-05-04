import {
  Box, Divider, Link, List, ListItem, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import api from '../../utils/api';

function SidePanel() {
  const location = useLocation();
  const deptName = location.pathname.split('/')[1];
  const deptNameCased = deptName.charAt(0).toUpperCase() + deptName.slice(1); // has to be changed to a sentence case => title case fn

  const commonNavigationLinks = [
    { name: 'Dashboard', path: `/${deptName}/dashboard` },
    { name: 'Orders', path: `/${deptName}/orders` },
  ];
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    api.planning.notification
      .list()
      .then((res) => {
        setNotification(res.list);
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState(false);

  useEffect(() => {
    if (notification && notification.length > 0) {
      setData(notification.length);
    } else {
      setData(false);
    }
  }, [notification]);
  console.log(data);
  return (
    <Box height="100vh" width="10rem" sx={{ py: 2, bgcolor: 'white' }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, textAlign: 'center', mb: 2 }}
      >
        {deptNameCased}
      </Typography>

      <List>
        {commonNavigationLinks.map((item) => (
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
                bgcolor: String(location.pathname).includes(item.path)
                  ? 'tertiary.light'
                  : 'transparent',
                '&:hover': {
                  bgcolor: String(location.pathname).includes(item.path)
                    ? 'tertiary.main'
                    : 'tertiary.light',
                },
              }}
            >
              {item.name}
            </Link>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />

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
                  py: 1.5,
                  width: '12rem',
                  my: 0.5,
                  bgcolor: String(location.pathname).includes('/planning/bom')
                    ? 'tertiary.light'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes('/planning/bom')
                      ? 'tertiary.main'
                      : 'tertiary.light',
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
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  px: 4,
                  py: 1.5,
                  width: '12rem',
                  my: 0.5,
                  bgcolor: String(location.pathname).includes(
                    '/planning/products',
                  )
                    ? 'tertiary.light'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes(
                      '/planning/products',
                    )
                      ? 'tertiary.main'
                      : 'tertiary.light',
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
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  px: 4,
                  py: 1.5,
                  width: '12rem',
                  my: 0.5,
                  bgcolor: String(location.pathname).includes(
                    '/planning/materials',
                  )
                    ? 'tertiary.light'
                    : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes(
                      '/planning/materials',
                    )
                      ? 'tertiary.main'
                      : 'tertiary.light',
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
                to="/planning/notification"
                component={RouterLink}
                sx={{
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  px: 4,
                  py: 1.5,
                  width: '10rem',
                  my: 0.5,
                  bgcolor: data
                    ? '#FA9884'
                    : String(location.pathname).includes(
                      '/planning/notification',
                    )
                      ? 'tertiary.light'
                      : 'transparent',
                  '&:hover': {
                    bgcolor: String(location.pathname).includes(
                      '/planning/notification',
                    )
                      ? 'tertiary.main'
                      : 'tertiary.light',
                  },
                }}
              >
                Notifications
              </Link>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );
}

export default SidePanel;
