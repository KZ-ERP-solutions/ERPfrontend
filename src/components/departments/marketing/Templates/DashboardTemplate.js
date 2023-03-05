import { Box, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import DataEntry from '../dashboard/dataEntry/DataEntry'

import Piechart from '../../../common/Dashboard/Piechart'
import LowStock from '../../../common/Dashboard/LowStock'
import Items from '../../../common/Dashboard/Items'
import Payment from '../../../common/Dashboard/Payment'
import EmployeeStatus from '../../../common/Dashboard/EmployeeStatus'
import ComingSoon from '../../../common/Dashboard/ComingSoon'

const DashboardTemplate = () => {
  // state used to forcefully update component after data entry
  // eslint-disable-next-line no-unused-vars
  const [forceUpdate, setForceUpdate] = useState(false)

  return (
    <Container maxWidth="100%" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        {/* Add other navigation tabs of dahboard here */}

        <DataEntry updateList={() => setForceUpdate((prev) => !prev)} />
      </Box>
      <Box
        sx={{
          overflowY: 'auto',
          height: '90vh',
          maxWidth: '80vw',
        }}>
        <Grid container spacing={2}>
          <Grid xs={4} >
            <Piechart />
          </Grid>
          <Grid xs={4} >
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
      </Box>
    </Container>
  )
}

export default DashboardTemplate
