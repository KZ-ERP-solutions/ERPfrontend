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
import StockEdit from './StockEdit';
import StockLog from './StockLog';

function Stocks() {
  const [stock, setStock] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
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

  const handleEditClose = () => {
    setEditOpen(false);
  };
  console.log(info);

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
          <StockLog />
        </div>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#c2c0d7', fontSize: '18px' }}>
                Matcode
              </TableCell>
              <TableCell sx={{ bgcolor: '#c2c0d7', fontSize: '18px' }}>
                Title
              </TableCell>
              <TableCell sx={{ bgcolor: '#c2c0d7', fontSize: '18px' }}>
                Quantity
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
                <TableRow
                  key={data.matcode}
                  onClick={() => {
                    setEditOpen(true);

                    setInfo(data);
                  }}
                >
                  <TableCell>{data.matcode}</TableCell>
                  <TableCell>{data.title}</TableCell>

                  <TableCell>{data.qty}</TableCell>
                </TableRow>
              ))}
              <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
                <DialogContent>
                  <StockEdit info={info} />
                </DialogContent>
              </Dialog>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Stocks;
