import { Box, Container } from '@mui/material'
import React from 'react'
import DataEntry from '../dashboard/dataEntry/DataEntry'

const DashboardTemplate = () => {
  return (
    <Container maxWidth="100%">
      <div>DashboardTemplate</div>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        {/* Add other navigation tabs of dahboard here */}

        <DataEntry />
      </Box>
    </Container>
  )
}

export default DashboardTemplate
