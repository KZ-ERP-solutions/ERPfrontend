import { Container } from '@mui/material'
import React from 'react'
import SidePanel from '../components/common/SidePanel'
import DashboardTemplate from '../components/departments/marketing/Templates/DashboardTemplate'

const Marketing = () => {
  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
      <SidePanel />
      <DashboardTemplate />
    </Container>
  )
}

export default Marketing
