import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import OrdersRoutes from '../components/common/orders/OrdersRoutes'
import SidePanel from '../components/common/SidePanel'
import ErrorPage from './ErrorPage'

const Planning = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname === '/planning') navigate('/planning/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
      <SidePanel />

      {/* planning routes  */}
      <Routes>
        {/* <Route path="/dashboard" element={<DashboardTemplate />} /> */}
        <Route path="/orders/*" element={<OrdersRoutes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  )
}

export default Planning
