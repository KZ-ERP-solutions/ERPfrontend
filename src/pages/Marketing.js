import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SidePanel from '../components/common/SidePanel'
import OrdersRoutes from '../components/common/orders/OrdersRoutes'
import DashboardTemplate from '../components/marketing/Templates/DashboardTemplate'
import ErrorPage from './ErrorPage'

const Marketing = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname === '/marketing') navigate('/marketing/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
      <SidePanel />

      {/* marketing routes  */}
      <Routes>
        <Route path="/dashboard" element={<DashboardTemplate />} />
        <Route path="/orders/*" element={<OrdersRoutes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  )
}

export default Marketing
