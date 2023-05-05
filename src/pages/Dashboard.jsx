import {
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataEntry from '../components/marketing/dataEntry/DataEntry';
import BOM from '../components/planning/BOM';
import api from '../utils/api';

function Dashboard() {
  const location = useLocation();
  const deptName = location.pathname.split('/')[1];
  // state used to forcefully update component after data entry
  // eslint-disable-next-line no-unused-vars
  const [forceUpdate, setForceUpdate] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    api.planning.notification
      .list()
      .then((res) => {
        console.log(`alerts are${res}`);
        setAlerts(res.list);
      })
      .catch((err) => {
        console.log(`err(alert) are${err}`);
      });
  }, [anchorEl]);

  return (
    <Container maxWidth="100%" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
        {/* Add other navigation tabs of dahboard here */}
        {deptName === 'planning' && <BOM />}
        <DataEntry updateList={() => setForceUpdate((prev) => !prev)} />
        <IconButton
          id="button"
          onClick={handleClick}
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <NotificationsIcon
            sx={{ height: 'auto', color: '#48466d', fontSize: '30px' }}
          />
        </IconButton>
        <Menu
          id="menu"
          open={open}
          onClose={() => setAnchorEl(false)}
          anchorEl={anchorEl}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {alerts.map((data) => (
            <List>
              <ListItem key={data.matcode}>
                <ListItemText
                  primary="Low Stock"
                  secondary={(
                    <div style={{ display: 'inline' }}>
                      <p style={{ display: 'inline' }}>Quantity of Item </p>
                      <p style={{ display: 'inline', color: 'black' }}>
                        {data.matcode}
                      </p>
                      <p style={{ display: 'inline' }}>
                        {' '}
                        is currently below safe stock count
                        {' '}
                        <br />
                        <Link
                          style={{ textDecorationLine: 'none' }}
                          to="/planning/stocks"
                        >
                          View Stocks
                        </Link>
                        {' '}
                      </p>
                    </div>
                  )}
                />
              </ListItem>
            </List>
          ))}
        </Menu>
      </Box>
      {/* <Box
        sx={{
          overflowY: 'auto',
          height: '90vh',
          maxWidth: '80vw',
        }}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Piechart />
          </Grid>
          <Grid xs={4}>
            <EmployeeStatus />
          </Grid>
          <Grid xs={4}>
            <Items />
          </Grid>
          <Grid container direction="row" item xs={12} spacing={2}>
            <Grid xs={4}>
              <LowStock />
            </Grid>
            <Grid xs={4}>
              <Payment />
            </Grid>
            <Grid xs={4}>
              <ComingSoon />
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
}

export default Dashboard;
