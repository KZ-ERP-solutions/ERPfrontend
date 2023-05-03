import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

function Notification() {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    api.planning.notification
      .list()
      .then((res) => {
        console.log(res);
        setNotification(res.list);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container maxWidth="100%" sx={{ bgcolor: '#F9F7F7' }}>
      <Grid>
        <h2
          style={{ margin: '0', paddingTop: '2rem', paddingBottom: '0.5rem' }}
        >
          Notification
        </h2>
      </Grid>
      <Grid>
        <TableContainer sx={{ maxWidth: '100%' }}>
          <Table sx={{ maxWidth: '100%' }}>
            <TableHead
              sx={{
                bgcolor: '#c2c0d7',
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '18px',
                  }}
                >
                  Matcode
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '18px',
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '18px',
                  }}
                >
                  Current Quantity
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '18px',
                  }}
                >
                  Safe Stock
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notification.map((data) => (
                <TableRow key={data.matcode} component="th" scope="row">
                  <TableCell>{data.matcode}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell sx={{ bgcolor: '#E76161' }}>{data.qty}</TableCell>
                  <TableCell>{data.safe_stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}

export default Notification;
