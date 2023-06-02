import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../../utils/api';
import Notification from './StockAlert';
import StockAdd from './StockAdd';
import StockLog from './StockLog';
import Edit from './Edit';

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
          <h2
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              textAlign: 'left',
              margin: '0px',
            }}
          >
            Stocks
          </h2>
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
