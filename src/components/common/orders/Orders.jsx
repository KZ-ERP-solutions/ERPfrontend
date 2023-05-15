import React, { useEffect, useState } from 'react';
import {
  Box, LinearProgress, Typography, Container,
} from '@mui/material';
import MuiTable from './componenets/MuiTable';
import api from '../../../utils/api';
import SearchWrapper from './componenets/SearchWrapper';

const columns = [
  { id: 'woso_no', label: 'WO/SO No' },
  { id: 'woso_date', label: 'WO/SO Date' },
  { id: 'po_no', label: 'PO No' },
  // { id: 'consignee', label: 'Consignee' },
  { id: 'customer', label: 'Customer' },
  { id: 'item', label: 'Item' },
];

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.marketing.order
      .list()
      .then((res) => {
        console.log(res);
        setOrders(res?.length > 0 ? res : []);

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
        height: '100vh',
        maxHeight: '100vh',
        overflowY: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={600} sx={{ mt: 2 }}>
          Orders
        </Typography>
        <SearchWrapper orders={orders} />
      </Box>
      <Box my={1}>
        <MuiTable columns={columns} rows={orders} />
        {!loading && orders.length === 0 ? (
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
