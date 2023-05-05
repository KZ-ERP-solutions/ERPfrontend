import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataEntry from '../components/marketing/dataEntry/DataEntry';
import BOM from '../components/planning/BOM';

function Dashboard() {
  const location = useLocation();
  const deptName = location.pathname.split('/')[1];
  // state used to forcefully update component after data entry
  // eslint-disable-next-line no-unused-vars
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Container maxWidth="100%" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
        {/* Add other navigation tabs of dahboard here */}
        {deptName === 'planning' && <BOM />}
        <DataEntry updateList={() => setForceUpdate((prev) => !prev)} />
        <NotificationsIcon
          sx={{ height: 'auto', color: '#48466d', fontSize: '30px' }}
        />
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
