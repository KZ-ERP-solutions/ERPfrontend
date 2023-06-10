import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import SidePanel from '../components/common/SidePanel';
import OrdersRoutes from '../components/common/orders/OrdersRoutes';
import Dashboard from './Dashboard';
import ErrorPage from './ErrorPage';

function Marketing() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/marketing') navigate('/marketing/dashboard');
  }, []);
  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
      <SidePanel />

      {/* marketing routes  */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders/*" element={<OrdersRoutes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default Marketing;
