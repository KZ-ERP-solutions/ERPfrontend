import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import OrdersRoutes from '../../components/common/orders/OrdersRoutes';
import SidePanel from '../../components/common/SidePanel';
import ErrorPage from '../ErrorPage';
import Materials from './Materials';
import Products from './Products';
import Dashboard from '../Dashboard';
import Stocks from './Stocks';

function Planning() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/planning') navigate('/planning/dashboard');
  }, []);
  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
      <SidePanel />

      {/* planning routes  */}
      <Box flexGrow={1}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders/*" element={<OrdersRoutes />} />
          {/* <Route exact path="/bom" element={<BOM />} /> */}
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/materials" element={<Materials />} />
          <Route exact path="/stocks" element={<Stocks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Planning;
