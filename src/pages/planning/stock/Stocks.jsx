import {
  Box,
  Button,
  Container,
  Dialog as MuiDialog,
  DialogContent,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
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

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Matcode</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            ) : (
              <TableBody>
                {stock.map((data) => (
                  <TableRow key={data.matcode}>
                    <TableCell>{data.matcode}</TableCell>
                    <TableCell>{data.title}</TableCell>

                    <TableCell>{data.qty}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Stocks;
