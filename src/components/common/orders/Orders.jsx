import React, { useEffect, useState } from 'react';
import {
  Box, LinearProgress, Typography, Container,
} from '@mui/material';
import MuiTable from './componenets/MuiTable';
import api from '../../../utils/api';
import OrderSearch from './componenets/OrderSearch';

const columns = [
  { id: 'woso_no', label: 'WO/SO No' },
  { id: 'woso_date', label: 'WO/SO Date' },
  { id: 'po_no', label: 'PO No' },
  { id: 'consignee', label: 'Consignee' },
  { id: 'customer', label: 'Customer' },
  { id: 'item', label: 'Item' },
];

function Orders() {
  const [ordersMin, setOrdersMin] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  // function createData(
  //   id,
  //   woso_no,
  //   woso_date,
  //   po_no,
  //   consignee_org,
  //   customer,
  //   items
  // ) {
  //   return { id, woso_no, woso_date, po_no, consignee_org, customer, items }
  // }

  useEffect(() => {
    setLoading(true);
    api.marketing.order
      .list()
      .then((res) => {
        console.log(res);
        setOrders(res?.orders.length > 0 ? res.orders : []);
        setOrdersMin(
          res?.orders.length > 0
            ? res.orders.map((order, index) => {
              const newOrder = {
                id: index,
                orderId: order?.no, // temporary; should change to id
                woso_no: order?.no,
                woso_date: order?.date,
                po_no: order?.po_no,
                consignee_org: order?.consign_addr[0]?.org,
                customer: order?.customer,
                items:
                    order?.items?.length > 0
                      ? order.items.map((item) => item?.item).join(', ')
                      : '',
              };
              return newOrder;
            })
            : [],
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container
      maxWidth="100%"
      sx={{
        p: 2,
        maxHeight: '100vh',
        overflowY: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={600} sx={{ mt: 2 }}>
          Orders
        </Typography>
        <OrderSearch orders={orders} />
      </Box>
      <Box my={1}>
        <MuiTable columns={columns} rows={ordersMin} orderFull={orders} />
        {!loading && ordersMin.length === 0 ? (
          <Typography variant="body2" align="center" sx={{ my: 2 }}>
            <i>No orders data</i>
          </Typography>
        ) : null}
        {loading && <LinearProgress />}
      </Box>
    </Container>
  );
}

export default Orders;
