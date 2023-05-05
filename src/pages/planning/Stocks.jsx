import {
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

function Stocks() {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    api.planning.stock
      .list()
      .then((res) => {
        console.log(`stock is${res}`);
        setStock(res);
      })
      .catch((err) => {
        console.log(`stock has${err}`);
      });
  }, []);
  return (
    <Container maxWidth="100%" sx={{ bgcolor: '#f9f7f7', paddingTop: '1rem' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <h2>Stocks</h2>
        <Button variant="contained" sx={{ padding: '7px 25px' }}>
          Add
        </Button>
      </Grid>
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
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Stocks;