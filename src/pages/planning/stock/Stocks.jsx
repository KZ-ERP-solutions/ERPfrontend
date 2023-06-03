import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogContent,
  styled,
  Typography,
  LinearProgress,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { v4 as uuidv4 } from 'uuid';
import api from '../../../utils/api';
import Notification from './StockAlert';
import StockAdd from './StockAdd';
import StockLog from './StockLog';
import Edit from './Edit';

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    overflowX: 'hidden',
  },
}));

function Stocks() {
  const [stock, setStock] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.planning.stock
      .list()
      .then((res) => {
        setLoading(false);
        console.log(res);
        setStock(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(`stock has ${err}`);
      });
  }, []);
  const columns = [
    { field: 'matcode', headerName: 'Matcode', type: 'number' },
    { field: 'qty', headerName: 'Quantity', type: 'number' },
    { field: 'date', headerName: 'Date' },
    { field: 'grn_no', headerName: 'GRN No', type: 'number' },
    { field: 'srn_no', headerName: 'SRN No', type: 'number' },
    { field: 'remarks', headerName: 'Remarks' },
  ];

  const rows = stock.map((item) => ({
    id: uuidv4(),
    matcode: item.matcode,
    qty: item.qty,
    date: item.date,
    grn_no: item.grn_no,
    srn_no: item.srn_no,
    remarks: item.remarks,
  }));

  return (
    <Box
      sx={{ height: '100vh', p: 4, bgcolor: (theme) => theme.palette.grey[50] }}
    >
      <Box sx={{ p: 3, bgcolor: '#fff' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Stocks
          </Typography>
          <div
            style={{
              textAlign: 'right',
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '10px',
            }}
          >
            <StockAdd />
            <Edit />
            <Button onClick={() => setOpen(true)} variant="contained">
              Low Stock
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogContent>
                <Notification />
              </DialogContent>
            </Dialog>
            <StockLog />
          </div>
        </Box>
      </Box>
      {loading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          sx={{ height: '47rem' }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 12 },
            },
          }}
          pageSizeOptions={[6, 12]}
          checkboxSelection
        />
      )}
    </Box>
  );
}

export default Stocks;
