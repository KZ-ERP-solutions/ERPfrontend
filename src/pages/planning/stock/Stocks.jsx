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

function Stocks() {
  const [stock, setStock] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.planning.stock
      .list()
      .then((res) => {
        setLoading(true);
        console.log(`stock is${res}`);
        setStock(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(`stock has${err}`);
      });
  }, []);
  return (
    <Container maxWidth="100%" sx={{ bgcolor: '#f9f7f7', paddingTop: '1rem' }}>
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
          <Button onClick={() => setOpen(true)} variant="contained">
            Low Stock
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
              <Notification />
            </DialogContent>
          </Dialog>
          <StockAdd />
        </div>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: '#c2c0d7',
                  fontSize: '18px',
                }}
              >
                Matcode
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: '#c2c0d7',
                  fontSize: '18px',
                }}
              >
                GRN No
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: '#c2c0d7',
                  fontSize: '18px',
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: '#c2c0d7',
                  fontSize: '18px',
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: '#c2c0d7',
                  fontSize: '18px',
                }}
              >
                Remarks
              </TableCell>
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
                  <TableCell>{data.grn_no}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.qty}</TableCell>
                  <TableCell>{data.remark}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Stocks;
