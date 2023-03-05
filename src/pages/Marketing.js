import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SidePanel from '../components/common/SidePanel'
import Orders from '../components/departments/marketing/dashboard/orders/Orders'
import DashboardTemplate from '../components/departments/marketing/Templates/DashboardTemplate'

const Marketing = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/marketing/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
      <SidePanel />

      {/* marketing routes  */}
      <Routes>
        <Route path="/dashboard" element={<DashboardTemplate />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Container>
  )
}

export default Marketing
