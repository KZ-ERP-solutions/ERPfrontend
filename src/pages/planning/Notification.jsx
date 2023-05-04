import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  LinearProgress,
} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

function Notification() {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.planning.notification
      .list()
      .then((res) => {
        console.log(res);
        setNotification(res.list);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <Container maxWidth="100%" sx={{ bgcolor: '#F9F7F7' }}>
      <h2 style={{ margin: '0', paddingTop: '2rem', paddingBottom: '0.5rem' }}>
        Notification
      </h2>

      <TableContainer>
        <Table>
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
          {loading ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            <TableBody>
              {notification.map((data) => (
                <TableRow key={data.matcode}>
                  <TableCell>{data.matcode}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell sx={{ bgcolor: '#FFD9D9', color: '#FF0000' }}>
                    {data.qty}
                  </TableCell>
                  <TableCell>{data.safe_stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Notification;
