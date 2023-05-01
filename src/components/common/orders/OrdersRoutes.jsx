import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './Order';
import Orders from './Orders';

function OrdersRoutes() {
  return (
    <Routes>
      <Route index element={<Orders />} />
      <Route path="/order" element={<Orders />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/order/:id/*" element={<Order />} />
    </Routes>
  );
}

export default OrdersRoutes;
