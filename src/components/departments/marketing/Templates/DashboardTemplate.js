import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataEntry from '../dashboard/dataEntry/DataEntry'
import orders from '../dashboard/orders.json'

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
        <Typography variant="body2" component={'div'}>
          <code>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(orders, undefined, 2)}
            </pre>
          </code>
        </Typography>
      </Box>
    </Container>
  )
}

export default DashboardTemplate
